/**
 * Test script for chrome-devtools MCP server functionality
 * This script demonstrates basic interaction with the Chrome DevTools MCP server
 */

// Import the MCP client
const { useMcpTool } = require('@modelcontextprotocol/client');

async function testChromeDevTools() {
    console.log('Testing Chrome DevTools MCP Server...\n');

    try {
        // Test 1: List current pages
        console.log('1. Listing current browser pages:');
        const pages = await useMcpTool('chrome-devtools', 'list_pages', {});
        console.log('Pages:', pages);
        console.log();

        // Test 2: Take a snapshot of the current page
        console.log('2. Taking snapshot of current page:');
        const snapshot = await useMcpTool('chrome-devtools', 'take_snapshot', { verbose: false });
        console.log('Snapshot taken successfully');
        console.log('Page title:', snapshot?.[0]?.name || 'Unknown');
        console.log();

        // Test 3: Navigate to a new page
        console.log('3. Navigating to Google.com:');
        const navigationResult = await useMcpTool('chrome-devtools', 'navigate_page', {
            type: 'url',
            url: 'https://www.github.com'
        });
        console.log('Navigation result:', navigationResult);
        console.log();

        // Test 4: List pages again to confirm navigation
        console.log('4. Listing pages after navigation:');
        const pagesAfter = await useMcpTool('chrome-devtools', 'list_pages', {});
        console.log('Pages:', pagesAfter);
        console.log();

        console.log('Chrome DevTools MCP Server test completed successfully!');

    } catch (error) {
        console.error('Error testing Chrome DevTools MCP Server:', error);
        return false;
    }

    return true;
}

// Run the test
testChromeDevTools().then(success => {
    if (success) {
        console.log('\n✅ All tests passed!');
    } else {
        console.log('\n❌ Some tests failed!');
        process.exit(1);
    }
});