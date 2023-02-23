import assert from 'assert';
import { processStr } from '../utils/parsers';
import { interfaceWith } from '../utils/interface-builder';

const config = {
  rules: { 'interface-member-order': 'error' },
};

const interfaceName = 'ITest';
const errorMessage = `The order of members in the interface ${interfaceName} interfaces should be: Events, Errors, Enums, Structs, Functions`;

describe('Linter - interface-member-order', () => {
  it('should raise error when errors first than events', () => {
    const code = interfaceWith(interfaceName, 'error TestError(); event TestEvent();');
    const report = processStr(code, config);

    assert.equal(report.errorCount, 1);
    assert.ok(report.messages[0].message == errorMessage);
  });

  it('should raise error when structs first than errors', () => {
    const code = interfaceWith(interfaceName, 'struct TestStruct { uint256 data; } error Error();');
    const report = processStr(code, config);

    assert.equal(report.errorCount, 1);
    assert.ok(report.messages[0].message == errorMessage);
  });

  it('should raise error when structs first than enums', () => {
    const code = interfaceWith(interfaceName, 'struct TestStruct { uint256 data; } enum TestEnum { A, B }');
    const report = processStr(code, config);
    assert.equal(report.errorCount, 1);
    assert.ok(report.messages[0].message == errorMessage);
  });

  it('should raise error when functions first than structs', () => {
    const code = interfaceWith(interfaceName, 'function testFunction(){} struct TestStruct { uint256 data; }');
    const report = processStr(code, config);

    assert.equal(report.errorCount, 1);
    assert.ok(report.messages[0].message == errorMessage);
  });

  it('should raise an error when function first than enums', () => {
    const code = interfaceWith(interfaceName, 'function testFunction(){} enum TestEnum { A, B }');
    const report = processStr(code, config);
    assert.equal(report.errorCount, 1);
    assert.ok(report.messages[0].message == errorMessage);
  });

  it('should not raise error for interface member order events, errors, enums, structs, and functions', () => {
    const code = interfaceWith(
      interfaceName,
      'event TestEvent(); error TestError(); enum TestEnum { A, B } struct TestStruct { uint256 data; } function testFunction(){}'
    );
    const report = processStr(code, config);

    assert.equal(report.errorCount, 0);
  });
});
