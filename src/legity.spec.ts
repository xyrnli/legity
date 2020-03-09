import { legity } from "./legity";
import { isString, min, max, isNumber } from "./rules";

it("Should pass validation of string", () => {
  const validator = legity(isString());
  const isValid = validator("string");

  expect(isValid).toBe(true);
});

it("Should pass validation string with array of rules", () => {
  const validator = legity([isString(), min(2), max(8)]);
  const isValid = validator("string");

  expect(isValid).toBe(true);
});

it("Should pass validation of object properties", () => {
  const validator = legity({
    a: isString(),
    b: isNumber(),
  });

  const isValid = validator({
    a: "string",
    b: 2,
  });

  expect(isValid).toBe(true);
});

it("Should not pass validation of object without validated property", () => {
  const validator = legity({
    a: isString(),
    b: isNumber(),
  });

  const isValid = validator({
    a: "string",
  });

  expect(isValid).toBe(false);
});

it("Should not pass validation of object with incorrect property", () => {
  const validator = legity({
    a: isString(),
    b: isNumber(),
  });

  const isValid = validator({
    a: "string",
    b: "string",
  });

  expect(isValid).toBe(false);
});

it("Should pass validation of array elements", () => {
  const validator = legity({
    elements: isString(),
  });

  const isValid = validator(["string"]);

  expect(isValid).toBe(true);
});

it("Should not pass validation of undefined rules", () => {
  const validator = legity(undefined as any);
  const isValid = validator("string");

  expect(isValid).toBe(false);
});
