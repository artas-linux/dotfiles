#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

// Create an MCP server
const server = new McpServer({
    name: "test-server",
    version: "0.1.0"
});

// Add a simple test tool
server.tool(
    "hello_world",
    {
        name: z.string().optional().describe("Optional name to greet"),
    },
    async ({ name = "World" }) => {
        console.log(`Hello, ${name}! This is a test from the MCP test server.`);
        return {
            content: [
                {
                    type: "text",
                    text: `Hello, ${name}! This is a test from the MCP test server.`,
                },
            ],
        };
    }
);

// Add another test tool that performs a calculation
server.tool(
    "calculate_sum",
    {
        a: z.number().describe("First number"),
        b: z.number().describe("Second number"),
    },
    async ({ a, b }) => {
        const sum = a + b;
        console.log(`The sum of ${a} and ${b} is ${sum}.`);
        return {
            content: [
                {
                    type: "text",
                    text: `The sum of ${a} and ${b} is ${sum}.`,
                },
            ],
        };
    }
);

try {
    // Start receiving messages on stdin and sending messages on stdout
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('Test MCP server running on stdio');
} catch (error) {
    console.error('Error starting server:', error);
}