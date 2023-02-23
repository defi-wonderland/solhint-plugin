import assert from 'assert';
import { processStr } from '../utils/parsers';
import { contractWith } from 'solhint/test/common/contract-builder';

const config = {
  rules: { 'wonder-private-vars-leading-underscore': 'error' },
};

describe('Linter - wonder-private-vars-leading-underscore', () => {
  it('should raise error for private variable name not starting with underscore', () => {
    const variableName = 'testVariable';
    const code = contractWith(`uint256 private ${variableName};`);
    const report = processStr(code, config);

    assert.equal(report.errorCount, 1);
    assert.ok(report.messages[0].message == `'${variableName}' should start with "_"`);
  });

  it('should raise error for internal variable name not starting with underscore', () => {
    const variableName = 'testVariable';
    const code = contractWith(`uint256 internal ${variableName};`);
    const report = processStr(code, config);

    assert.equal(report.errorCount, 1);
    assert.ok(report.messages[0].message == `'${variableName}' should start with "_"`);
  });

  it('should raise error for non private variable name starting with underscore', () => {
    const variableName = '_testVariable';
    const code = contractWith(`uint256 ${variableName};`);
    const report = processStr(code, config);

    assert.equal(report.errorCount, 1);
    assert.ok(report.messages[0].message == `'${variableName}' should not start with "_"`);
  });

  it('should not raise error for public variable name not starting with underscore', () => {
    const code = contractWith('uint256 public testVariable;');
    const report = processStr(code, config);

    assert.equal(report.errorCount, 0);
  });

  it('should raise error for private function name not starting with underscore', () => {
    const functionName = 'foo';
    const code = contractWith(`function ${functionName}() private {}`);
    const report = processStr(code, config);

    assert.equal(report.errorCount, 1);
    assert.ok(report.messages[0].message == `'${functionName}' should start with "_"`);
  });

  it('should raise error for internal function name not starting with underscore', () => {
    const functionName = 'foo';
    const code = contractWith(`function ${functionName}() internal {}`);
    const report = processStr(code, config);

    assert.equal(report.errorCount, 1);
    assert.ok(report.messages[0].message == `'${functionName}' should start with "_"`);
  });

  it('should raise error for non private variable name starting with underscore', () => {
    const functionName = '_foo';
    const code = contractWith(`function ${functionName}() {}`);
    const report = processStr(code, config);

    assert.equal(report.errorCount, 1);
    assert.ok(report.messages[0].message == `'${functionName}' should not start with "_"`);
  });

  it('should not raise error for public variable name not starting with underscore', () => {
    const code = contractWith('function foo() public {}');
    const report = processStr(code, config);

    assert.equal(report.errorCount, 0);
  });
});
