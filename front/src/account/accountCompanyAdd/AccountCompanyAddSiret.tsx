import React from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { Field, Form, Formik } from "formik";
import { FaHourglassHalf } from "react-icons/fa";
import cogoToast from "cogo-toast";
import { COMPANY_INFOS } from "form/company/query";
import RedErrorMessage from "common/components/RedErrorMessage";
import AutoFormattingSiret from "common/components/AutoFormattingSiret";
import { NotificationError } from "common/components/Error";
import styles from "../AccountCompanyAdd.module.scss";
import { Query } from "generated/graphql/types";

type IProps = {
  onCompanyInfos: (companyInfos) => void;
};

/**
 * SIRET Formik field for company creation
 * The siret is checked against query { companyInfos }
 * to make sure :
 * - company exists
 * - it is not already registered in TD
 * - it is not closed
 */
export default function AccountCompanyAddSiret({ onCompanyInfos }: IProps) {
  const [searchCompany, { loading, error }] = useLazyQuery<
    Pick<Query, "companyInfos">
  >(COMPANY_INFOS, {
    onCompleted: data => {
      if (data && data.companyInfos) {
        const companyInfos = data.companyInfos;
        if (companyInfos.etatAdministratif === "F") {
          cogoToast.error(
            "Cet établissement est fermé, impossible de le créer"
          );
        } else {
          onCompanyInfos(companyInfos);
        }
      }
    },
    fetchPolicy: "no-cache",
  });

  return (
    <>
      {error && <NotificationError apolloError={error} />}
      <Formik
        initialValues={{ siret: "" }}
        validate={values => {
          const trimedSiret = values.siret.replace(/\s/g, "");
          if (trimedSiret.length !== 14) {
            return { siret: "Le SIRET doit faire 14 caractères" };
          }
        }}
        onSubmit={values => {
          // reset company infos
          onCompanyInfos(null);
          searchCompany({
            variables: { siret: values.siret.replace(/\s/g, "") },
          });
        }}
      >
        <Form className={styles.companyAddForm}>
          <div className={styles.field}>
            <label className={`text-right ${styles.bold}`}>SIRET</label>
            <div className={styles.field__value}>
              <Field name="siret" component={AutoFormattingSiret} />
              <RedErrorMessage name="siret" />
              <br />
              <button
                disabled={loading}
                className="btn btn--primary tw-mt-2"
                type="submit"
              >
                {loading ? <FaHourglassHalf /> : "Valider"}
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}
