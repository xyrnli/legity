export type validateInput = any;

export type validatedFunction = (validated: validateInput) => boolean;

export interface IValidateObjectRule {
  [index: string]: validatedFunction | validatedFunction[];
}

export interface IValidateArrayRule {
  elements: validatedFunction | validatedFunction[];
}
