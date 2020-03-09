import { equal } from "./equal";

it("Should pass validation of equality of two string", () => {
  const isValid = equal("string")("string");

  expect(isValid).toBe(true);
});

it("Should not pass validation of equality of two different numbers", () => {
  const isValid = equal(1)(2);

  expect(isValid).toBe(false);
});
