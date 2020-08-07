import { useFormikContext, Field } from "formik";
import React, { useEffect } from "react";
import CompanySelector from "../company/CompanySelector";
import { Form } from "../../generated/graphql/types";
import { PROCESSING_OPERATIONS } from "../../generated/constants";
import initialState from "../initial-state";

export default function TemporaryStorage(props) {
  const { values, setFieldValue } = useFormikContext<Form>();

  useEffect(() => {
    if (values.recipient?.isTempStorage && !values.temporaryStorageDetail) {
      setFieldValue(
        "temporaryStorageDetail",
        initialState.temporaryStorageDetail
      );
    }

    if (
      values.recipient?.processingOperation &&
      values.temporaryStorageDetail &&
      !values.temporaryStorageDetail.destination?.processingOperation
    ) {
      setFieldValue(
        "temporaryStorageDetail.destination.processingOperation",
        values.recipient.processingOperation
      );
    }
  }, [values, setFieldValue]);

  if (!values.recipient?.isTempStorage || !values.temporaryStorageDetail) {
    return null;
  }

  return (
    <>
      <h4>Installation de destination prévue</h4>
      <CompanySelector
        name={
          `${props.name}.destination.company` as "temporaryStorageDetail.destination.company"
        }
      />

      <div className="form__group">
        <label>
          Numéro de CAP (le cas échéant)
          <Field type="text" name={`${props.name}.destination.cap`} />
        </label>
      </div>

      <div className="form__group">
        <label>Opération d'élimination / valoristation prévue (code D/R)</label>

        <Field
          component="select"
          name={`${props.name}.destination.processingOperation`}
        >
          <option value="">Choisissez...</option>
          {PROCESSING_OPERATIONS.map(operation => (
            <option key={operation.code} value={operation.code}>
              {operation.code} - {operation.description.substr(0, 50)}
              {operation.description.length > 50 ? "..." : ""}
            </option>
          ))}
        </Field>
      </div>
    </>
  );
}
