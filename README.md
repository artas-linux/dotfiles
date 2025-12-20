# Dotfiles

A comprehensive dotfiles setup for Arch Linux with Hyprland, managed by yadm.

## Overview

This repository contains my personal dotfiles and system configuration optimized for a high-DPI laptop setup running Arch Linux with Hyprland as the window manager. The setup features Catppuccin Macchiato theming throughout and includes configurations for various tools and applications.

## System Information

- **OS**: Arch Linux
- **WM**: Hyprland
- **Shell**: Fish with Starship prompt
- **Terminal**: Ghostty
- **Editor**: Neovim with LazyVim
- **File Manager**: Yazi
- **Status Bar**: Waybar
- **Theme**: Catppuccin Macchiato
- **Display**: 1920x1080 @ 1.20x scaling (high-DPI)

## Directory Structure

```
~/.config/
├── hypr/           # Hyprland window manager
│   ├── configs/    # Modular configuration files
│   ├── plugins/    # Hyprland plugins
│   ├── scripts/    # Utility scripts
│   └── theme/      # Theming and wallpapers
├── waybar/         # Status bar configuration
├── ghostty/        # Terminal emulator
├── yazi/           # File manager
├── fish/           # Shell configuration
├── nvim/           # Neovim editor
├── rofi/           # Application launcher
├── lazygit/        # Git TUI
├── bat/            # Cat clone with syntax highlighting
├── btop/           # System monitor
└── ...
```

## Key Components

### Hyprland (Window Manager)
- **Config**: Modular setup with separate files for binds, monitors, workspaces, etc.
- **Plugins**: Hycov, hyprexpo, hyprsplit, hyprtasking, hyprspace, dynamic-cursors
- **Scripts**: Custom scripts for wallpaper management, notifications, etc.
- **Theme**: Catppuccin Macchiato with 100+ wallpapers

### Waybar (Status Bar)
- **Modules**: CPU, memory, GPU, battery, network, clock, custom modules
- **Plugins**: Full-border, git status, starship integration
- **Theme**: Catppuccin Macchiato colors

### Terminal Setup
- **Ghostty**: Modern terminal with Catppuccin Macchiato theme
- **Fish**: Shell with custom prompt and abbreviations
- **Starship**: Cross-shell prompt

### Development Tools
- **Neovim**: With LazyVim and Catppuccin theme
- **Yazi**: Terminal file manager with plugins
- **Lazygit**: Git TUI
- **Bat**: Syntax-highlighted cat
- **Btop**: System resource monitor

## Installation

1. **Install yadm**:
   ```bash
   sudo pacman -S yadm
   ```

2. **Clone dotfiles**:
   ```bash
   yadm clone <repository-url>
   ```

3. **Install required packages**:
   ```bash
   sudo pacman -S hyprland waybar ghostty fish starship neovim yazi lazygit bat btop
   ```

4. **Install AUR packages** (if needed):
   ```bash
   yay -S catppuccin-gtk-theme catppuccin-cursors
   ```

5. **Install plugins**:
   - Hyprland plugins: Run `hyprpm update` and enable plugins in `hyprpm.yaml`
   - Waybar: Already configured
   - Yazi: Run `ya pack -i` to install plugins

## Keybindings

### Hyprland
- **Super + Q**: Kill active window
- **Super + Return**: Launch terminal
- **Super + D**: App launcher (Rofi)
- **Super + Tab**: Window switcher
- **Super + Arrows**: Focus navigation
- **Super + Shift + Arrows**: Move windows
- **Super + 1-9**: Switch workspaces
- **Super + Shift + 1-9**: Move windows to workspaces

### Waybar
- **Super + B**: Toggle bar visibility
- **Super + Shift + R**: Reload bar

### Yazi
- **h/j/k/l**: Navigation
- **Enter**: Open file/directory
- **q**: Quit
- **g**: Go to top
- **G**: Go to bottom

## Theming

### Catppuccin Macchiato Palette
- **Base**: #24273a
- **Surface**: #363a4f
- **Text**: #cad3f5
- **Accent**: #f4dbd6
- **Red**: #ed8796
- **Green**: #a6da95
- **Blue**: #8aadf4
- **Yellow**: #eed49f

### Applications Themed
- Hyprland
- Waybar
- Ghostty
- Yazi
- Rofi
- GTK/Qt applications
- Neovim

## Scripts and Automation

### Hyprland Scripts
- `autostart/`: Services and apps that start with Hyprland
- `random_wallpaper`: Change wallpaper randomly
- `toggle_floating`: Toggle window floating state
- `color_picker`: Pick colors from screen
- `current_song`: Show current playing song

### System Scripts
Located in `~/scripts/` for various automation tasks.

## Hardware Specific

### Laptop Configuration
- **CPU**: AMD Ryzen 5 3500U
- **GPU**: Radeon Vega 8 (AMD)
- **Display**: 1920x1080 @ 60Hz with 1.20x scaling
- **Battery**: Configured for power management
- **Network**: Wi-Fi and Ethernet support

### Monitor Setup
- Primary: eDP-1 (laptop screen)
- Scaling: 1.20x for high-DPI
- Refresh: 60Hz
- Resolution: 1920x1080

## Troubleshooting

### Common Issues

#### Hyprland won't start
1. Check GPU drivers: `lspci | grep VGA`
2. Verify config syntax: `hyprctl --help`
3. Check logs: `journalctl -f | grep hyprland`

#### Waybar not showing
1. Check if running: `ps aux | grep waybar`
2. Reload config: `pkill waybar && waybar &`
3. Verify modules: Check dependencies

#### Theme not applying
1. Install Catppuccin themes
2. Reload applications
3. Check config files for correct colors

#### High-DPI issues
1. Adjust scaling in `hyprland.conf`
2. Update cursor size in environment
3. Check font sizes in applications

## Dependencies

### Core System
- `hyprland` - Window manager
- `waybar` - Status bar
- `ghostty` - Terminal
- `fish` - Shell
- `yadm` - Dotfiles manager

### Development
- `neovim` - Editor
- `yazi` - File manager
- `lazygit` - Git UI
- `bat` - File viewer

### Utilities
- `rofi` - Launcher
- `btop` - System monitor
- `starship` - Prompt
- `fd` - File finder
- `ripgrep` - Text search

### Theming
- `catppuccin-gtk-theme` - GTK theme
- `catppuccin-cursors` - Cursor theme
- `qt5ct` - Qt theme configuration

## Backup and Sync

Dotfiles are managed with yadm for easy backup and synchronization across machines.

### Adding new configs
```bash
yadm add ~/.config/new-app/
yadm commit -m "Add new-app configuration"
yadm push
```

### Pulling updates
```bash
yadm pull
yadm bootstrap  # If bootstrap script exists
```

## Contributing

This is a personal configuration, but feel free to:
- Fork and adapt for your needs
- Submit suggestions via issues
- Share improvements

## License

These dotfiles are provided as-is for personal use. See individual application licenses for their respective components.

## Acknowledgments

- [Hyprland](https://hyprland.org/) - Window manager
- [Catppuccin](https://github.com/catppuccin/catppuccin) - Color scheme
- [Waybar](https://github.com/Alexays/Waybar) - Status bar
- [Yazi](https://github.com/sxyazi/yazi) - File manager
- Various plugin and theme authors

---

*Last updated: December 2025*