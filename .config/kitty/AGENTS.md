# AGENTS.md - Kitty Configuration Repository

## Build/Lint/Test Commands
- **Lint Python**: `python -m flake8 *.py` (if flake8 installed)
- **Format Python**: `python -m black *.py` (if black installed)
- **Shell check**: `shellcheck *.sh` (if shellcheck installed)
- **Run single test**: No formal test suite - manually test Kitty extensions
- **Test Kitty config**: `kitty --config kitty.conf --version` (verify config loads)

## Code Style Guidelines

### Python Scripts
- **Imports**: Standard library first, then third-party, then local
- **Naming**: snake_case for functions/variables, PascalCase for classes
- **Types**: Use type hints when possible
- **Error handling**: Use try/except blocks, log errors appropriately
- **Formatting**: 4 spaces indentation, max 88 chars per line
- **Shared utilities**: Use `kitty_utils.py` for common functions to avoid duplication

### Shell Scripts
- **Shebang**: Include `#!/bin/sh` or `#!/bin/bash`
- **Error handling**: Use `set -e` for strict error checking
- **Variables**: Use `${VAR}` syntax for variable expansion
- **Comments**: Brief comments for complex logic

### Configuration Files
- **Organization**: Group related settings together
- **Comments**: Document non-obvious configurations
- **Consistency**: Follow existing naming patterns
- **Main config**: `kitty.conf` includes themes and key mappings
- **Theme files**: Separate theme files (e.g., `current-theme.conf`) for easy switching
- **Fonts**: Use system-installed fonts (currently Maple Mono NF)
- **Extensions**: Use `kitten script_name` syntax for custom actions

### Kitten Structure
- **Directory**: `kittens/` subdirectory in config directory
- **Structure**: `kittens/name/__init__.py` and `kittens/name/main.py`
- **Permissions**: Scripts must be executable (`chmod +x`)
- **Imports**: Use relative imports for shared utilities
- **Package**: `kittens/__init__.py` and `kittens/kitty_utils.py` for shared code

### General
- **Documentation**: Update this file when adding new tools/scripts
- **Testing**: Manually verify configurations work with Kitty
- **Version control**: Commit configuration changes with descriptive messages