export interface Reactions {
  sourceSheet: SourceSheet;
  name: string;
  image: string;
  source: string[];
  internalId?: null;
  uniqueEntryId?: string;
  localization: Localization;
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

export enum SourceSheet {
  Reactions = 'Reactions',
}
