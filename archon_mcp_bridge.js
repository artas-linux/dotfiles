#!/usr/bin/env node
/**
 * MCP Bridge for Archon - Converts stdio MCP to HTTP calls
 * This bridges OpenCode's stdio MCP expectation with Archon's HTTP interface
 */

const { spawn } = require('child_process');
const http = require('http');
const https = require('https');

// MCP protocol handling
let sessionId = null;
let nextRequestId = 1;

// HTTP client for Archon
function makeHttpRequest(method, params = {}) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      jsonrpc: "2.0",
      id: nextRequestId++,
      method: method,
      params: params,
      ...(sessionId && { sessionId })
    });

    const options = {
      hostname: 'localhost',
      port: 8051,
      path: '/mcp',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/event-stream',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.result && response.result.sessionId && !sessionId) {
            sessionId = response.result.sessionId;
          }
          resolve(response);
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(postData);
    req.end();
  });
}

// Handle MCP stdio protocol
process.stdin.on('data', async (data) => {
  try {
    const message = JSON.parse(data.toString().trim());

    if (message.method === 'initialize') {
      // Handle initialization
      const response = await makeHttpRequest('initialize', message.params);
      process.stdout.write(JSON.stringify({
        jsonrpc: "2.0",
        id: message.id,
        result: {
          protocolVersion: response.result.protocolVersion,
          capabilities: response.result.capabilities,
          serverInfo: response.result.serverInfo
        }
      }) + '\n');
    } else if (message.method === 'tools/list') {
      // Handle tool listing
      const response = await makeHttpRequest('tools/list');
      process.stdout.write(JSON.stringify({
        jsonrpc: "2.0",
        id: message.id,
        result: response.result
      }) + '\n');
    } else if (message.method === 'tools/call') {
      // Handle tool calls
      const response = await makeHttpRequest('tools/call', message.params);
      process.stdout.write(JSON.stringify({
        jsonrpc: "2.0",
        id: message.id,
        result: response.result
      }) + '\n');
    } else if (message.method === 'resources/list') {
      // Handle resource listing
      const response = await makeHttpRequest('resources/list');
      process.stdout.write(JSON.stringify({
        jsonrpc: "2.0",
        id: message.id,
        result: response.result
      }) + '\n');
    } else if (message.method === 'resources/read') {
      // Handle resource reading
      const response = await makeHttpRequest('resources/read', message.params);
      process.stdout.write(JSON.stringify({
        jsonrpc: "2.0",
        id: message.id,
        result: response.result
      }) + '\n');
    } else {
      // Unknown method
      process.stdout.write(JSON.stringify({
        jsonrpc: "2.0",
        id: message.id,
        error: {
          code: -32601,
          message: `Method not found: ${message.method}`
        }
      }) + '\n');
    }
  } catch (error) {
    process.stdout.write(JSON.stringify({
      jsonrpc: "2.0",
      id: message.id || null,
      error: {
        code: -32603,
        message: error.message
      }
    }) + '\n');
  }
});

process.on('SIGINT', () => {
  process.exit(0);
});

process.on('SIGTERM', () => {
  process.exit(0);
});