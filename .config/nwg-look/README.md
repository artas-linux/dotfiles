# NWG-Look Configuration

GTK theme configuration tool for Wayland compositors, providing a GUI for managing GTK themes, icons, cursors, and fonts.

## Overview

NWG-Look is a GTK settings editor adapted to work on Wayland, allowing users to configure GTK themes without relying on GNOME settings. It provides a simple interface for managing GTK appearance settings.

## Features

- **GTK Theme Management**: Set themes for GTK2, GTK3, and GTK4 applications
- **Icon Theme Selection**: Choose from available icon themes
- **Cursor Configuration**: Set cursor themes and sizes
- **Font Settings**: Configure system fonts
- **Export Capabilities**: Generate configuration files for various systems
- **Wayland Compatible**: Works with Wayland compositors like Hyprland

## Configuration

### Main Settings

```json
{
  "gtk-theme": "catppuccin-macchiato-lavender-standard+default",
  "icon-theme": "Catppuccin-SE",
  "cursor-theme": "catppuccin-macchiato-dark-cursors",
  "cursor-size": 24,
  "font": "Maple Mono NF 10"
}
```

### Export Options

```json
{
  "export-settings-ini": true,    // GTK settings.ini
  "export-gtkrc-20": true,        // GTK2 gtkrc
  "export-index-theme": true,     // Icon theme index
  "export-xsettingsd": true,      // XSettings daemon
  "export-gtk4-symlinks": true    // GTK4 theme symlinks
}
```

### Theme Preferences

```json
{
  "dark-theme": true,
  "prefer-dark-theme": true,
  "color-scheme": "prefer-dark",
  "apply-globally": true
}
```

## Usage

### GUI Interface
```bash
nwg-look
```

### Command Line
```bash
# List available themes
nwg-look --help

# Apply settings
nwg-look --apply
```

### Manual Configuration
Edit `~/.config/nwg-look/config` directly.

## Integration

### With Hyprland
NWG-Look works seamlessly with Hyprland and other Wayland compositors, providing GTK theming without GNOME dependencies.

### With Catppuccin
Configured for Catppuccin Macchiato Lavender theme with:
- Matching GTK theme
- Consistent icon theme
- Coordinated cursor theme
- Appropriate font selection

## File Structure

```
~/.config/nwg-look/
├── config              # Main configuration file
└── README.md          # This documentation
```

## Generated Files

NWG-Look can export to various locations:

- `~/.config/gtk-3.0/settings.ini` - GTK3 settings
- `~/.gtkrc-2.0` - GTK2 settings
- `~/.icons/default/index.theme` - Default icon theme
- `~/.config/xsettingsd/xsettingsd.conf` - XSettings daemon
- GTK4 theme symlinks in `~/.config/gtk-4.0/`

## Troubleshooting

### Themes Not Applying
1. Check if themes are installed
2. Restart applications
3. Run `nwg-look --apply`
4. Check GTK version compatibility

### Icons Not Showing
1. Verify icon theme installation
2. Update icon cache: `gtk-update-icon-cache`
3. Check icon theme index

### Font Issues
1. Verify font installation
2. Check fontconfig cache
3. Restart X server or display manager

## Dependencies

- GTK libraries
- Python and required modules
- Theme packages (Catppuccin, etc.)
- Icon themes (Catppuccin-SE)
- Cursor themes (catppuccin-cursors)

## Related Tools

- **qt5ct/qt6ct**: Qt theme configuration
- **lxappearance**: GTK2/3 theme selector
- **qt5-styleplugins**: Qt5 GTK theme integration
- **Kvantum**: Qt theme engine

## Tips

- Use `nwg-look` after installing new themes
- Restart applications to see theme changes
- Some applications may need logout/login
- GTK4 themes are separate from GTK3

## Updates

NWG-Look is actively maintained. Check for updates via your package manager.

---

*GTK theming made easy for Wayland environments*