import assert from 'assert';
import linter from '../utils/parsers';
import { interfaceWith } from '../utils/interface-builder';

const config = {
    rules: { 'interface-member-order': 'error' },
};

describe('Linter - interface-member-order', () => {
    it('should raise error when errors first than events', () => {
        const code = interfaceWith('ITest', 'error TestError(); event TestEvent();');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 1);
        assert.ok(report.messages[0].message == `The order of members in the interface ITest interfaces should be: Events, Errors, Structs, Functions`);
    });

    it('should raise error when structs first than errors', () => {
        const code = interfaceWith('ITest', 'struct TestStruct { uint256 data; } error Error();');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 1);
        assert.ok(report.messages[0].message == `The order of members in the interface ITest interfaces should be: Events, Errors, Structs, Functions`);
    });

    it('should raise error when functions first than structs', () => {
        const code = interfaceWith('ITest', 'function testFunction(){} struct TestStruct { uint256 data; }');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 1);
        assert.ok(report.messages[0].message == `The order of members in the interface ITest interfaces should be: Events, Errors, Structs, Functions`);
    });

    it('should not raise error for interface member order events, errors, structs and functions', () => {
        const code = interfaceWith('ITest', 'event TestEvent(); error TestError(); struct TestStruct { uint256 data; } function testFunction(){}');
        const report = linter.processStr(code, config);

        assert.equal(report.errorCount, 0);
    });
});