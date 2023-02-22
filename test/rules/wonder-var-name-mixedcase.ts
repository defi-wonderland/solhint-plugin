import assert from 'assert';
import { processStr } from '../utils/parsers';
import { contractWith } from 'solhint/test/common/contract-builder';

const config = {
  rules: { 'wonder-var-name-mixedcase': 'error' },
};

describe('Linter - wonder-var-name-mix-case', () => {
  it('should raise error for variable name not in mixedcase', () => {
    const variableName = 'test_variable';
    const code = contractWith(`uint256 ${variableName};`);
    const report = processStr(code, config);

    assert.equal(report.errorCount, 1);
    assert.ok(report.messages[0].message == `Variable name ${variableName} must be in mixedCase`);
  });

  it('should raise error for variable name is in snakecase', () => {
    const variableName = 'TEST_VARIABLE';
    const code = contractWith(`uint256 ${variableName};`);
    const report = processStr(code, config);

    assert.equal(report.errorCount, 1);
    assert.ok(report.messages[0].message == `Variable name ${variableName} must be in mixedCase`);
  });

  it('should not raise error for variable name in mixedcase', () => {
    const code = contractWith('uint256 testVariable;');
    const report = processStr(code, config);

    assert.equal(report.errorCount, 0);
  });

  it('should not raise an error for immutable variable name in snakecase', () => {
    const code = contractWith('uint256 immutable TEST_VARIABLE = 1;');
    const report = processStr(code, config);

    assert.equal(report.errorCount, 0);
  });

  it('should not raise an error for constant variable name in snakecase', () => {
    const code = contractWith('uint256 constant TEST_VARIABLE = 1;');
    const report = processStr(code, config);

    assert.equal(report.errorCount, 0);
  });
});
