const BaseChecker = require('../base-checker')
const naming = require('../../common/identifier-naming')

const ruleId = 'immutable-name-snakecase'
const meta = {
  type: 'naming',
  docs: {
    description: 'Immutable name must be in capitalized SNAKE_CASE.',
    category: 'Style Guide Rules',
  },
  isDefault: true,
  recommended: true,
  defaultSetup: 'warn',
  schema: null,
}

class ImmutableNameSnakecaseChecker extends BaseChecker {
  constructor(reporter) {
    super(reporter, ruleId, meta)
  }

  VariableDeclaration(node) {
    if (node.isImmutable) {
      this.validateImmutableName(node)
    }
  }

  validateImmutableName(variable) {
    if (naming.isNotUpperSnakeCase(variable.name)) {
      this.error(variable, `Immutable '${variable.name}' must be in capitalized SNAKE_CASE`)
    }
  }
}

module.exports = ImmutableNameSnakecaseChecker