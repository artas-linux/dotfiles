# SwayNC Configuration

A comprehensive Sway Notification Center configuration with Catppuccin Macchiato theme and advanced features.

## Overview

SwayNC (Sway Notification Center) is a simple notification daemon with a GTK GUI for notifications and the control center. This configuration provides a beautiful, functional notification system optimized for Wayland compositors like Hyprland.

## Features

- **Catppuccin Macchiato Theme**: Consistent with the desktop theme
- **Control Center**: Advanced notification management interface
- **Media Controls**: MPRIS integration for music players
- **System Controls**: Volume, brightness, and power actions
- **Custom Actions**: Quick access to suspend, logout, and screen lock
- **Notification Grouping**: Intelligent notification organization
- **Inline Replies**: Reply to notifications directly
- **2FA Actions**: Handle two-factor authentication codes

## File Structure

```
~/.config/swaync/
├── config.json          # Main configuration
├── style.css            # CSS theming
└── README.md           # This file
```

## Configuration

### config.json

The main configuration file controls all aspects of SwayNC behavior:

```json
{
  "positionX": "right",
  "positionY": "top",
  "layer": "overlay",
  "control-center-layer": "top",
  "timeout": 10,
  "timeout-low": 5,
  "timeout-critical": 0,
  "widgets": [
    "buttons-grid",
    "volume",
    "backlight",
    "mpris",
    "notifications"
  ]
}
```

### Key Settings

- **Position**: Top-right corner overlay
- **Layer**: Above other windows
- **Timeouts**: 10s normal, 5s low priority, 0s critical
- **Widgets**: Control center components

## Theming

### Catppuccin Macchiato Colors

```css
@define-color base     #24273a;
@define-color mantle   #1e2030;
@define-color surface0 #363a4f;
@define-color surface1 #494d64;
@define-color text     #cad3f5;
@define-color blue     #8aadf4;
@define-color green    #a6da95;
@define-color red      #ed8796;
```

### Visual Features

- Rounded corners (12px radius)
- Smooth transitions (200ms)
- Subtle shadows and blur effects
- Consistent spacing and typography
- Hover effects and animations

## Widgets

### Buttons Grid
Quick action buttons for common tasks:
- **Suspend** (󰐥): Put system to sleep
- **Logout** (󰜉): Exit Hyprland session
- **Lock** (󰑓): Lock screen with hyprlock

### Volume Control
- System volume slider
- Visual feedback
- Integration with system audio

### Backlight Control
- Screen brightness adjustment
- Hardware-dependent availability
- Smooth slider interface

### MPRIS Integration
- Media player controls
- Album art display (96px, rounded)
- Song information
- Playback controls

### Notifications List
- Chronological notification display
- Grouping by application
- Action buttons
- Close/dismiss functionality

## Usage

### Starting SwayNC

SwayNC should start automatically with your desktop session. If not:

```bash
# Start the daemon
swaync

# Start control center
swaync-client -t
```

### Keyboard Shortcuts

- **Super + N**: Toggle notification panel
- **Super + Shift + N**: Toggle control center
- **Super + Ctrl + N**: Do not disturb mode

### Manual Control

```bash
# Close all notifications
swaync-client -C

# Toggle do not disturb
swaync-client -d

# Get notification count
swaync-client -c
```

## Integration with Hyprland

### Autostart
Add to your Hyprland config:

```bash
exec-once = swaync
```

### Keybindings
Already configured in your setup:
```bash
bind = $mainMod, N, exec, swaync-client -t
bind = $mainMod SHIFT, N, exec, swaync-client -c
bind = $mainMod CTRL, N, exec, swaync-client -d
```

## Notification Sources

SwayNC receives notifications from:
- System services (battery, network, etc.)
- Applications (browsers, terminals, etc.)
- Custom scripts and tools
- Desktop environment events

## Advanced Features

### 2FA Handling
Automatically detects and provides actions for two-factor authentication codes.

### Inline Replies
Reply to notifications directly from the notification panel (when supported).

### Image Support
Displays notification images when available (up to 200x100px).

### Script Integration
Run custom scripts on notification events.

## Customization

### Adding Custom Actions

```json
"widget-config": {
  "buttons-grid": {
    "actions": [
      {
        "label": "󰐥",
        "command": "systemctl suspend"
      }
    ]
  }
}
```

### Custom Styling

Modify `style.css` to change:
- Colors and themes
- Border radius and spacing
- Font families and sizes
- Animation timings

### Notification Rules

Create custom rules for specific applications:

```json
"notification-visibility": {
  "example-app": {
    "state": "transient",
    "urgency": "low"
  }
}
```

## Troubleshooting

### Notifications Not Appearing

1. Check if swaync is running:
   ```bash
   pgrep swaync
   ```

2. Verify configuration syntax:
   ```bash
   swaync-client -v
   ```

3. Check logs:
   ```bash
   journalctl -f | grep swaync
   ```

### Control Center Not Opening

1. Test manual launch:
   ```bash
   swaync-client -t
   ```

2. Check keybindings in Hyprland config

3. Verify swaync-client is installed

### Styling Issues

1. Validate CSS syntax
2. Check color definitions
3. Restart swaync after changes

### Performance Issues

1. Reduce timeout values
2. Disable image visibility
3. Limit notification history

## Dependencies

- `swaync`: Notification daemon
- `swaync-client`: Control client
- GTK libraries for GUI
- MPRIS-enabled media players (optional)

## Related Components

- **Dunst**: Alternative notification daemon
- **Mako**: Wayland notification daemon
- **Hyprland**: Window manager integration
- **Catppuccin**: Color theme consistency

## Tips

- Use different timeouts for different urgency levels
- Customize actions for your workflow
- Monitor notification count with swaync-client -c
- Use do-not-disturb mode during presentations

## Updates

Keep swaync updated for new features and security fixes:

```bash
# Check for updates
pacman -Qu swaync

# Update
sudo pacman -Syu swaync
```

---

*Beautiful, functional notifications for your Hyprland desktop*