import { validatedFunction, validateInput } from "../types";

/**
 * Rule, which check if input type is integer.
 */
export function isInteger(): validatedFunction {
  return (validated: validateInput) => typeof validated === "number" && Number.isInteger(validated);
}
