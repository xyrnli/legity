import { validatedFunction, validateInput } from "../types";

/**
 * Rule, which check if input type is string.
 */
export function isString(): validatedFunction {
  return (validated: validateInput) => typeof validated === "string";
}
