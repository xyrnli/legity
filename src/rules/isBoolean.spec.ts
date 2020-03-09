import { isBoolean } from "./isBoolean";

it("Should pass validation of boolean variable", () => {
  const isValid = isBoolean()(true);

  expect(isValid).toBe(true);
});

it("Should pass validation of number one variable", () => {
  const isValid = isBoolean()(1);

  expect(isValid).toBe(true);
});

it("Should pass validation of number zero variable", () => {
  const isValid = isBoolean()(0);

  expect(isValid).toBe(true);
});

it("Should not pass validation of string", () => {
  const isValid = isBoolean()("string");

  expect(isValid).toBe(false);
});