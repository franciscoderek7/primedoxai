// PrimeDox AI — Agent Swarm Orchestrator
// Routes requests to the correct AI specialist agent

const { legalTemplates } = require('../agents/legal-document-agent');
const { cannabisTemplates } = require('../agents/cannabis-law-agent');

class SwarmOrchestrator {
  constructor() {
    this.agents = {
      'legal-document': legalTemplates,
      'cannabis-law': cannabisTemplates,
      // Add more agents here: tax, real-estate, corporate, etc.
    };
  }

  route(requestType, params) {
    const agent = this.agents[requestType];
    if (!agent) {
      return { error: 'Agent not found. Available: legal-document, cannabis-law' };
    }
    
    // Route to specific template based on sub-type
    const template = agent[params.template];
    if (!template) {
      return { error: `Template ${params.template} not found in ${requestType} agent` };
    }
    
    return {
      agent: requestType,
      template: params.template,
      document: template(...params.args),
      timestamp: new Date().toISOString(),
      disclaimer: 'Derek Francisco is a legal educator, NOT a lawyer. No legal advice. No representation.'
    };
  }

  listAgents() {
    return Object.keys(this.agents);
  }

  listTemplates(agentType) {
    const agent = this.agents[agentType];
    return agent ? Object.keys(agent) : [];
  }
}

module.exports = { SwarmOrchestrator };
