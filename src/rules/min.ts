import { validatedFunction, validateInput } from "../types";

/**
 * Rule, which return true if input value is equal or more than length param or if length of string is equal or more then length param.
 * @param length minimum length of string or minimum value for number.
 */
export function min(length: number): validatedFunction {
  return (validated: validateInput) => {
    if (typeof validated === "string") {
      return validated.length >= length;
    }
    if (typeof validated === "number") {
      return validated >= length;
    }
    if (Array.isArray(validated)) {
      return validated.length >= length;
    }
    return false;
  };
}
