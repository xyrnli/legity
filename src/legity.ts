import { validatedFunction, IValidateObjectRule, validateInput, IValidateArrayRule } from "./types";

/**
 * Create function-validator.
 * @param rules One rule or array or object of rules which will be used to validate input data.
 * @returns Function-validator which can be called to validate any input data by using current rules.
 *
 * @example
 * const validator = legity(isString());
 * const isValid = validator("string");
 */
export function legity(rules: validatedFunction | validatedFunction[] | IValidateObjectRule | IValidateArrayRule): validatedFunction {
  return (validated: validateInput) => {
    if (typeof rules === "function") {
      return rules(validated);
    }
    if (Array.isArray(rules)) {
      return !rules.map(rule => rule(validated)).includes(false);
    }
    if (typeof rules === "object") {
      if (typeof validated === "object" && !Array.isArray(validated)) {
        for (const index in rules) {
          if (typeof validated[index] !== "undefined") {
            if (!legity(rules[index])(validated[index])) {
              return false;
            }
          } else {
            return false;
          }
        }
        return true;
      }
      if (typeof validated === "object" && Array.isArray(validated)) {
        const arrayRules = rules.elements;
        if (typeof arrayRules !== "undefined") {
          return !validated.map(value => legity(arrayRules)(value)).includes(false);
        }
      }
    }
    return false;
  };
}
