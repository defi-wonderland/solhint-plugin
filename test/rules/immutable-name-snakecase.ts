import assert from 'assert';
import linter from '../utils/parsers';
const contractWith = require('solhint/test/common/contract-builder').contractWith;

const config = {
    rules: { 'immutable-name-snakecase': 'error' },
};

describe('Linter - immutable-name-snakecase', () => {
    it('should raise error for immutable name not in snakecase', () => {
        const varName = 'testVar';
        const code = contractWith(`uint256 immutable ${varName};`);
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 1);
        console.log(report.messages[0].message)
        assert.ok(report.messages[0].message == `Immutable '${varName}' must be in capitalized SNAKE_CASE`);
    });

    it('should not raise error for immutable name in snakecase', () => {
        const code = contractWith('uint256 immutable TEST_VAR;');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 0);
    });

    it('should not raise error for immutable name in snakecase with underscore prefix', () => {
        const code = contractWith('uint256 immutable _TEST_VAR;');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 0);
    });
});
