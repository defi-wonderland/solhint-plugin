import assert from 'assert';
import linter from '../utils/parsers';
const contractWith = require('solhint/test/common/contract-builder').contractWith;

const config = {
    rules: { 'contract-data-order': 'error' },
};

describe('Linter - contract-data-order', () => {
    it('should raise error for contract data order when state var first than constant', () => {
        const code = contractWith('uint public a; uint constant b;');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 1);
        assert.ok(report.messages[0].message == `The order of data in contract A should be: Constants, Immutable variables, State Variables`);
    });
 
    it('should raise error for contract data order when state var first than immutable', () => {
        const code = contractWith('uint public a; uint immutable b;');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 1);
        assert.ok(report.messages[0].message == `The order of data in contract A should be: Constants, Immutable variables, State Variables`);
    });

    it('should raise error for contract data order when immutable first than constant', () => {
        const code = contractWith('uint immutable b; uint constant c;');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 1);
        assert.ok(report.messages[0].message == `The order of data in contract A should be: Constants, Immutable variables, State Variables`);
    });

    it('should not raise an error for contract data order constant, state var, immutable', () => {
        const code = contractWith('uint constant c; uint immutable b; uint public a;');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 0);
    });
});
