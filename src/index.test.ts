import { add } from "./index";
import { describe, it } from "mocha";
import * as assert from "assert/strict";

describe("index", () => {
  describe("add", () => {
    it("case1", () => {
      assert.equal(add(1, 2), 3);
    });
  });
});
