// types.ts
export interface Option {
  value: string;
  label: string;
}

export interface Field {
  label: string;
  type: "text" | "select"; // Specify the types of inputs
  options?: Option[]; // Options are optional for text fields
}

export interface SearchDropdownProps {
  fields: Field[];
}
