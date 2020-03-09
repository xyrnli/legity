import { validatedFunction, validateInput } from "../types";

/**
 * Rule, which check if input type is number.
 */
export function isNumber(): validatedFunction {
  return (validated: validateInput) => typeof validated === "number";
}
