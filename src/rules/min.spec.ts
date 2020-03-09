import { min } from "./min";

it("Should pass validation of number which is equal or bigger then minimum", () => {
  const isValid = min(3)(3.01);

  expect(isValid).toBe(true);
});

it("Should not pass validation of number which is less then minimum", () => {
  const isValid = min(3)(2.999);

  expect(isValid).toBe(false);
});

it("Should pass validation of string which length is equal or bigger then minimum", () => {
  const isValid = min(6)("string");

  expect(isValid).toBe(true);
});

it("Should not pass validation of string which length is less then minimum", () => {
  const isValid = min(7)("string");

  expect(isValid).toBe(false);
});

it("Should pass validation of array which length is equal or bigger then minimum", () => {
  const isValid = min(6)([1, 2, 3, 4, 5, 6]);

  expect(isValid).toBe(true);
});

it("Should not pass validation of array which length is less then minimum", () => {
  const isValid = min(7)([1, 2, 3, 4, 5, 6]);

  expect(isValid).toBe(false);
});

it("Should not pass validation of object", () => {
  const isValid = min(5)({});

  expect(isValid).toBe(false);
});
