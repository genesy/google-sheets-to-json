export interface Villagers {
  sourceSheet: SourceSheet;
  name: string;
  image: string;
  species: string;
  gender: Gender;
  personality: Personality;
  hobby: Hobby;
  birthday: string;
  catchphrase: string;
  filename: string;
  uniqueEntryId: string;
  colors: Color[];
  styles: Style[];
  localization?: Localization;
}

export enum Color {
  Beige = 'Beige',
  Black = 'Black',
  Blue = 'Blue',
  Brown = 'Brown',
  Colorful = 'Colorful',
  Gray = 'Gray',
  Green = 'Green',
  LightBlue = 'Light blue',
  Orange = 'Orange',
  Pink = 'Pink',
  Purple = 'Purple',
  Red = 'Red',
  White = 'White',
  Yellow = 'Yellow',
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
}

export enum Hobby {
  Education = 'Education',
  Fashion = 'Fashion',
  Fitness = 'Fitness',
  Music = 'Music',
  Nature = 'Nature',
  Play = 'Play',
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
  ru_RU: string;
}

export enum Personality {
  BigSister = 'Big Sister',
  Cranky = 'Cranky',
  Jock = 'Jock',
  Lazy = 'Lazy',
  Normal = 'Normal',
  Peppy = 'Peppy',
  Smug = 'Smug',
  Snooty = 'Snooty',
}

export enum SourceSheet {
  Villagers = 'Villagers',
}

export enum Style {
  Active = 'Active',
  Cool = 'Cool',
  Cute = 'Cute',
  Elegant = 'Elegant',
  Gorgeous = 'Gorgeous',
  Simple = 'Simple',
}
