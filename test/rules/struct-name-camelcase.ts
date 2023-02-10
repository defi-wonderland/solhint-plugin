import assert from 'assert';
import linter from '../utils/parsers';
const contractWith = require('solhint/test/common/contract-builder').contractWith;

const config = {
    rules: {'struct-name-camelcase': 'error'},
};

describe('Linter - struct-name-camelcase', () => {
    it('should raise error for struct name not in camelcase', () => {
        const code = contractWith('struct teststruct {}');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 1);
        assert.ok(report.messages[0].message == `Struct name 'teststruct' must be in CamelCase`);
    });

    it('should raise error for struct name is in snakecase', () => {
        const code = contractWith('struct TEST_STRUCT {}');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 1);
        assert.ok(report.messages[0].message == `Struct name 'TEST_STRUCT' must be in CamelCase`);
    });

    it('should not raise error for struct name in camelcase', () => {
        const code = contractWith('struct TestStruct {}');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 0);
    });
});
