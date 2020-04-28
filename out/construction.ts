export interface Construction {
  sourceSheet: SourceSheet;
  name: string;
  image: string;
  buy: number;
  category: Category;
  source: Source[];
  filename: string;
  uniqueEntryId: string;
  localization?: Localization;
}

export enum Category {
  Bridge = 'Bridge',
  Door = 'Door',
  Incline = 'Incline',
  Mailbox = 'Mailbox',
  Roofing = 'Roofing',
  Siding = 'Siding',
}

export interface Localization {
  en_US: string;
  en_GB: string;
  de_DE: string;
  es_ES: string;
  es_US: string;
  fr_FR: string;
  fr_CA: string;
  it_IT: string;
  nl_NL: string;
  zh_CN: string;
  zh_TW: string;
  ja_JP: string;
  ko_KR: string;
}

export enum Source {
  ResidentServicesUpgrade = 'Resident Services Upgrade',
  The3RDHouseUpgradeLeftRoom = '3rd House Upgrade (Left Room)',
  The4ThHouseUpgradeRightRoom = '4th House Upgrade (Right Room)',
  The5ThHouseUpgrade2NdFloor = '5th House Upgrade (2nd Floor)',
}

export enum SourceSheet {
  Construction = 'Construction',
}
