# Ripgrep Configuration

A comprehensive ripgrep (rg) configuration optimized for development workflows with smart file type handling and performance optimizations.

## Overview

Ripgrep is a fast text search tool that recursively searches directories for regex patterns. This configuration provides optimized settings for development, including custom file types, ignore patterns, and performance enhancements.

## Features

- **Smart Case Sensitivity**: Automatic case-insensitive for lowercase, case-sensitive for mixed case
- **Line Numbers & Columns**: Precise location reporting
- **Performance Optimized**: Memory mapping and line buffering
- **Custom File Types**: Web, config, docs, and log file type definitions
- **Comprehensive Ignores**: Additional patterns beyond .gitignore
- **Context Display**: 2 lines of context around matches
- **Color Output**: Auto-detected terminal coloring
- **Hidden Files**: Searches hidden directories and files
- **Symlink Following**: Follows symbolic links

## Configuration File

Ripgrep reads configuration from:
- `~/.config/ripgrep/config`
- `~/.ripgreprc`

The configuration uses command-line argument format, one per line.

## Search Options

### Core Settings
```bash
--smart-case        # Case-insensitive for lowercase, sensitive for mixed
--line-number       # Show line numbers
--column            # Show column numbers
--with-filename     # Show filenames
```

### Performance
```bash
--mmap              # Use memory mapping for speed
--line-buffered     # Line-buffered output for piping
--binary            # Search binary files (safely)
```

### Output Control
```bash
--heading           # Group matches by file with headers
--no-messages       # Suppress error messages
--color=auto        # Auto-detect color support
```

## Custom File Types

### Web Files
```bash
--type-add web:*.{html,css,js,ts,jsx,tsx,vue,svelte}
```
Search only web-related files.

### Configuration Files
```bash
--type-add config:*.{json,yaml,yml,toml,ini,conf}
```
Search configuration files.

### Documentation
```bash
--type-add docs:*.{md,mdx,txt,rst,adoc}
```
Search documentation files.

### Log Files
```bash
--type-add logs:*.{log,out}
```
Search log files.

## Usage Examples

### Basic Search
```bash
# Search for "function" in current directory
rg function

# Search in specific file types
rg --type web "console.log"
rg --type config "database"

# Search with context
rg -C 3 "error"
```

### Advanced Patterns
```bash
# Case-sensitive search
rg -s "ClassName"

# Whole word matches
rg -w "function"

# Inverse matches (lines that don't match)
rg -v "console.log"

# Multiple patterns
rg -e "pattern1" -e "pattern2"
```

### File Type Filtering
```bash
# Only JavaScript files
rg --type js "import"

# Exclude certain types
rg --type-not test "describe"

# Custom file patterns
rg --glob "*.custom" "pattern"
```

### Performance Tips
```bash
# Parallel searching (default)
rg --threads 0 "pattern"

# Limit search depth
rg --max-depth 3 "pattern"

# Search specific files
rg --include "*.js" --include "*.ts" "pattern"
```

## Integration

### With Neovim
Ripgrep integrates seamlessly with Neovim plugins like:
- Telescope
- FZF
- Ripgrep itself via `:grep`

### With Other Tools
- **fzf**: Fuzzy finding with ripgrep
- **bat**: Syntax highlighting for results
- **delta**: Enhanced diff viewing

### Shell Integration
```bash
# Alias for common searches
alias rgf='rg --files | rg'  # Find files containing pattern
alias rgd='rg --type docs'   # Search documentation
alias rgc='rg --type config' # Search config files
```

## Performance Characteristics

### Speed Advantages
- **Memory Mapping**: Direct file access without loading into RAM
- **Parallel Processing**: Multi-threaded searching
- **Regex Engine**: Rust-based, highly optimized
- **Smart Filtering**: Fast .gitignore processing

### Benchmarks
Typically 3-10x faster than GNU grep, depending on file types and patterns.

## Troubleshooting

### Common Issues

#### No Results Found
```bash
# Check if files are ignored
rg --no-ignore "pattern"

# Search hidden files explicitly
rg --hidden "pattern"

# Debug ignored files
rg --debug "pattern"
```

#### Permission Errors
```bash
# Skip permission errors
rg --no-messages "pattern"

# Run with elevated permissions if needed
sudo rg "pattern"
```

#### Encoding Issues
```bash
# Handle different encodings
rg --encoding utf-8 "pattern"
```

#### Performance Issues
```bash
# Reduce thread count
rg --threads 4 "pattern"

# Limit file size
rg --max-filesize 10M "pattern"
```

## Advanced Configuration

### Custom Ignore Files
```bash
# Additional ignore files
--ignore-file .custom-ignore
```

### Custom Type Definitions
```bash
# Add more file types
--type-add rust:*.{rs,toml}
--type-add python:*.{py,pyx}
```

### Environment Variables
```bash
# Set default options
export RIPGREP_CONFIG_PATH=~/.config/ripgrep/config
```

## File Structure

```
~/.config/ripgrep/
├── config              # Main configuration file
└── README.md          # This documentation
```

## Related Tools

- **The Silver Searcher (ag)**: Alternative grep tool
- **ugrep**: Unicode-aware grep
- **git grep**: Git repository searching
- **fd**: File finder (pairs well with rg)

## Best Practices

1. **Use Specific File Types**: `--type js` instead of searching everything
2. **Combine with fd**: Use fd to find files, rg to search within them
3. **Regex Patterns**: Use ripgrep's regex syntax for complex patterns
4. **Context Lines**: Use `-C` for debugging, `-A/-B` for specific context
5. **Binary Files**: Use `--binary` cautiously, can slow searches

## Updates

Ripgrep is actively maintained. Check for updates:

```bash
# Via package manager
pacman -Qu ripgrep

# Latest features
cargo install ripgrep  # If using rust
```

---

*Fast, powerful text searching for your development workflow*