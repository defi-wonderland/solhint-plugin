import assert from "assert";
import linter from "../index";
const contractWith =
  require("solhint/test/common/contract-builder").contractWith;

describe("non-state-vars-leading-underscore", () => {
  it("should raise an error if a block variable does not start with an underscore", () => {
    const code = contractWith("function foo() public { uint myVar; }");
    const report = linter.processStr(code, {
      rules: { "non-state-vars-leading-underscore": "error" },
    });
    console.log(report.messages[0].message);
    assert.equal(report.errorCount, 1);
    assert.ok(report.messages[0].message == `'myVar' should start with _`);
  });

  it("should not raise an error if a block variable starts with an underscore", () => {
    const code = contractWith("function foo() public { uint _myVar; }");
    const report = linter.processStr(code, {
      rules: { "non-state-vars-leading-underscore": "error" },
    });

    assert.equal(report.errorCount, 0);
  });
});
