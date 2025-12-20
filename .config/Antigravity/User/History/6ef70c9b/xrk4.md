# Docker Auto-Restart Configuration

## Goal Description
Configure the Archon Docker services to automatically restart if they stop unexpectedly or if the system reboots. This addresses the user's concern about having to manually run the start command every time.

## Proposed Changes
### Configuration
#### [MODIFY] [docker-compose.yml](file:///home/archbtw/dev/archon/docker-compose.yml)
- Add `restart: unless-stopped` to the following services:
    - `archon-server`
    - `archon-mcp`
    - `archon-agents`
    - `archon-frontend`

## Verification Plan
### Automated Tests
- Run `docker compose up -d` to apply changes.
- Verify services are running with `docker compose ps`.
- (Optional) Simulate a stop and check if it restarts, but `unless-stopped` respects manual stops, so we mainly ensure the configuration is valid.
