# Artas Linux Dotfiles

Welcome to my comprehensive dotfiles setup! This repository contains a complete Linux desktop environment configuration optimized for productivity and aesthetics.

## ✨ Features

- **🎨 Beautiful Theming**: Catppuccin Macchiato theme across all applications
- **🖥️ Modern Desktop**: Hyprland compositor with Waybar status bar
- **✏️ Powerful Editor**: Neovim with LazyVim and extensive plugins
- **🐚 Smart Shell**: Fish shell with fzf integration
- **🔧 Development Tools**: Git, Tmux, and language servers
- **📊 System Monitoring**: Btop, fastfetch, and system utilities
- **🎯 Productivity Scripts**: Custom scripts for automation

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/artas-linux/dotfiles.git
   cd dotfiles
   ```

2. **Install dependencies:**
   - Arch Linux packages (see setup/dependencies.md)
   - Fonts: Maple Mono NF, JetBrains Mono
   - Tools: mise, yadm

3. **Apply dotfiles:**
   ```bash
   yadm clone https://github.com/artas-linux/dotfiles.git
   yadm status  # Check what will be applied
   ```

## 📁 Structure

```
├── .config/          # Application configurations
│   ├── hypr/         # Hyprland window manager
│   ├── waybar/       # Status bar
│   ├── fish/         # Shell configuration
│   ├── nvim/         # Neovim editor
│   └── ...
├── .local/bin/       # Custom scripts
├── docs/             # This documentation
└── README.md         # Quick reference
```

## 🎯 Key Bindings

### Hyprland
- `Super + Q`: Kill window
- `Super + Space`: Toggle floating
- `Super + Enter`: Terminal
- `Super + D`: App launcher

### Neovim
- `<C-a>`: Ask opencode
- `<C-x>`: Opencode actions
- `<leader>ff`: Find files
- `<leader>fg`: Live grep

## 🤝 Contributing

Found an issue or have suggestions? Open an issue or PR!

## 📜 License

MIT License - feel free to use and modify!