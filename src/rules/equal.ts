import { validatedFunction, validateInput } from "../types";

/**
 * Rule, which compare input with comparable value and return true if they are equal.
 *
 * **Warning!** Does not work with objects.
 * @param comparable value, which will compare with input.
 */
export function equal(comparable: any): validatedFunction {
  return (validated: validateInput) => validated === comparable;
}
