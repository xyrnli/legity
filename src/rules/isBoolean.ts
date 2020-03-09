import { validatedFunction, validateInput } from "../types";

/**
 * Rule, which check if input type is boolean.
 *
 * Also return true if input have value zero or one.
 */
export function isBoolean(): validatedFunction {
  return (validated: validateInput) => typeof validated === "boolean" || validated === 1 || validated === 0;
}
