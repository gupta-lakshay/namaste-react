import { sum } from "../sum";
test("sum function should calc sum of two numbers", () => {
  const result = sum(1, 2);
  //assertion
  expect(result).toBe(3);
});
