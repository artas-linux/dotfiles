# Yazi Configuration

A comprehensive Yazi file manager configuration with Catppuccin Macchiato theme and multiple plugins.

## Overview

Yazi is a terminal file manager written in Rust. This configuration provides a feature-rich setup with theming, plugins, and custom keybindings optimized for productivity.

## Features

- **Catppuccin Macchiato Theme**: Consistent with the system theme
- **Plugin Support**: Full-border, git integration, search jumping, starship prompt
- **Custom Keybindings**: Vim-style navigation with additional shortcuts
- **Flavor Support**: Multiple theme flavors available
- **Lua Scripting**: Custom functionality via init.lua

## File Structure

```
~/.config/yazi/
├── yazi.toml          # Main configuration
├── keymap.toml        # Keybindings
├── init.lua           # Lua initialization script
├── package.toml       # Plugin definitions
├── theme.toml         # Symlink to active flavor
├── flavors/           # Available themes
│   ├── catppuccin-macchiato.yazi/
│   ├── dracula.yazi/
│   ├── solarized-dark.yazi/
│   └── solarized-light.yazi/
└── plugins/           # Installed plugins
    ├── full-border.yazi/
    ├── git.yazi/
    ├── searchjump.yazi/
    └── starship.yazi/
```

## Configuration Files

### yazi.toml
Main configuration file containing:
- Manager settings (ratio, sorting, etc.)
- Preview settings
- Plugin configurations
- UI preferences

### keymap.toml
Custom keybindings including:
- Vim-style navigation (h,j,k,l)
- Quick access shortcuts
- Plugin-specific bindings
- Custom commands

### init.lua
Lua script for advanced customization:
- Catppuccin Macchiato color palette
- Plugin setups and hooks
- Custom functions and UI modifications

### package.toml
Plugin dependency management:
- Lists all required plugins with versions
- Used by `ya pack` for installation

## Plugins

### full-border.yazi
Adds full borders to the file manager interface for better visual separation.

### git.yazi
Provides git status indicators and git-related functionality:
- File status (modified, staged, etc.)
- Git operations integration

### searchjump.yazi
Enhanced search and jumping capabilities:
- Smart search with fuzzy matching
- Quick navigation to files/directories

### starship.yazi
Integrates Starship prompt for enhanced shell prompts:
- Cross-shell compatible
- Rich customization options

## Keybindings

### Navigation
- `h/j/k/l`: Vim-style movement
- `gg`: Go to top
- `G`: Go to bottom
- `H/M/L`: High/Middle/Low of screen

### File Operations
- `Enter`: Open file/directory
- `o`: Open with...
- `y`: Yank (copy)
- `x`: Cut
- `p`: Paste
- `d`: Delete
- `r`: Rename

### View Controls
- `Tab`: Toggle preview pane
- `i`: Toggle hidden files
- `:`: Command mode
- `/`: Search mode

### Custom Shortcuts
- ` `: Toggle selection
- `z`: Change view mode
- `t`: Create new file/directory
- `s`: Sort options

## Theming

### Catppuccin Macchiato
- **Base**: #24273a
- **Surface**: #363a4f
- **Text**: #cad3f5
- **Accent**: #f4dbd6
- **Red**: #ed8796
- **Green**: #a6da95
- **Blue**: #8aadf4
- **Yellow**: #eed49f

### Available Flavors
- **catppuccin-macchiato**: Current active theme
- **dracula**: Dark theme alternative
- **solarized-dark**: Solarized dark
- **solarized-light**: Solarized light

## Installation

1. **Install Yazi**:
   ```bash
   sudo pacman -S yazi
   ```

2. **Copy configuration**:
   ```bash
   cp -r /path/to/dotfiles/yazi/* ~/.config/yazi/
   ```

3. **Install plugins**:
   ```bash
   ya pack -i
   ```

4. **Set flavor** (optional):
   ```bash
   ya pack -a catppuccin-macchiato.yazi
   ```

## Usage

### Basic Navigation
```bash
yazi                    # Launch Yazi
yazi /path/to/directory # Start in specific directory
```

### With Plugins
- Git status is automatically shown
- Full borders enhance the interface
- Search jumping provides quick navigation
- Starship integration for shell prompts

## Customization

### Adding Plugins
1. Add to `package.toml`:
   ```toml
   [[plugin.deps]]
   use = "author/plugin-name"
   rev = "commit-hash"
   ```

2. Install: `ya pack -i`

### Modifying Keybindings
Edit `keymap.toml` to add or change bindings:
```toml
[[manager]]
key = "custom-key"
exec = "command"
```

### Theme Customization
Modify `init.lua` color palette or create new flavor in `flavors/`.

## Troubleshooting

### Plugins not loading
1. Check `ya pack -l` for installed plugins
2. Verify `package.toml` syntax
3. Restart Yazi

### Theme not applying
1. Check active flavor: `ls -la ~/.config/yazi/theme.toml`
2. Verify flavor files exist
3. Reload configuration

### Performance issues
1. Disable heavy plugins temporarily
2. Check Lua script efficiency
3. Monitor system resources

## Dependencies

- `yazi`: File manager
- `ya`: Yazi package manager (included)
- `git`: For plugin management
- `lua`: For scripting (optional)

## Integration

### With Hyprland
Keybindings in Hyprland can launch Yazi:
```bash
bind = $mainMod, E, exec, $scripts/launch_app $file-manager
```

### With Shell
Add to shell aliases:
```fish
alias fm='yazi'
```

## Contributing

When modifying:
1. Test changes thoroughly
2. Update this README
3. Ensure compatibility with Catppuccin theme
4. Document new plugins or features

## References

- [Yazi GitHub](https://github.com/sxyazi/yazi)
- [Yazi Documentation](https://yazi-rs.github.io/docs/)
- [Plugin Repository](https://github.com/yazi-rs/plugins)
- [Theme Gallery](https://github.com/yazi-rs/flavors)

---

*Yazi configuration optimized for Hyprland + Catppuccin Macchiato setup*