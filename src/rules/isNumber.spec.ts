import { isNumber } from "./isNumber";

it("Should pass validation of number", () => {
  const isValid = isNumber()(1.23);

  expect(isValid).toBe(true);
});

it("Should not pass validation of string", () => {
  const isValid = isNumber()("string");

  expect(isValid).toBe(false);
});
