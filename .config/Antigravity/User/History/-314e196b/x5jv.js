const { spawn } = require('child_process');
const fs = require('fs');

// Function to start Chrome with remote debugging
function startChrome() {
    // Check if chrome is available
    const chromePath = '/usr/bin/chromium';
    if (!fs.existsSync(chromePath)) {
        console.error('Chrome/Chromium not found at:', chromePath);
        return null;
    }

    // Start Chrome with remote debugging enabled
    const chrome = spawn(chromePath, [
        '--remote-debugging-port=9222',
        '--no-first-run',
        '--no-default-browser-check',
        '--disable-extensions'
    ]);

    chrome.stdout.on('data', (data) => {
        console.log(`Chrome stdout: ${data}`);
    });

    chrome.stderr.on('data', (data) => {
        console.error(`Chrome stderr: ${data}`);
    });

    chrome.on('close', (code) => {
        console.log(`Chrome process exited with code ${code}`);
    });

    return chrome;
}

// Function to navigate to a URL
async function navigateToUrl(url) {
    // This would typically involve using Puppeteer or similar
    // For now, we'll just simulate the navigation
    console.log(`Navigating to: ${url}`);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Successfully navigated to: ${url}`);
            resolve();
        }, 2000);
    });
}

// Main execution
async function main() {
    console.log('Starting Chrome with remote debugging...');
    const chromeProcess = startChrome();

    if (chromeProcess) {
        console.log('Chrome started successfully');

        // Give Chrome a moment to initialize
        setTimeout(async () => {
            await navigateToUrl('https://codewiki.google/');
        }, 3000);
    } else {
        console.error('Failed to start Chrome');
    }
}

main().catch(console.error);