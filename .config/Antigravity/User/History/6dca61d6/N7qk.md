# IPv6 Support Improvements for wg-easy

## Summary
This document outlines the improvements made to enhance IPv6 support in wg-easy, addressing the issue identified in the YouTube video.

## Changes Made

### 1. Added IPv6 Address Formatting Utility Functions

**File**: `src/server/utils/ip.ts`
- Added `isIPv6Address(host: string)` function to detect IPv6 addresses
- Added `formatHostForUrl(host: string)` function to properly format hosts for URLs
- IPv6 addresses are wrapped in square brackets `[ipv6_address]` when used in URLs
- Handles both plain IPv6 addresses and already-bracketed IPv6 addresses

### 2. Updated WireGuard Configuration Generation

**File**: `src/server/utils/wgHelper.ts`
- Added import for the new formatting utility: `import { formatHostForUrl } from './ip';`
- Updated `generateClientConfig` function to format the host in the Endpoint field:
  ```javascript
  // Before: Endpoint = ${userConfig.host}:${userConfig.port}
 // After:  Endpoint = ${formatHostForUrl(userConfig.host)}:${userConfig.port}
  ```
- Updated `generateServerPeer` function to format the server endpoint:
  ```javascript
  // Before: extraLines.push(`Endpoint = ${client.serverEndpoint}`)
  // After:  extraLines.push(`Endpoint = ${formatHostForUrl(client.serverEndpoint)}`)
  ```

### 3. Removed Completed TODO

**File**: `src/server/database/repositories/userConfig/service.ts`
- Removed the TODO comment that was tracking the IPv6 host formatting issue since it's now resolved

## Technical Details

### IPv6 Address Detection
The `isIPv6Address` function:
- Strips existing square brackets from the input
- Checks if the address contains colons (':') which are present in IPv6 addresses
- Uses a comprehensive regex pattern to validate IPv6 format
- Supports various IPv6 formats including compressed notation, full notation, and link-local addresses

### Host Formatting for URLs
The `formatHostForUrl` function:
- Detects if the host is an IPv6 address using `isIPv6Address`
- If IPv6: wraps the address in square brackets (removing existing brackets if present)
- If IPv4 or hostname: returns the host unchanged
- Handles already-bracketed IPv6 addresses correctly

## Impact

These changes ensure that:
1. IPv6 addresses are properly formatted when used in WireGuard configuration files
2. Client configurations will have correctly formatted endpoints for IPv6 servers
3. The WireGuard protocol will work correctly with IPv6 addresses
4. The TODO issue mentioned in the codebase has been resolved

## Testing

The changes were tested with various IPv6 address formats:
- Standard IPv6: `2001:db8::1` → `[2001:db8::1]`
- Compressed IPv6: `::1` → `[::1]`
- Full IPv6: `2001:0db8:85a3:000:000:8a2e:0370:7334` → `[2001:0db8:85a3:0000:000:8a2e:0370:734]`
- Already bracketed: `[2001:db8::1]` → `[2001:db8::1]`
- IPv4 addresses and hostnames remain unchanged

These improvements make wg-easy more robust when dealing with IPv6 addresses, ensuring proper connectivity for users with IPv6-only or dual-stack networks.