import BaseChecker from 'solhint/lib/rules/base-checker';
import naming from 'solhint/lib/common/identifier-naming';

/**
 * Wonderland defined its own naming convention for variables. Because the default one
 * does not consider our immutable naming convention, to use this rule, disable var-name-mixedcase
 */
const ruleId = 'wonder-var-name-mixedcase';
const meta = {
  type: 'naming',

  docs: {
    description: `Public variables name must be in mixedCase.`,
    category: 'Style Guide Rules',
  },

  isDefault: false,
  recommended: true,
  defaultSetup: 'warn',

  schema: null,
};

export class WonderVarNameMixedcaseChecker extends BaseChecker {
  constructor(reporter) {
    super(reporter, ruleId, meta);
  }

  VariableDeclaration(node) {
    if (!node.isDeclaredConst && !node.isImmutable) {
      this.validateVariablesName(node);
    }
  }

  validateVariablesName(node) {
    if (naming.isNotMixedCase(node.name)) {
      this.error(node, `Variable name ${node.name} must be in mixedCase`);
    }
  }
}
