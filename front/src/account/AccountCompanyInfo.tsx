import React from "react";
import { gql } from "@apollo/client";
import { filter } from "graphql-anywhere";
import AccountFieldCompanyTypes from "./fields/AccountFieldCompanyTypes";
import AccountFieldNotEditable from "./fields/AccountFieldNotEditable";
import AccountFieldCompanyGerepId from "./fields/AccountFieldCompanyGerepId";
import AccountFieldCompanyGivenName, {
  tooltip as givenNameTooltip,
} from "./fields/AccountFieldCompanyGivenName";
import { CompanyPrivate, UserRole, CompanyType } from "generated/graphql/types";
import AccountFieldCompanyTransporterReceipt from "./fields/AccountFieldCompanyTransporterReceipt";
import AccountFieldCompanyTraderReceipt from "./fields/AccountFieldCompanyTraderReceipt";
import AccountFieldCompanyBrokerReceipt from "./fields/AccountFieldCompanyBrokerReceipt";
import AccountFieldCompanyVerificationStatus from "./fields/AccountFieldCompanyVerificationStatus";
import * as COMPANY_TYPES from "generated/constants/COMPANY_TYPES";

const { REACT_APP_VERIFY_COMPANY } = process.env;

type Props = { company: CompanyPrivate };

AccountCompanyInfo.fragments = {
  company: gql`
    fragment AccountCompanyInfoFragment on CompanyPrivate {
      id
      siret
      address
      naf
      libelleNaf
      userRole
      givenName
      ...AccountFieldCompanyTypesFragment
      ...AccountFieldCompanyGerepIdFragment
      ...AccountFieldCompanyGivenNameFragment
      ...AccountFieldCompanyTransporterReceiptFragment
      ...AccountFieldCompanyTraderReceiptFragment
      ...AccountFieldCompanyBrokerReceiptFragment
      ...AccountFieldCompanyVerificationStatusFragment
      installation {
        urlFiche
      }
    }
    ${AccountFieldCompanyTypes.fragments.company}
    ${AccountFieldCompanyGerepId.fragments.company}
    ${AccountFieldCompanyGivenName.fragments.company}
    ${AccountFieldCompanyTransporterReceipt.fragments.company}
    ${AccountFieldCompanyTraderReceipt.fragments.company}
    ${AccountFieldCompanyBrokerReceipt.fragments.company}
    ${AccountFieldCompanyVerificationStatus.fragments.company}
  `,
};

export default function AccountCompanyInfo({ company }: Props) {
  const isWasteProfessional = company.companyTypes.some(ct =>
    COMPANY_TYPES.PROFESSIONALS.includes(ct)
  );

  return (
    <>
      <AccountFieldNotEditable
        name="siret"
        label="Numéro SIRET"
        value={company.siret}
      />
      <AccountFieldNotEditable
        name="naf"
        label="Code NAF"
        value={`${company.naf} - ${company.libelleNaf}`}
      />
      <AccountFieldNotEditable
        name="adresse"
        label="Adresse"
        value={company.address}
      />
      {company.installation && company.installation.urlFiche && (
        <>
          <AccountFieldNotEditable
            name="fiche_ic"
            label="Fiche ICPE"
            value={
              <a
                href={company.installation.urlFiche}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lien
              </a>
            }
          />
        </>
      )}
      <AccountFieldCompanyGerepId
        company={filter(AccountFieldCompanyGerepId.fragments.company, company)}
      />
      <AccountFieldCompanyTypes
        company={filter(AccountFieldCompanyTypes.fragments.company, company)}
      />
      {REACT_APP_VERIFY_COMPANY === "true" && isWasteProfessional && (
        <AccountFieldCompanyVerificationStatus
          company={filter(
            AccountFieldCompanyVerificationStatus.fragments.company,
            company
          )}
        />
      )}
      {company.companyTypes.includes(CompanyType.Transporter) && (
        <AccountFieldCompanyTransporterReceipt
          company={filter(
            AccountFieldCompanyTransporterReceipt.fragments.company,
            company
          )}
        />
      )}
      {company.companyTypes.includes(CompanyType.Trader) && (
        <AccountFieldCompanyTraderReceipt
          company={filter(
            AccountFieldCompanyTraderReceipt.fragments.company,
            company
          )}
        />
      )}
      {company.companyTypes.includes(CompanyType.Broker) && (
        <AccountFieldCompanyBrokerReceipt
          company={filter(
            AccountFieldCompanyBrokerReceipt.fragments.company,
            company
          )}
        />
      )}
      {company.userRole === UserRole.Admin ? (
        <AccountFieldCompanyGivenName
          company={filter(
            AccountFieldCompanyGivenName.fragments.company,
            company
          )}
        />
      ) : (
        company.givenName && (
          <AccountFieldNotEditable
            name="givenName"
            label="Nom usuel"
            tooltip={givenNameTooltip}
            value={company.givenName}
          />
        )
      )}
    </>
  );
}
