import { findAll } from "../../4-kyu/16-findAll";

it("Simple Cases", () => {
  expect(findAll(10, 3)).toStrictEqual([8, "118", "334"]);
  expect(findAll(27, 3)).toStrictEqual([1, "999", "999"]);
  expect(findAll(84, 4)).toStrictEqual([]);
  expect(findAll(35, 6)).toStrictEqual([123, "116999", "566666"]);
});
