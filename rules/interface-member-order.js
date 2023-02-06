const BaseChecker = require('../base-checker')

const ruleId = 'interface-member-order'
const meta = {
  type: 'Best Practices',
  docs: {
    description: 'Enforce the specified ordering of members in interfaces',
    category: 'Best Practices',
  },
  isDefault: true,
  recommended: true,
  defaultSetup: 'warn',
  schema: []
}

class InterfaceMemberOrderChecker extends BaseChecker {
  constructor(reporter) {
    super(reporter, ruleId, meta)
  }

  ContractDefinition(node) {
    if (node.kind !== 'interface') return;
    const interfaceMembers = node.subNodes;
    const events = [];
    const errors = [];
    const structs = [];
    const functions = [];
    
    interfaceMembers.forEach(member => {
      switch (member.type) {
        case 'EventDefinition':
          events.push(member);
          break;
        case 'CustomErrorDefinition':
          errors.push(member);
          break;
        case 'StructDefinition':
          structs.push(member);
          break;
        case 'FunctionDefinition':
          functions.push(member);
          break;
        default:
          break;
      }
    });
    
    const orderedMembers = [...events, ...errors, ...structs, ...functions];
    for (let i = 0; i < interfaceMembers.length; i++) {
      if (interfaceMembers[i] !== orderedMembers[i]) {
        this.error(
          node,
          `The order of members in the interface ${node.name} interfaces should be: Events, Errors, Structs, Functions`
        );
        break;
      }
    }
  }
}

module.exports = InterfaceMemberOrderChecker
