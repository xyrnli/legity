import { isObject } from "./isObject";

it("Should pass validation of object", () => {
  const isValid = isObject()({});

  expect(isValid).toBe(true);
});

it("Should pass validation of array", () => {
  const isValid = isObject()([]);

  expect(isValid).toBe(true);
});

it("Should pass validation of string", () => {
  const isValid = isObject()("string");

  expect(isValid).toBe(false);
});
