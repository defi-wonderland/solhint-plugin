import assert from 'assert';
import linter from '../utils/parsers';
const contractWith = require('solhint/test/common/contract-builder').contractWith;

const config = {
    rules: { 'enum-name-camelcase': 'error' },
};

describe('Linter - enum-name-camelcase', () => {
    it('should raise error for enum name not in camelcase', () => {
        const code = contractWith('enum testenum {}');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 1);
        console.log(report.messages[0].message);
        assert.ok(report.messages[0].message == `Enum name 'testenum' must be in CamelCase`);
    });

    it('should raise error for enum name with snakecase', () => {
        const code = contractWith('enum TEST_ENUM {}');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 1);
        console.log(report.messages[0].message);
        assert.ok(report.messages[0].message == `Enum name 'TEST_ENUM' must be in CamelCase`);
    });

    it('should not raise error for enum name in camelcase', () => {
        const code = contractWith('enum TestEnum {}');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 0);
    });
});
