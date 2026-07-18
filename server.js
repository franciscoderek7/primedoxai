const http = require('http');
const { SwarmOrchestrator } = require('./orchestrator/swarm-orchestrator');

const orchestrator = new SwarmOrchestrator();
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/agents') {
    res.writeHead(200);
    res.end(JSON.stringify({ agents: orchestrator.listAgents() }));
    return;
  }

  if (req.url.startsWith('/templates/')) {
    const agentType = req.url.split('/')[2];
    res.writeHead(200);
    res.end(JSON.stringify({ agent: agentType, templates: orchestrator.listTemplates(agentType) }));
    return;
  }

  if (req.url === '/generate' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { requestType, template, args } = JSON.parse(body);
        const result = orchestrator.route(requestType, { template, args });
        res.writeHead(200);
        res.end(JSON.stringify(result, null, 2));
      } catch (e) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Not found. Endpoints: /agents, /templates/:agent, /generate' }));
});

server.listen(PORT, () => {
  console.log(`PrimeDox AI Swarm running on port ${PORT}`);
  console.log(`Available agents: ${orchestrator.listAgents().join(', ')}`);
});

module.exports = { server };
