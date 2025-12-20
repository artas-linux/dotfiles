// For MCP servers, we need to load the module differently
// Using dynamic require to bypass potential path resolution issues
const path = require('path');
const fs = require('fs');

// Check if the McpServer file exists first
const mcpModulePath = path.join(__dirname, 'node_modules', '@modelcontextprotocol', 'sdk', 'dist', 'cjs', 'server', 'mcp.js');
if (!fs.existsSync(mcpModulePath)) {
    console.error(`MCP module not found at: ${mcpModulePath}`);
    process.exit(1);
}

// Check if the stdio file exists first
const stdioModulePath = path.join(__dirname, 'node_modules', '@modelcontextprotocol', 'sdk', 'dist', 'cjs', 'server', 'stdio.js');
if (!fs.existsSync(stdioModulePath)) {
    console.error(`Stdio module not found at: ${stdioModulePath}`);
    process.exit(1);
}

const { McpServer } = require(mcpModulePath);
const { StdioServerTransport } = require(stdioModulePath);

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

    // Register a deepwiki tool for searching and retrieving information from a wiki database
    server.registerTool(
        'deepwiki',
        {
            description: 'Search and retrieve information from a wiki database',
            inputSchema: {
                type: 'object',
                properties: {
                    query: {
                        type: 'string',
                        description: 'The search query for the wiki database'
                    },
                    maxResults: {
                        type: 'number',
                        description: 'Maximum number of results to return (default: 5)'
                    }
                },
                required: ['query']
            },
        },
        async ({ query, maxResults = 5 }) => {
            // This is a placeholder implementation
            // In a real implementation, you would connect to a wiki database/API
            // and return actual search results
            console.log(`Searching wiki for: ${query}, max results: ${maxResults}`);

            // Placeholder response
            return {
                content: [{
                    type: 'text',
                    text: `Search results for "${query}" (max ${maxResults} results):\n\n` +
                        `- Result 1: Sample wiki entry for ${query}\n` +
                        `- Result 2: Another sample entry\n` +
                        `- Result 3: More sample content`
                }]
            };
        }
    );

    // Register archon-mcp tool for accessing Archon MCP services
    server.registerTool(
        'archon-mcp',
        {
            description: 'Access Archon MCP services including RAG, project management, tasks, documents, and more',
            inputSchema: {
                type: 'object',
                properties: {
                    action: {
                        type: 'string',
                        description: 'The action to perform (e.g., "rag-search", "project-list", "task-create")',
                        enum: ['rag-search', 'project-list', 'project-get', 'task-list', 'task-create', 'document-list', 'version-info']
                    },
                    query: {
                        type: 'string',
                        description: 'Search query for RAG or filter criteria'
                    },
                    projectId: {
                        type: 'string',
                        description: 'Project ID for project-related actions'
                    },
                    title: {
                        type: 'string',
                        description: 'Title for task creation'
                    },
                    description: {
                        type: 'string',
                        description: 'Description for task creation'
                    },
                    limit: {
                        type: 'number',
                        description: 'Maximum number of results to return (default: 10)'
                    }
                },
                required: ['action']
            },
        },
        async ({ action, query, projectId, title, description, limit = 10 }) => {
            try {
                const archonUrl = 'http://localhost:8051/mcp';

                // For now, return a placeholder response since the archon-mcp uses SSE
                // In a full implementation, you'd need to establish an SSE connection
                // and handle the MCP protocol properly
                let response = `Archon MCP ${action} requested`;

                if (action === 'rag-search' && query) {
                    response += ` with query: "${query}"`;
                } else if (action === 'project-list') {
                    response += ` - listing projects`;
                } else if (action === 'task-create' && title) {
                    response += ` - creating task "${title}"`;
                }

                response += `\n\nNote: This is a placeholder implementation. Full integration requires SSE connection handling.`;

                return {
                    content: [{
                        type: 'text',
                        text: response
                    }]
                };
            } catch (error) {
                console.error('Archon MCP error:', error);
                return {
                    content: [{
                        type: 'text',
                        text: `Error accessing Archon MCP: ${error.message}`
                    }]
                };
            }
        }
    );

    return server;
}

// Run the server if this file is executed directly
if (require.main === module) {
    createServer()
        .then(async server => {
            console.log('Starting MCP server...');
            try {
                // Create a stdio transport instance (standard for MCP servers)
                const transport = new StdioServerTransport();
                // Connect the server via stdio transport
                await server.connect(transport);
                console.log('MCP server connected via stdio successfully');
                console.log('Server is now ready to accept MCP client connections');
            } catch (err) {
                console.error('Failed to connect server:', err);
                process.exit(1);
            }
        })
        .catch(err => {
            console.error('Failed to create server:', err);
            process.exit(1);
        });
}

module.exports = { createServer };