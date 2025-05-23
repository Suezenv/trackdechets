import { ParsedZodInputIncomingTexsItem } from "./validation/schema";

export const INCOMING_TEXS_HEADERS: {
  [key in keyof ParsedZodInputIncomingTexsItem]: string;
} = {
  reason: "Motif",
  publicId: "Identifiant unique",
  reportAsCompanySiret: "SIRET du déclarant",
  reportForCompanySiret: "SIRET du destinataire",
  wasteDescription:
    "Dénomination usuelle des terres et sédiments ou des déchets",
  wasteCode: "Code déchet",
  wasteCodeBale: "Code déchet Bâle",
  wastePop: "POP",
  wasteIsDangerous: "Dangereux",
  wasteDap: "DAP",
  receptionDate: "Date de réception",
  weightValue: "Poids en tonnes",
  weightIsEstimate: "Type de poids",
  volume: "Volume en M3",
  parcelInseeCodes: "Codes INSEE des parcelles",
  parcelNumbers: "Numéro(s) des parcelles",
  parcelCoordinates: "Coordonnées des parcelles",
  sisIdentifier: "Identifiant SIS du terrain",
  initialEmitterCompanyType: "Type de producteur initial",
  initialEmitterCompanyOrgId: "Numéro d'identification du producteur initial",
  initialEmitterCompanyName: "Raison sociale du producteur initial",
  initialEmitterCompanyAddress: "Libellé de l'adresse du producteur initial",
  initialEmitterCompanyPostalCode: "Code postal du producteur initial",
  initialEmitterCompanyCity: "Commune du producteur initial",
  initialEmitterCompanyCountryCode: "Code pays du producteur initial",
  initialEmitterMunicipalitiesInseeCodes: "Code(s) INSEE de(s) commune(s)",
  emitterCompanyType: "Type d'expéditeur ou détenteur",
  emitterCompanyOrgId: "Numéro d'identification de l'expéditeur ou détenteur",
  emitterCompanyName: "Raison sociale de l'expéditeur ou détenteur",
  emitterCompanyAddress: "Libellé de l'adresse de l'expéditeur ou détenteur",
  emitterCompanyPostalCode: "Code postal de l'expéditeur ou détenteur",
  emitterCompanyCity: "Commune de l'expéditeur ou détenteur",
  emitterCompanyCountryCode: "Code pays de l'expéditeur ou détenteur",
  emitterPickupSiteName:
    "Référence du chantier ou du lieu de collecte de l'expéditeur",
  emitterPickupSiteAddress:
    "Libellé de l'adresse de prise en charge de l'expéditeur ou détenteur",
  emitterPickupSitePostalCode:
    "Code postal de prise en charge de l'expéditeur ou détenteur",
  emitterPickupSiteCity:
    "Commune de prise en charge de l'expéditeur ou détenteur",
  emitterPickupSiteCountryCode:
    "Code pays de prise en charge de l'expéditeur ou détenteur",
  ttdImportNumber: "Numéro de notification ou de déclaration d'import",
  movementNumber: "Numéro de mouvement",
  ecoOrganismeSiret: "SIRET de l'éco-organisme",
  ecoOrganismeName: "Raison sociale de l'éco-organisme",
  brokerCompanySiret: "SIRET du courtier",
  brokerCompanyName: "Raison sociale du courtier",
  brokerRecepisseNumber: "Numéro de récépissé du courtier",
  traderCompanySiret: "SIRET du négociant",
  traderCompanyName: "Raison sociale du négociant",
  traderRecepisseNumber: "Numéro de récépissé du négociant",
  operationCode: "Code de traitement réalisé",
  operationMode: "Mode de traitement",
  noTraceability: "Rupture de traçabilité autorisée",
  nextOperationCode: "Code de traitement ultérieur prévue",
  isUpcycled: "Terre valorisée",
  destinationParcelInseeCodes: "Codes INSEE des parcelles si valorisation",
  destinationParcelNumbers: "Numéro(s) des parcelles si valorisation",
  destinationParcelCoordinates: "Coordonnées des parcelles si valorisation",
  isDirectSupply: "Approvisionnement direct",
  transporter1TransportMode: "Mode de transport du transporteur n°1",
  transporter1CompanyType: "Type de transporteur n°1",
  transporter1CompanyOrgId: "Numéro d'identification du transporteur n°1",
  transporter1CompanyName: "Raison sociale du transporteur n°1",
  transporter1CompanyAddress: "Libellé de l'adresse du transporteur n°1",
  transporter1CompanyPostalCode: "Code postal du transporteur n°1",
  transporter1CompanyCity: "Commune du transporteur n°1",
  transporter1CompanyCountryCode: "Code pays du transporteur n°1",
  transporter1RecepisseIsExempted: "Exemption de récépissé du transporteur n°1",
  transporter1RecepisseNumber: "Numéro de récépissé du transporteur n°1",
  transporter2TransportMode: "Mode de transport du transporteur n°2",
  transporter2CompanyType: "Type de transporteur n°2",
  transporter2CompanyOrgId: "Numéro d'identification du transporteur n°2",
  transporter2CompanyName: "Raison sociale du transporteur n°2",
  transporter2CompanyAddress: "Libellé de l'adresse du transporteur n°2",
  transporter2CompanyPostalCode: "Code postal du transporteur n°2",
  transporter2CompanyCity: "Commune du transporteur n°2",
  transporter2CompanyCountryCode: "Code pays du transporteur n°2",
  transporter2RecepisseIsExempted: "Exemption de récépissé du transporteur n°2",
  transporter2RecepisseNumber: "Numéro de récépissé du transporteur n°2",
  transporter3TransportMode: "Mode de transport du transporteur n°3",
  transporter3CompanyType: "Type de transporteur n°3",
  transporter3CompanyOrgId: "Numéro d'identification du transporteur n°3",
  transporter3CompanyName: "Raison sociale du transporteur n°3",
  transporter3CompanyAddress: "Libellé de l'adresse du transporteur n°3",
  transporter3CompanyPostalCode: "Code postal du transporteur n°3",
  transporter3CompanyCity: "Commune du transporteur n°3",
  transporter3CompanyCountryCode: "Code pays du transporteur n°3",
  transporter3RecepisseIsExempted: "Exemption de récépissé du transporteur n°3",
  transporter3RecepisseNumber: "Numéro de récépissé du transporteur n°3",
  transporter4TransportMode: "Mode de transport du transporteur n°4",
  transporter4CompanyType: "Type de transporteur n°4",
  transporter4CompanyOrgId: "Numéro d'identification du transporteur n°4",
  transporter4CompanyName: "Raison sociale du transporteur n°4",
  transporter4CompanyAddress: "Libellé de l'adresse du transporteur n°4",
  transporter4CompanyPostalCode: "Code postal du transporteur n°4",
  transporter4CompanyCity: "Commune du transporteur n°4",
  transporter4CompanyCountryCode: "Code pays du transporteur n°4",
  transporter4RecepisseIsExempted: "Exemption de récépissé du transporteur n°4",
  transporter4RecepisseNumber: "Numéro de récépissé du transporteur n°4",
  transporter5TransportMode: "Mode de transport du transporteur n°5",
  transporter5CompanyType: "Type de transporteur n°5",
  transporter5CompanyOrgId: "Numéro d'identification du transporteur n°5",
  transporter5CompanyName: "Raison sociale du transporteur n°5",
  transporter5CompanyAddress: "Libellé de l'adresse du transporteur n°5",
  transporter5CompanyPostalCode: "Code postal du transporteur n°5",
  transporter5CompanyCity: "Commune du transporteur n°5",
  transporter5CompanyCountryCode: "Code pays du transporteur n°5",
  transporter5RecepisseIsExempted: "Exemption de récépissé du transporteur n°5",
  transporter5RecepisseNumber: "Numéro de récépissé du transporteur n°5"
};
