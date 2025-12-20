# 🚀 Hyprland Configuration Documentation

## 📋 Overview

This is a comprehensive, modular Hyprland configuration optimized for a high-DPI laptop setup (Acer Aspire A315-42 with AMD Ryzen 5 3500U and Radeon Vega 8 graphics). The configuration features Catppuccin Macchiato theming, extensive keybindings, and integration with modern Wayland tools.

## 🏗️ Structure

```
~/.config/hypr/
├── hyprland.conf          # Main configuration file
├── configs/
│   ├── env.conf           # Environment variables
│   ├── monitors.conf      # Display configuration
│   ├── workspaces.conf    # Workspace assignments
│   ├── binds.conf         # Keybindings
│   ├── default_apps.conf  # Application variables
│   ├── input.conf         # Input device settings
│   ├── misc.conf          # General settings
│   └── plugins.conf       # Plugin configuration
├── theme/
│   ├── theme.conf         # Theme sourcing
│   ├── colors.conf        # Catppuccin color palette
│   ├── animations.conf    # Animation settings
│   ├── decoration.conf    # Window decoration
│   └── rules.conf         # Window and workspace rules
└── scripts/
    └── autostart/
        ├── services       # System services startup
        └── apps           # Application startup
```

## ⚙️ Main Configuration (hyprland.conf)

The main configuration file is intentionally minimal, sourcing modular config files for better organization:

```bash
# Configs
source = $HOME/.config/hypr/configs/env.conf
source = $HOME/.config/hypr/configs/monitors.conf
source = $HOME/.config/hypr/configs/workspaces.conf
source = $HOME/.config/hypr/configs/binds.conf
source = $HOME/.config/hypr/configs/input.conf
source = $HOME/.config/hypr/configs/misc.conf
source = $HOME/.config/hypr/configs/plugins.conf
source = $HOME/.config/hypr/theme/theme.conf

# Autostart
exec-once = $HOME/.config/hypr/scripts/autostart/services
exec-once = $HOME/.config/hypr/scripts/autostart/apps
```

## 🌍 Environment Configuration (configs/env.conf)

Sets up essential environment variables for Wayland compatibility and theming:

### 🖥️ XDG Desktop Integration
```bash
envd = XDG_CURRENT_DESKTOP, Hyprland
envd = XDG_SESSION_TYPE, wayland
envd = XDG_SESSION_DESKTOP, Hyprland
```

### 🛠️ Qt Applications
```bash
env = QT_QPA_PLATFORM, wayland          # Force Wayland backend
env = QT_QPA_PLATFORMTHEME, qt5ct       # Qt5 theme integration
env = QT_WAYLAND_DISABLE_WINDOWDECORATION, 1  # Native decorations
env = QT_AUTO_SCREEN_SCALE_FACTOR, 1    # Automatic scaling
env = QT_STYLE_OVERRIDE, kvantum        # Kvantum theme engine
```

### 🎮 Graphics & Performance
```bash
env = WLR_DRM_NO_ATOMIC, 0              # Enable atomic modesetting
```

### 🎨 Theming
```bash
env = GTK_THEME, catppuccin-macchiato-lavender-standard+default
env = XCURSOR_THEME, catppuccin-macchiato-dark-cursors
env = XCURSOR_SIZE, 24
env = HYPRCURSOR_THEME, catppuccin-macchiato-dark-cursors
env = HYPRCURSOR_SIZE, 24
```

## 🖥️ Monitor Configuration (configs/monitors.conf)

Configured for the laptop's high-DPI display:

```bash
monitor=eDP-1,1920x1080@60.00800,0x0,1.50
```

- **📐 Resolution**: 1920x1080 native
- **⚡ Refresh Rate**: 60Hz
- **📍 Position**: (0,0) - primary display
- **🔍 Scale**: 1.50x for high-DPI content

## 🖼️ Workspace Configuration (configs/workspaces.conf)

All 9 workspaces assigned to the laptop display:

```bash
workspace = 1, monitor:eDP-1, default:true
workspace = 2, monitor:eDP-1
# ... workspaces 3-9
```

## 📱 Application Variables (configs/default_apps.conf)

Centralized application definitions for consistent keybindings:

### 🖥️ Core Applications
```bash
$terminal = kitty
$fileManager = dolphin
$launcher = wofi --show drun
$launcher-windows = wofi --show window
```

### 🔧 System Components
```bash
$bar = waybar
$notifications-menu = swaync-client
```

### 🎯 Specialized Apps
```bash
$browser = zen-browser
$notetaking-app = obsidian
$office-suite = libreoffice
$editor = $terminal nvim
$alter-editor = vscodium
```

## ⌨️ Keybindings (configs/binds.conf)

Extensive keybinding system with vim-style navigation and application shortcuts.

### 🔑 Modifiers
- `$mainMod = SUPER` - Windows/Cmd key as primary modifier

### 🪟 Window Management
```bash
# Basic operations
bind = $mainMod, Q, killactive
bind = $mainMod, A, exec, $scripts/toggle_floating
bind = $mainMod, F, fullscreen, 0

# Focus movement (arrow keys + vim keys)
bind = $mainMod, LEFT, movefocus, l
bind = $mainMod, H, movefocus, l    # Vim-style
bind = $mainMod, RIGHT, movefocus, r
bind = $mainMod, L, movefocus, r    # Vim-style

# Window movement
bind = $mainMod SHIFT, LEFT, movewindow, l
bind = $mainMod SHIFT, H, movewindow, l
```

### 🏢 Workspace Navigation
```bash
# Direct workspace access
bind = $mainMod, 1, workspace, r~1
bind = $mainMod, 2, workspace, r~2
# ... up to workspace 9

# Move windows to workspaces
bind = $mainMod SHIFT, 1, movetoworkspace, r~1
bind = $mainMod SHIFT, 2, movetoworkspace, r~2
```

### 🚀 Application Launchers
```bash
bind = $mainMod, RETURN, exec, $scripts/launch_app $terminal
bind = $mainMod, E, exec, $scripts/launch_app $alter-file-manager
bind = $mainMod, W, exec, $scripts/launch_app $browser
bind = $mainMod, TAB, exec, $launcher
```

### 🎵 Media Controls
```bash
bindl = , XF86AudioPlay, exec, playerctl play-pause
bindl = , XF86AudioNext, exec, playerctl next
bindl = , XF86AudioPrev, exec, playerctl previous
bindle = , XF86AudioRaiseVolume, exec, swayosd-client --output-volume +10
bindle = , XF86AudioLowerVolume, exec, swayosd-client --output-volume -10
```

### 🎛️ Special Features
```bash
# Resize mode (submap)
bind = $mainMod, R, submap, resize
submap = resize
binde = , RIGHT, resizeactive, 40 0
binde = , H, resizeactive, -40 0
bind = , ESCAPE, submap, reset
submap = reset
```

## 🖱️ Input Configuration (configs/input.conf)

Keyboard and touchpad settings optimized for laptop use:

### ⌨️ Keyboard
```bash
input {
    kb_layout = us
    kb_options = compose:rctrl, level3:ralt_switch, grp:win_space_toggle, caps:escape
    follow_mouse = 1
    numlock_by_default = true
}
```

### 👆 Touchpad
```bash
touchpad {
    natural_scroll = yes
    disable_while_typing = true
    scroll_factor = 1
}
```

### 🤏 Gestures
```bash
gesture = 3, horizontal, workspace  # 3-finger swipe to switch workspaces
```

## ⚙️ General Settings (configs/misc.conf)

Core Hyprland behavior configuration:

### 🔧 General
```bash
general {
    allow_tearing = false
}
```

### 🎛️ Miscellaneous
```bash
misc {
    always_follow_on_dnd = true      # Focus follows drag-and-drop
    disable_hyprland_logo = true     # Remove default wallpaper
    vrr = 0                         # Variable refresh rate disabled
    animate_manual_resizes = true   # Smooth resize animations
    animate_mouse_windowdragging = false
    enable_swallow = true           # Terminal swallowing
    font_family = Maple Mono NF     # UI font
}
```

### 🪟 Window Management
```bash
dwindle {
    pseudotile = true               # Enable pseudotiling
    preserve_split = true           # Maintain split ratios
    force_split = 0                 # Automatic splitting
}
```

## 🔌 Plugins (configs/plugins.conf)

Plugin system for extended functionality (currently disabled):

```bash
# Available plugins (uncomment to enable):
# - hyprtrails: Mouse trails effect
# - hyprexpo: Overview/expose mode
# - hyprsplit: Split workspaces
# - hyprtasking: Task management
# - hyprspace: Workspace management
# - dynamic-cursors: Animated cursors
```

## 🎨 Theming System

### 🌈 Colors (theme/colors.conf)
Complete Catppuccin Macchiato color palette with alpha variants for transparency effects.

### 🖼️ Decorations (theme/decoration.conf)
Window appearance settings:
- **🔲 Borders**: 2px lavender borders with transparency
- **📏 Gaps**: 5px internal, 10px external
- **🔄 Rounding**: 4px corner radius
- **🌫️ Blur**: 5px blur with 4 passes
- **👤 Shadows**: Disabled for performance
- **📊 Group Bars**: Gradient indicators for grouped windows

### ✨ Animations (theme/animations.conf)
Fast, smooth animations:
- **⏱️ Duration**: 3.5 seconds for most effects
- **📈 Curves**: Custom bezier curves for natural motion
- **🎭 Effects**: Window movement, fading, layer transitions

### 📋 Window Rules (theme/rules.conf)
Comprehensive window management rules:
- **🪟 Floating**: Specific applications (polkit, terminals, calculators)
- **🏢 Workspace Assignment**: Automatic placement by application type
- **📐 Size/Position**: Centered floating windows with appropriate sizes
- **📚 Layer Rules**: Proper stacking for notifications and bars

## 🚀 Autostart Scripts

### 🔧 Services (scripts/autostart/services)
System services that start with Hyprland:
- **🖼️ swww-daemon**: Wallpaper management (swaybg alternative)
- **💾 udiskie**: Removable device auto-mounting
- **📝 pyprland**: Scratchpad management
- **📊 waybar**: Status bar
- **🔔 swaync**: Notification daemon
- **🔊 swayosd-server**: OSD controls
- **😴 hypridle**: Idle management
- **📋 cliphist**: Clipboard history
- **🔐 polkit**: Authentication agent

### 📱 Applications (scripts/autostart/apps)
User applications that launch automatically:
- **🎵 feishin**: Music player
- **💻 ghostty**: Terminal emulator

## 🖼️ Wallpaper Management

### 📖 Overview
Wallpaper changing is handled by `swww` (swaybg) with a custom random wallpaper script.

### 🎹 Keybinding
- **Super + Ctrl + W**: Change to random wallpaper with smooth transition

### ⚙️ Configuration
- **🤖 Daemon**: `swww-daemon --format argb` (starts automatically)
- **📜 Script**: `scripts/random_wallpaper` - selects random image from `theme/walls/`
- **🎞️ Transition**: Wipe effect with bezier curve, 2-second duration, 75 FPS

### 📁 Wallpaper Directory
Located at `theme/walls/` containing 80+ high-quality wallpapers including:
- 🎮 Anime and gaming themes
- 🌄 Nature and landscape images
- 🎨 Abstract and cyberpunk art
- 🐧 Custom Hyprland branding

### 🔧 Troubleshooting
If wallpaper changing doesn't work:
1. Ensure `swww-daemon` is running: `ps aux | grep swww-daemon`
2. Check script permissions: `chmod +x scripts/random_wallpaper`
3. Verify wallpaper files exist in `theme/walls/`
4. Test manually: `scripts/random_wallpaper`

## 🌟 Key Features

### 🎨 **Catppuccin Theming**
- Consistent color scheme across all components
- Warm, pastel colors with good contrast
- Integrated with GTK, Qt, and Hyprland theming

### ⌨️ **Vim-Style Navigation**
- HJKL keys for directional movement
- Consistent with terminal-based workflows
- Both focus and window movement bindings

### 🖱️ **Touchpad Gestures**
- 3-finger horizontal swipe for workspace switching
- Natural scrolling with type-disable
- Configurable through libinput-gestures

### 🎵 **Media Integration**
- Hardware multimedia keys support
- swayosd for volume/brightness OSD
- playerctl for media player control
- PipeWire audio server integration

### 🖼️ **Dynamic Wallpapers**
- 80+ curated wallpapers with instant switching
- Smooth transitions with custom bezier curves
- Super+Ctrl+W for random wallpaper changes
- Notification feedback on wallpaper changes

### 🔧 **Modular Architecture**
- Easy to customize individual components
- Clear separation of concerns
- Version control friendly

### 🚀 **Performance Optimized**
- Disabled unnecessary animations
- Efficient blur settings
- Hardware-accelerated rendering

## 🛠️ Customization Guide

### 🎨 Changing Colors
Edit `theme/colors.conf` to modify the color palette. All theme files reference these variables.

### ⌨️ Adding Keybindings
Add new bindings to `configs/binds.conf`. Use the existing pattern with application variables.

### 🪟 Modifying Window Rules
Update `theme/rules.conf` to change window behavior, sizing, and placement.

### ✨ Adjusting Animations
Modify `theme/animations.conf` for different animation speeds and curves.

### 📱 Changing Applications
Update `configs/default_apps.conf` to change default applications.

## 📦 Dependencies

### ✅ Required Packages
- `hyprland` - Window manager
- `kitty` - Terminal emulator
- `wofi` - Application launcher
- `dolphin` - File manager
- `waybar` - Status bar
- `swaync` - Notifications
- `swayosd` - OSD controls
- `pyprland` - Scratchpads
- `playerctl` - Media control
- `brightnessctl` - Brightness control
- `udiskie` - Auto-mounting
- `polkit-gnome` - Authentication

### 🔧 Optional Packages
- `libinput-gestures` - Advanced touchpad gestures
- `swww` - Wallpaper management (currently used)
- `hyprpaper` - Alternative wallpaper manager
- `hypridle` - Idle management
- `hyprlock` - Screen locking

## 🔧 Troubleshooting

### ✅ Config Validation
```bash
hyprland --config ~/.config/hypr/hyprland.conf --verify-config
```

### 🔄 Reload Configuration
```bash
hyprctl reload
```

### 📋 Check Logs
```bash
journalctl -f -u hyprland
```

### 🐛 Common Issues
- **Globbing errors**: Ensure `$HOME` is used instead of `~` in source paths
- **Missing applications**: Install required packages or update `default_apps.conf`
- **Monitor issues**: Verify `monitors.conf` matches your hardware
- **Theme problems**: Check color variable definitions in `colors.conf`
- **Wallpaper not changing**: Ensure `swww-daemon` is running and script has correct process name check

## 📋 Migration Notes

This configuration was migrated from a monolithic setup to a modular structure. Key changes:
- Split single config file into 8 specialized files
- Adapted for laptop hardware (eDP-1 display)
- Customized application variables for user preferences
- Added comprehensive theming system
- Integrated advanced features while maintaining stability

The modular approach makes maintenance and customization much easier while preserving all functionality.
# Automated sync test - Thu Dec 11 04:05:04 AM UTC 2025
