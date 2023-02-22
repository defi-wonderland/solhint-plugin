import BaseChecker from 'solhint/lib/rules/base-checker';

const ruleId = 'interface-member-order';
const meta = {
  type: 'best-practices',
  docs: {
    description: 'Interfaces members should be ordered: events, errors, structs, functions.',
    category: 'Best Practices',
  },
  isDefault: true,
  recommended: true,
  defaultSetup: 'warn',
  schema: [],
};

export class InterfaceMemberOrderChecker extends BaseChecker implements Rule {
  constructor(reporter: any) {
    super(reporter, ruleId, meta);
  }

  ContractDefinition(node: any) {
    if (node.kind !== 'interface') return;
    const interfaceMembers = node.subNodes;
    const unOrderedMembers: any[] = [];
    const events: any[] = [];
    const errors: any[] = [];
    const structs: any[] = [];
    const enums: any[] = [];
    const functions: any[] = [];

    interfaceMembers.forEach((member: any) => {
      switch (member.type) {
        case 'EventDefinition':
          unOrderedMembers.push(member);
          events.push(member);
          break;
        case 'CustomErrorDefinition':
          unOrderedMembers.push(member);
          errors.push(member);
          break;
        case 'StructDefinition':
          unOrderedMembers.push(member);
          structs.push(member);
          break;
        case 'EnumDefinition':
          unOrderedMembers.push(member);
          enums.push(member);
        case 'FunctionDefinition':
          unOrderedMembers.push(member);
          functions.push(member);
          break;
        default:
          break;
      }
    });

    const orderedMembers = [...events, ...errors, ...structs, ...enums, ...functions];

    const misorderedMember = unOrderedMembers.find((unOrderedMember, index) => {
      return unOrderedMember !== orderedMembers[index];
    });
    if (misorderedMember) {
      this.error(node, `The order of members in the interface ${node.name} interfaces should be: Events, Errors, Structs, Enums, Functions`);
    }
  }
}
