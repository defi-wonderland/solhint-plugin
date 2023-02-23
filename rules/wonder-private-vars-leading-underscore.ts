import BaseChecker from 'solhint/lib/rules/base-checker';
import naming from 'solhint/lib/common/identifier-naming';

const ruleId = 'wonder-private-vars-leading-underscore';
const meta = {
  type: 'naming',

  docs: {
    description: 'Private and internal names must start with a single underscore.',
    category: 'Style Guide Rules',
  },

  isDefault: true,
  recommended: true,
  defaultSetup: ['warn'],
};

export class WonderPrivateVarsLeadingUnderscoreChecker extends BaseChecker {
  constructor(reporter: any) {
    super(reporter, ruleId, meta);
  }

  FunctionDefinition(node: any) {
    if (!node.name) {
      return;
    }

    const isPrivate = node.visibility === 'private';
    const isInternal = node.visibility === 'internal';
    const shouldHaveLeadingUnderscore = isPrivate || isInternal;
    this.validateName(node, shouldHaveLeadingUnderscore);
  }

  VariableDeclaration(node: any) {
    const isPrivate = node.visibility === 'private';
    const isInternal = node.visibility === 'internal';
    const shouldHaveLeadingUnderscore = isPrivate || isInternal;
    this.validateName(node, shouldHaveLeadingUnderscore);
  }

  validateName(node: any, shouldHaveLeadingUnderscore: any) {
    if (!node.name) {
      return;
    }

    if (naming.hasLeadingUnderscore(node.name) !== shouldHaveLeadingUnderscore) {
      this._error(node, node.name, shouldHaveLeadingUnderscore);
    }
  }

  _error(node: any, name: any, shouldHaveLeadingUnderscore: any) {
    this.error(node, `'${name}' ${shouldHaveLeadingUnderscore ? 'should' : 'should not'} start with "_"`);
  }
}
