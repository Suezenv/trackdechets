import fs, { createWriteStream } from "fs";
import {
  userWithCompanyFactory,
  formFactory
} from "../../../__tests__/factories";
import makeClient from "../../../__tests__/testClient";
import supertest from "supertest";
import { app } from "../../../server";
import { resetDatabase } from "../../../../integration-tests/helper";
import { parseString } from "@fast-csv/parse";
import Excel from "exceljs";
import { ErrorCode } from "../../../common/errors";

describe("query { formsRegister }", () => {
  afterEach(() => resetDatabase());

  it("should throw exception if register is empty", async () => {
    const { user, company } = await userWithCompanyFactory("MEMBER");
    const { query } = makeClient(user);
    const { errors } = await query(`
      query {
        formsRegister(sirets: ["${company.siret}"], exportType: OUTGOING, exportFormat: CSV) {
          token
          downloadLink
        }
      }
    `);
    expect(errors).toHaveLength(1);
    expect(errors[0].message).toEqual(
      "Aucune donnée à exporter sur la période sélectionnée"
    );
  });

  it("throw FORBIDDEN error if user is not member of a siret", async () => {
    const { user, company } = await userWithCompanyFactory("MEMBER");
    const { query } = makeClient(user);
    const { errors } = await query(`
      query {
        formsRegister(sirets: ["${company.siret}", "11111111111111"], exportType: OUTGOING, exportFormat: CSV) {
          token
          downloadLink
        }
      }
    `);
    expect(errors).toHaveLength(1);
    expect(errors[0].extensions.code).toEqual(ErrorCode.FORBIDDEN);
  });

  it("should download CSV exports", async () => {
    const { user, company } = await userWithCompanyFactory("MEMBER");

    const form = await formFactory({
      ownerId: user.id,
      opt: { emitterCompanySiret: company.siret, status: "SENT" }
    });
    const { query } = makeClient(user);

    const { data } = await query(`
      query {
        formsRegister(sirets: ["${company.siret}"], exportType: OUTGOING, exportFormat: CSV) {
          token
          downloadLink
        }
      }
    `);

    expect(data.formsRegister.token).not.toBeUndefined();
    expect(data.formsRegister.token).not.toBeNull();

    const request = supertest(app);

    const res = await request
      .get("/download")
      .query({ token: data.formsRegister.token });

    expect(res.status).toBe(200);

    const rows = [];

    parseString(res.text, { headers: true, delimiter: ";" })
      .on("data", row => rows.push(row))
      .on("end", (rowCount: number) => {
        expect(rowCount).toEqual(1);
        const row = rows[0];
        expect(row["N° de bordereau"]).toEqual(form.readableId);
      });
  });

  it("should download XLSX exports", async () => {
    const { user, company } = await userWithCompanyFactory("MEMBER");

    const form = await formFactory({
      ownerId: user.id,
      opt: { emitterCompanySiret: company.siret, status: "SENT" }
    });
    const { query } = makeClient(user);

    const { data } = await query(`
      query {
        formsRegister(sirets: ["${company.siret}"], exportType: OUTGOING, exportFormat: XLSX) {
          token
          downloadLink
        }
      }
    `);

    expect(data.formsRegister.token).not.toBeUndefined();
    expect(data.formsRegister.token).not.toBeNull();

    const request = supertest(app);

    const req = request
      .get("/download")
      .query({ token: data.formsRegister.token });

    const tmpFolder = fs.mkdtempSync("/");
    const filename = `${tmpFolder}/registre.xlsx`;
    const writeStream = createWriteStream(filename);

    req.pipe(writeStream);

    await new Promise(resolve => {
      req.on("end", async () => {
        resolve();
      });
    });

    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(filename);
    const worksheet = workbook.getWorksheet("registre");
    expect(worksheet.rowCount).toBe(2);
    const row1 = worksheet.getRow(1);
    const row2 = worksheet.getRow(2);
    expect(row1.getCell(1).value).toEqual("N° de bordereau");
    expect(row2.getCell(1).value).toEqual(form.readableId);
  });
});
