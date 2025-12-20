import { formatHostForUrl } from './server/utils/ip';

// Test cases for IPv6 address detection and formatting
const testCases = [
  // Valid IPv6 addresses
  { input: '2001:db8::1', expected: '[2001:db8::1]' },
  { input: 'fe80::1', expected: '[fe80::1]' },
  { input: '2001:0db8:85a3:000:0000:8a2e:0370:7334', expected: '[2001:0db8:85a3:000:0000:8a2e:0370:7334]' },
  { input: '::1', expected: '[::1]' },
  { input: '2001:db8:3333:444:5555:666:777:88', expected: '[2001:db8:333:444:555:6666:7777:8888]' },

  // IPv6 addresses that are already bracketed
  { input: '[2001:db8::1]', expected: '[2001:db8::1]' },
  { input: '[::1]', expected: '[::1]' },

  // IPv4 addresses and hostnames (should not be bracketed)
  { input: '192.168.1.1', expected: '192.168.1.1' },
  { input: 'example.com', expected: 'example.com' },
  { input: 'localhost', expected: 'localhost' },
  { input: 'wg.example.com', expected: 'wg.example.com' },
];

console.log('Testing IPv6 formatting function...\n');

let passedTests = 0;
let totalTests = testCases.length;

for (const testCase of testCases) {
  const result = formatHostForUrl(testCase.input);
  const passed = result === testCase.expected;

  console.log(`Input: "${testCase.input}"`);
  console.log(`Expected: "${testCase.expected}"`);
  console.log(`Got: "${result}"`);
  console.log(`Status: ${passed ? '✅ PASS' : '❌ FAIL'}`);
  console.log('---');

  if (passed) {
    passedTests++;
  }
}

console.log(`\nTest Results: ${passedTests}/${totalTests} tests passed`);

if (passedTests === totalTests) {
  console.log('🎉 All tests passed!');
} else {
  console.log('❌ Some tests failed!');
  process.exit(1);
}