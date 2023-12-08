export interface user {
  name: string;
  phoneNumber: number | string | undefined;
  email: string;
}

export interface userInput {
  dept: string;
  isExpanded: boolean;
  sub_departments: string[];
  selected: boolean[];
}
