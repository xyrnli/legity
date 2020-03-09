import { validatedFunction, validateInput } from "../types";

/**
 * Rule, which check if input type is object.
 */
export function isObject(): validatedFunction {
  return (validated: validateInput) => typeof validated === "object";
}
