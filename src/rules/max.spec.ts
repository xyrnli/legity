import { max } from "./max";

it("Should pass validation of number which is equal or less then maximum", () => {
  const isValid = max(3)(2.43);

  expect(isValid).toBe(true);
});

it("Should not pass validation of number which is bigger then maximum", () => {
  const isValid = max(3)(3.001);

  expect(isValid).toBe(false);
});

it("Should pass validation of string which length is equal or less then maximum", () => {
  const isValid = max(6)("string");

  expect(isValid).toBe(true);
});

it("Should not pass validation of string which length is bigger then maximum", () => {
  const isValid = max(5)("string");

  expect(isValid).toBe(false);
});

it("Should pass validation of array which length is equal or less then maximum", () => {
  const isValid = max(6)([1, 2, 3, 4, 5, 6]);

  expect(isValid).toBe(true);
});

it("Should not pass validation of array which length is bigger then maximum", () => {
  const isValid = max(5)([1, 2, 3, 4, 5, 6]);

  expect(isValid).toBe(false);
});

it("Should not pass validation of object", () => {
  const isValid = max(5)({});

  expect(isValid).toBe(false);
});
