# Chromium Configuration

Chromium browser configuration with Wayland support and development features.

## Overview

This configuration enables Chromium to run properly on Wayland with GTK4, along with development tools and debugging capabilities.

## Configuration

### Flags (chromium-flags.conf)

The following flags are configured:

- `--gtk-version=4`: Use GTK4 for better Wayland integration
- `--enable-features=UseOzonePlatform`: Enable Ozone platform
- `--ozone-platform=wayland`: Use Wayland as the platform backend
- `--enable-devtools-mcp`: Enable MCP (Model Context Protocol) support in DevTools
- `--remote-debugging-port=9222`: Enable remote debugging on port 9222

## Installation

1. **Install Chromium**:
   ```bash
   sudo pacman -S chromium
   ```

2. **Copy configuration**:
   ```bash
   cp chromium-flags.conf ~/.config/chromium-flags.conf
   # Or for system-wide:
   sudo cp chromium-flags.conf /etc/chromium/flags.conf
   ```

## Usage

### Basic Launch
```bash
chromium                    # Launch with configured flags
chromium --incognito       # Incognito mode
chromium --app=https://example.com  # App mode
```

### Development
- **Remote Debugging**: Connect to `localhost:9222` for debugging
- **MCP Support**: Enabled for development tools integration

### Wayland Integration
Chromium will automatically use Wayland when available, providing better performance and native Wayland support.

## Troubleshooting

### Wayland Issues
If Chromium doesn't use Wayland:
1. Check if flags are loaded: `chromium --help | grep ozone`
2. Verify Wayland session: `echo $WAYLAND_DISPLAY`
3. Force Wayland: `chromium --ozone-platform=wayland`

### GTK Issues
If GTK4 causes problems:
1. Try GTK3: `--gtk-version=3`
2. Check GTK themes: Ensure Catppuccin theme is installed

### Performance
For better performance:
- Use hardware acceleration (enabled by default)
- Disable unnecessary extensions
- Use `--disable-gpu-vsync` for testing

## Extensions

Chromium can be extended with:
- **Catppuccin Theme**: Browser theme matching the system
- **uBlock Origin**: Ad blocking
- **Vimium**: Keyboard navigation
- **Dark Reader**: Automatic dark mode

## Security

- **Sandbox**: Enabled by default
- **Site isolation**: Enabled
- **Safe browsing**: Enabled

## Integration

### With Hyprland
Chromium integrates well with Hyprland:
- Native Wayland support
- Window rules can be applied
- Screenshot tools work properly

### With File Managers
Set as default browser in `mimeapps.list`:
```
x-scheme-handler/http=chromium.desktop
x-scheme-handler/https=chromium.desktop
```

## References

- [Chromium Flags](https://peter.sh/experiments/chromium-command-line-switches/)
- [Wayland in Chromium](https://docs.google.com/document/d/1J_lBJBTy3kln4qZG1OJMp8Hf0Av9WoNg7hE8yRcjkEw)
- [MCP Protocol](https://modelcontextprotocol.io/)

---

*Chromium configured for Wayland with development features enabled*