import { isInteger } from "./isInteger";

it("Should pass validation of integer number", () => {
  const isValid = isInteger()(1);

  expect(isValid).toBe(true);
});

it("Should not pass validation of float number", () => {
  const isValid = isInteger()(1.23);

  expect(isValid).toBe(false);
});

it("Should not pass validation of string", () => {
  const isValid = isInteger()("string");

  expect(isValid).toBe(false);
});