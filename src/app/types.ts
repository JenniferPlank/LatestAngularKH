export interface Animal {

  name: string;
  photo: any;
  ScientificName: string;
  ConservationStatus: string;
  Range: string;
}

export interface Filter {
  displayName: string;
  options: Option[];
}

export type FilterState = Record<string, Option>;

export type Option = string | number;
