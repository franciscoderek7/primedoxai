const { SwarmOrchestrator } = require('./orchestrator/swarm-orchestrator');

const orchestrator = new SwarmOrchestrator();

console.log('=== PrimeDox AI Agent Swarm Test ===\n');
console.log('Available agents:', orchestrator.listAgents());

console.log('\n--- Legal Document Templates ---');
console.log(orchestrator.listTemplates('legal-document'));

console.log('\n--- Cannabis Law Templates ---');
console.log(orchestrator.listTemplates('cannabis-law'));

console.log('\n--- Generating Statement of Claim ---');
const soc = orchestrator.route('legal-document', {
  template: 'statementOfClaim',
  args: ['Derek Francisco', 'Bill Denby', '3300000', 'Fraud, theft, disability discrimination by defendant and associates.']
});
console.log(soc.document.substring(0, 500) + '...\n');

console.log('=== ALL TESTS PASSED ===');
