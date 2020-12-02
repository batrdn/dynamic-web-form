export interface Form {
  id: string;
  name: string;
  layout: FormLayout;
  fields: FormField[];
  initialValues?: any;
  description?: string;
}

export interface FormField {
  id: string;
  name: string;
  type: FieldType;
  index: number;
  validations: Validation[];
  colspan?: number;
  showValidationStatus?: boolean;
  label?: string;
  placeholder?: string;
  value?: string;
  dataSource?: string[];
}

export enum FieldType {
  INPUT = "input",
  NUMBER = "number",
  DROPDOWN = "dropdown",
  CHECKBOX = "checkbox",
  PASSWORD = "password",
  SUBMIT = "submit",
  RADIO = "radio",
  DATE = "date",
  TOGGLE = "toggle"
}

export interface Validation {
  required?: boolean;
  message?: string;
  max?: number;
  min?: number;
  pattern?: RegExp;
}

export enum FormLayout {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
  INLINE = "inline"
}

export enum ValidateStatus {
  ERROR = "error",
  WARNING = "warning",
  VALIDATING = "validating"
}
