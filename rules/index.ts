import * as ContractDataOrderChecker from './contract-data-order';
import * as EnumNameCamelCaseChecker from './enum-name-camelcase';
import * as ImmutableNameSnakeCaseChecker from './immutable-name-snakecase';
import * as ImportStatementFormatChecker from './import-statement-format';
import * as InterfaceMemberOrderChecker from './interface-member-order';
import * as InterfaceStartsWithIChecker from './interface-starts-with-i';
import * as NamedReturnValuesChecker from './named-return-values';
import * as NonStateVarsLeadingUnderscoreChecker from './non-state-vars-leading-underscore';
import * as StructNameCamelCaseChecker from './struct-name-camelcase';

const rules = [
  ContractDataOrderChecker,
  EnumNameCamelCaseChecker,
  ImmutableNameSnakeCaseChecker,
  ImportStatementFormatChecker,
  InterfaceMemberOrderChecker,
  InterfaceStartsWithIChecker,
  NamedReturnValuesChecker,
  NonStateVarsLeadingUnderscoreChecker,
  StructNameCamelCaseChecker,
];

export default rules;
