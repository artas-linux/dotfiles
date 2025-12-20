# 🖥️ Artas Linux Dotfiles

<div align="center">
  <img src="https://img.shields.io/github/stars/artas-linux/dotfiles?style=for-the-badge&logo=github&color=teal" alt="GitHub Stars"/>
  <img src="https://img.shields.io/github/last-commit/artas-linux/dotfiles?style=for-the-badge&color=teal" alt="Last Commit"/>
</div>

> 💄 A comprehensive Linux desktop environment configuration optimized for productivity and aesthetics

## ✨ Features

<div class="grid cards" markdown>

- **🎨 Beautiful Theming**
  - Catppuccin Macchiato theme across all applications
  - Consistent color scheme and icons

- **🖥️ Modern Desktop**
  - Hyprland compositor with smooth animations
  - Waybar status bar with system monitoring
  - Rofi launcher with custom themes

- **✏️ Powerful Editor**
  - Neovim with LazyVim and 50+ plugins
  - Full LSP support and debugging
  - Custom keymaps and workflows

- **🐚 Smart Shell**
  - Fish shell with fzf integration
  - Custom abbreviations and functions
  - Beautiful prompt with Starship

- **🔧 Development Tools**
  - Git with delta and custom aliases
  - Tmux with TPM and Catppuccin theme
  - Language servers and debuggers

- **📊 System Monitoring**
  - Btop with custom theme
  - Fastfetch with system information
  - Custom monitoring scripts

</div>

## 🚀 Quick Start

### Prerequisites
- **OS**: Arch Linux
- **WM**: Hyprland
- **Shell**: Fish
- **Editor**: Neovim

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/artas-linux/dotfiles.git
   cd dotfiles
   ```

2. **Install dependencies:**
   ```bash
   # Core packages
   sudo pacman -S hyprland waybar fish neovim tmux git

   # Fonts
   sudo pacman -S ttf-jetbrains-mono ttf-maple-mono-nf

   # Tools
   mise use python node go rust
   ```

3. **Apply dotfiles:**
   ```bash
   yadm clone https://github.com/artas-linux/dotfiles.git
   yadm status  # Check what will be applied
   ```

## 🎯 Key Bindings

### Hyprland
| Key | Action |
|-----|--------|
| `Super + Q` | Kill window |
| `Super + Space` | Toggle floating |
| `Super + Enter` | Terminal |
| `Super + D` | App launcher |
| `Super + Tab` | Window switcher |

### Neovim
| Key | Action |
|-----|--------|
| `<C-a>` | Ask opencode |
| `<C-x>` | Opencode actions |
| `<leader>ff` | Find files |
| `<leader>fg` | Live grep |
| `<leader>ca` | Code actions |

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

## 🤝 Contributing

Found an issue or have suggestions?

- 🐛 [Open an issue](https://github.com/artas-linux/dotfiles/issues)
- 💡 [Start a discussion](https://github.com/artas-linux/dotfiles/discussions)
- 📝 [Submit a PR](https://github.com/artas-linux/dotfiles/pulls)

## 📜 License

[![MIT License](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)

---

<div align="center">
  <p>Made with ❤️ and lots of ☕</p>
  <p>
    <a href="#artas-linux-dotfiles">Back to top ↑</a>
  </p>
</div>