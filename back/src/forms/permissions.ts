import { or } from "graphql-shield";

import {
  canAccessForm,
  isFormRecipient,
  isFormEmitter,
  isFormTransporter
} from "./rules";
import {
  isAuthenticated,
  isCompanyMember,
  isCompanyAdmin,
  isCompaniesUser
} from "../common/rules";

export default {
  Query: {
    form: canAccessForm,
    formPdf: canAccessForm,
    formsRegister: isCompaniesUser,
    forms: isAuthenticated,
    stats: isAuthenticated,
    appendixForms: or(isCompanyMember, isCompanyAdmin)
  },
  Mutation: {
    saveForm: isAuthenticated,
    deleteForm: canAccessForm,
    duplicateForm: canAccessForm,
    markAsSealed: or(isFormRecipient, isFormEmitter),
    markAsSent: or(isFormRecipient, isFormEmitter),
    markAsReceived: isFormRecipient,
    markAsProcessed: isFormRecipient,
    signedByTransporter: isFormTransporter
  }
};
