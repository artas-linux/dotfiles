# Kitty Configuration

A comprehensive Kitty terminal emulator configuration with Catppuccin Macchiato theme and custom kittens.

## Overview

Kitty is a fast, feature-rich terminal emulator focused on performance and extensibility. This configuration provides a customized setup with theming, plugins, and optimized settings.

## Features

- **Catppuccin Macchiato Theme**: Consistent with the system theme
- **Custom Kittens**: Enhanced functionality plugins
- **Optimized Fonts**: Maple Mono NF with custom sizing
- **Tab Management**: Powerline-style tabs
- **Performance**: Hardware acceleration enabled

## File Structure

```
~/.config/kitty/
├── kitty.conf              # Main configuration
├── themes/
│   ├── catppuccin-macchiato.conf
│   └── other-themes.conf
├── kittens/                # Python plugins
│   ├── neighboring_window/
│   ├── pass_keys/
│   ├── relative_resize/
│   └── scroll_mark/
├── current-theme.conf      # Active theme symlink
├── open-actions.conf       # File opening rules
└── README.md              # This file
```

## Configuration Files

### kitty.conf
Main configuration including:
- Font settings (Maple Mono NF)
- Theme includes
- Window layout and padding
- Tab bar styling
- Performance options

### Themes
- **catppuccin-macchiato.conf**: Current active theme
- Multiple theme options available
- Easy theme switching via symlinks

### Kittens
Python plugins that extend Kitty functionality:

#### neighboring_window
Window management and navigation between adjacent windows.

#### pass_keys
Pass specific key combinations to child applications.

#### relative_resize
Resize windows relative to current size.

#### scroll_mark
Enhanced scrolling with marks and navigation.

## Keybindings

### Default Kitty Keys
- `Ctrl+Shift+Enter`: New window
- `Ctrl+Shift+T`: New tab
- `Ctrl+Shift+W`: Close tab
- `Ctrl+Shift+]`: Next tab
- `Ctrl+Shift+[` : Previous tab

### Custom Kittens
Depends on individual kitten configurations in kitty.conf.

## Theming

### Catppuccin Macchiato
- **Foreground**: #CAD3F5
- **Background**: #24273A
- **Selection**: #F4DBD6
- **Cursor**: #F4DBD6
- **ANSI Colors**: Full palette matching Catppuccin

### Font Configuration
- **Family**: Maple Mono NF
- **Size**: 11.5pt
- **Cell Height**: 122%
- **Features**: Various OpenType features enabled

## Installation

1. **Install Kitty**:
   ```bash
   sudo pacman -S kitty
   ```

2. **Copy configuration**:
   ```bash
   cp -r /path/to/dotfiles/kitty/* ~/.config/kitty/
   ```

3. **Set as default terminal** (optional):
   ```bash
   # Update desktop files or set TERMINAL variable
   export TERMINAL=kitty
   ```

## Usage

### Basic Launch
```bash
kitty                    # Launch Kitty
kitty --help            # Show help
kitty --config ~/.config/kitty/kitty.conf  # Custom config
```

### With Commands
```bash
kitty nvim file.txt     # Open file in nvim
kitty --hold ls -la     # Run command and keep window open
```

### Tabs and Windows
- `Ctrl+Shift+T`: New tab
- `Ctrl+Shift+Enter`: New window
- `Ctrl+Shift+]` / `[`: Switch tabs

## Customization

### Font Settings
Edit font section in kitty.conf:
```conf
font_family Maple Mono NF
font_size 11.5
modify_font cell_height 122%
```

### Theme Switching
1. Change include in kitty.conf
2. Or use symlinks:
   ```bash
   ln -sf themes/other-theme.conf current-theme.conf
   ```

### Adding Kittens
1. Create kitten directory in kittens/
2. Add Python script
3. Configure keybindings in kitty.conf

## Performance

### Hardware Acceleration
- OpenGL rendering enabled
- GPU acceleration for smooth scrolling
- Optimized for high-DPI displays

### Resource Usage
- Lightweight compared to other terminals
- Efficient memory management
- Fast startup times

## Integration

### With Hyprland
Kitty can be set as default terminal in Hyprland scripts:
```bash
bind = $mainMod, RETURN, exec, kitty
```

### With Shell
Set as default shell terminal:
```fish
set -x TERMINAL kitty
```

## Troubleshooting

### Font Issues
1. Check if Maple Mono NF is installed
2. Verify font path in kitty.conf
3. Test with system fonts

### Theme Not Loading
1. Verify theme file path
2. Check syntax in theme file
3. Restart Kitty

### Kitten Errors
1. Check Python syntax in kitten files
2. Verify kitten directory structure
3. Check kitty.conf for kitten mappings

### Performance Issues
1. Disable GPU acceleration temporarily
2. Check for conflicting settings
3. Monitor system resources

## Dependencies

- `kitty`: Terminal emulator
- `python`: For kittens (usually included)
- Maple Mono NF font family
- OpenGL drivers for acceleration

## Contributing

When modifying:
1. Test changes on target system
2. Update this README for new features
3. Ensure theme compatibility
4. Document custom kittens

## References

- [Kitty Documentation](https://sw.kovidgoyal.net/kitty/)
- [Kitty Kittens](https://sw.kovidgoyal.net/kitty/kittens/)
- [Catppuccin Kitty](https://github.com/catppuccin/kitty)

---

*Kitty configuration optimized for Hyprland + Catppuccin Macchiato setup*