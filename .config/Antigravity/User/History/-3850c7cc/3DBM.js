// Import the McpServer from the mcp module
const { McpServer } = require('@modelcontextprotocol/sdk/dist/cjs/server/mcp');

async function createServer() {
    // Create a new MCP server
    const server = new McpServer({
        name: 'example-server',
        version: '1.0.0',
    });

    // Register a simple ping tool
    server.registerTool(
        'ping',
        {
            description: 'A simple ping tool that returns pong',
            inputSchema: {
                type: 'object',
                properties: {},
            },
        },
        async () => {
            return { content: [{ type: 'text', text: 'pong' }] };
        }
    );

    return server;
}

// Run the server if this file is executed directly
if (require.main === module) {
    createServer()
        .then(server => {
            console.log('Starting MCP server...');
            // Note: For MCP servers, we need to connect via a transport
            // For now, we'll just show the server was created successfully
            console.log('MCP server created successfully');
            console.log('Server info:', server.server._serverInfo);
        })
        .catch(err => {
            console.error('Failed to create server:', err);
            process.exit(1);
        });
}

module.exports = { createServer };