const { Server } = require('@modelcontextprotocol/sdk');

async function createServer() {
    // Create a new MCP server
    const server = new Server({
        name: 'example-server',
        version: '1.0.0',
    });

    // Add a simple ping tool
    server.addTool({
        name: 'ping',
        description: 'A simple ping tool that returns pong',
        inputSchema: {
            type: 'object',
            properties: {},
        },
        handler: async () => {
            return { message: 'pong' };
        },
    });

    return server;
}

// Run the server if this file is executed directly
if (require.main === module) {
    createServer()
        .then(server => {
            console.log('Starting MCP server...');
            server.listen({ port: 3000 })
                .then(() => {
                    console.log('MCP server listening on port 3000');
                })
                .catch(err => {
                    console.error('Failed to start server:', err);
                    process.exit(1);
                });
        })
        .catch(err => {
            console.error('Failed to create server:', err);
            process.exit(1);
        });
}

module.exports = { createServer };