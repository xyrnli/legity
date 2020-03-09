import { validatedFunction, validateInput } from "../types";

/**
 * Rule, which return true if input value equal or less than length param or if length of string is equal or less then length param.
 * @param length maximum length of string or maximum value for number.
 */
export function max(length: number): validatedFunction {
  return (validated: validateInput) => {
    if (typeof validated === "string") {
      return validated.length <= length;
    }
    if (typeof validated === "number") {
      return validated <= length;
    }
    if (Array.isArray(validated)) {
      return validated.length <= length;
    }
    return false;
  };
}
