// For MCP servers, we need to load the module differently
// Using dynamic require to bypass potential path resolution issues
const path = require('path');
const fs = require('fs');

// Check if the file exists first
const mcpModulePath = path.join(__dirname, 'node_modules', '@modelcontextprotocol', 'sdk', 'dist', 'cjs', 'server', 'mcp.js');
if (!fs.existsSync(mcpModulePath)) {
    console.error(`MCP module not found at: ${mcpModulePath}`);
    process.exit(1);
}

const { McpServer } = require(mcpModulePath);

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