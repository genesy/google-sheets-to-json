export interface Recipes {
  sourceSheet: SourceSheet;
  name: string;
  source: string[];
  sourceNotes: null | string;
  version: Version;
  category: Category;
  internalId: number;
  uniqueEntryId: string;
  materials: {[key: string]: number};
  localization?: Localization;
}

export enum Category {
  Accessories = 'Accessories',
  Bags = 'Bags',
  Bottoms = 'Bottoms',
  Dresses = 'Dresses',
  Fencing = 'Fencing',
  Floors = 'Floors',
  Headwear = 'Headwear',
  Housewares = 'Housewares',
  Miscellaneous = 'Miscellaneous',
  Other = 'Other',
  Rugs = 'Rugs',
  Shoes = 'Shoes',
  Tools = 'Tools',
  Tops = 'Tops',
  Umbrellas = 'Umbrellas',
  WallMounted = 'Wall-mounted',
  Wallpaper = 'Wallpaper',
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
  Recipes = 'Recipes',
}

export enum Version {
  The100 = '1.0.0',
  The110A = '1.1.0a',
  The120 = '1.2.0',
}
