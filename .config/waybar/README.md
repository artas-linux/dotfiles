# Waybar Configuration

A comprehensive Waybar configuration with Catppuccin Macchiato theming for Hyprland.

## Overview

This Waybar setup provides a sleek status bar with essential system information, workspace management, and media controls. The configuration uses modular JSONC files for easy customization.

## Features

- **Catppuccin Macchiato Theme**: Consistent theming with the system
- **Hyprland Integration**: Workspace switching and window information
- **System Monitoring**: CPU, memory, GPU usage and temperatures
- **Network Status**: Wi-Fi and Ethernet connectivity
- **Battery Information**: For laptop setups
- **Clock and Calendar**: Time and date display
- **Custom Modules**: GPU usage, notifications, weather, music controls
- **High-DPI Support**: Optimized for scaled displays (1.20x)

## File Structure

```
~/.config/waybar/
├── config.jsonc          # Main configuration
├── style.css             # CSS styling
├── bars/
│   ├── bar-1.jsonc       # Alternative bar config
│   └── bar-2.jsonc       # Primary bar config
├── modules/
│   ├── hyprland-workspaces.jsonc
│   ├── battery.jsonc
│   ├── cpu.jsonc
│   ├── memory.jsonc
│   ├── network.jsonc
│   ├── clock.jsonc
│   ├── pulseaudio.jsonc
│   ├── custom-gpu-usage.jsonc
│   ├── custom-music.jsonc
│   └── ...
├── scripts/
│   ├── cava.sh           # Audio visualization
│   └── mediaplayer.py    # Media controls
└── README.md             # This file
```

## Configuration

### Main Config (config.jsonc)
- Bar positioned at bottom
- Height: 48px (scaled for high-DPI)
- Output: eDP-1 (laptop monitor)
- Layer: top with exclusive mode

### Modules
- **Left**: Hyprland workspaces
- **Center**: Clock
- **Right**: System stats, audio, network, battery

## Modules Included

- **hyprland/workspaces**: Workspace indicators with custom icons
- **battery**: Battery percentage with charging status
- **cpu**: CPU usage monitoring
- **memory**: RAM usage statistics
- **custom/gpu-usage**: GPU utilization (AMD)
- **temperature#cpu**: CPU temperature
- **temperature#gpu**: GPU temperature
- **pulseaudio**: Audio volume controls
- **network**: Network status
- **clock**: Time and date
- **custom/music**: Media player integration
- **custom/notifications**: Notification center
- **custom/weather**: Weather information

## Styling

Uses Catppuccin Macchiato color palette:
- Base: #24273a
- Surface: #363a4f
- Text: #cad3f5
- Accent: #f4dbd6

Rounded corners, subtle shadows, and smooth transitions.

## Dependencies

- `waybar`: Status bar application
- `hyprland`: Window manager
- `pulseaudio` or `pipewire-pulse`: Audio
- `networkmanager`: Network management
- GPU monitoring tools (radeontop)
- Media players (playerctl support)

## Scripts

- **gpu.sh**: Monitors AMD GPU usage
- **cava.sh**: Audio visualization data
- **mediaplayer.py**: Media player controls

## Usage

Waybar starts automatically with Hyprland via `exec-once = waybar`.

### Keybindings
- `$bar-toggle`: Toggle visibility
- `$bar-reload`: Reload configuration

## Customization

Edit the JSONC files in `modules/` for individual module settings. Modify `style.css` for appearance changes.

## Troubleshooting

### Bar not appearing
- Check if Waybar is installed and running
- Verify Hyprland autostart
- Check logs for errors

### Modules not working
- Ensure dependencies are installed
- Check script permissions
- Verify hardware access

### Styling issues
- Check CSS syntax
- Ensure font availability
- Verify color definitions

## License

Personal configuration - feel free to adapt for your setup.