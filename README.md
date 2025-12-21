# 🔧 Arch Linux Development Environment

![Arch Linux](https://img.shields.io/badge/Arch_Linux-1793D1?style=for-the-badge&logo=arch-linux&logoColor=white)
![Hyprland](https://img.shields.io/badge/Hyprland-58A6FF?style=for-the-badge&logo=wayland&logoColor=white)
![YADM](https://img.shields.io/badge/YADM-FF6B35?style=for-the-badge&logo=git&logoColor=white)
![OpenCode](https://img.shields.io/badge/OpenCode-FF4081?style=for-the-badge&logo=ai&logoColor=white)

A comprehensive, AI-powered development environment built on Arch Linux with Hyprland, featuring advanced dotfiles management, modern tooling, and intelligent automation.

## 🎯 Overview

This repository contains a complete development environment configuration optimized for productivity, featuring:

- **Modern Desktop**: Hyprland Wayland compositor with dynamic tiling
- **AI-Powered Development**: OpenCode assistant with Archon MCP knowledge base
- **Sophisticated Configuration**: YADM-managed dotfiles with safety hooks
- **Consistent Theming**: Catppuccin theme suite across all applications
- **Full-Stack Tooling**: Support for Python, Rust, JavaScript, Go, and more
- **Automation Pipeline**: YouTube content creation and publishing system

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Arch Linux Development Environment       │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Hyprland  │  │    YADM     │  │  OpenCode   │         │
│  │  Wayland WM │  │ Dotfiles    │  │ AI Assistant│         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│           │               │               │                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │    Kitty    │  │   Neovim    │  │  Archon MCP │         │
│  │  Terminal   │  │   Editor    │  │ Knowledge   │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│           │               │               │                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │    Fish     │  │    Mise     │  │   Catppuccin│         │
│  │    Shell    │  │Version Mgmt │  │   Theming   │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- **Arch Linux** (rolling release)
- **Root access** for package installation
- **Internet connection** for downloads

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/artas-linux/dotfiles.git ~/.dotfiles
   cd ~/.dotfiles
   ```

2. **Initialize YADM:**
   ```bash
   yadm clone https://github.com/artas-linux/dotfiles.git
   yadm status
   ```

3. **Install system packages:**
   ```bash
   # Update system
   sudo pacman -Syu

   # Install core packages
   sudo pacman -S hyprland kitty neovim fish starship waybar \
                   nwg-look qt5ct qt6ct pacman-contrib \
                   python python-pip nodejs npm rust go \
                   ffmpeg imagemagick git openssh
   ```

4. **Install AUR packages:**
   ```bash
   yay -S catppuccin-gtk-theme-git catppuccin-cursors-mocha \
           catppuccin-mocha-grub-theme-git opencode-bin \
           archon-mcp-server-git
   ```

5. **Apply configuration:**
   ```bash
   # Reload Hyprland configuration
   hyprctl reload

   # Apply GTK themes
   nwg-look -a
   ```

## 🎨 Key Features

### 🖥️ Desktop Environment

- **Hyprland**: Modern Wayland compositor with dynamic tiling
- **Waybar**: Customizable status bar with system monitoring
- **Kitty**: GPU-accelerated terminal with Catppuccin theming
- **Yazi**: Terminal file manager with image preview
- **Catppuccin Themes**: Consistent theming across GTK/Qt applications

### 🤖 AI-Powered Development

- **OpenCode**: Multi-model AI assistant (Claude, Gemini, GPT)
- **Archon MCP**: Knowledge base with RAG capabilities
- **Smart Code Generation**: Context-aware code completion
- **Intelligent Debugging**: Error analysis and fixes
- **Documentation Generation**: Automated API and code docs

### 🔧 Development Tools

- **Neovim**: Modal editor with LSP integration
- **Fish Shell**: User-friendly shell with autosuggestions
- **Mise**: Polyglot version manager for Node.js, Python, Rust, Go
- **Git**: Advanced version control with safety hooks
- **YADM**: Sophisticated dotfiles management

### 🛡️ Security & Safety

- **YADM Safety Hooks**: Prevent dangerous git operations
- **Branch Protection**: Block pushes to main/master from feature branches
- **File Encryption**: GPG/OpenSSL support for sensitive data
- **Access Control**: Comprehensive ignore patterns
- **Audit Trail**: Operation logging and monitoring

### 📹 Content Automation

- **YouTube Pipeline**: Automated content creation and publishing
- **Google Colab Integration**: AI-powered video processing
- **FFmpeg Processing**: Advanced video/audio manipulation
- **API Integration**: YouTube Data API v3 support
- **Quality Assurance**: Automated content validation

## 📁 Project Structure

```
~/.dotfiles/
├── .config/
│   ├── hypr/           # Hyprland window manager config
│   ├── kitty/          # Terminal emulator settings
│   ├── fish/           # Shell configuration
│   ├── nvim/           # Neovim editor setup
│   ├── yadm/           # Dotfiles manager configuration
│   ├── gtk-3.0/        # GTK3 theming
│   ├── gtk-4.0/        # GTK4 theming
│   └── opencode/       # AI assistant configuration
├── .local/
│   ├── bin/            # Custom scripts and utilities
│   └── share/
│       └── yadm/       # YADM repository data
├── yt_automations/     # YouTube automation pipeline
└── docs/               # Documentation and guides
```

## 🛠️ Development Workflows

### Daily Development

```bash
# Start development session
fish
mise use node@lts python@latest rust@stable go@latest
opencode "Start new development session"

# Edit code
nvim project/
yadm status  # Check configuration changes
```

### Configuration Management

```bash
# Add new configuration
yadm add .config/new-app/
yadm commit -m "feat: add new-app configuration"

# Safety override (when needed)
yadm config yadm.safety-override true
yadm push
yadm config --unset yadm.safety-override
```

### Theme Customization

```bash
# Change GTK theme
nwg-look  # Interactive theme selector
nwg-look -a  # Apply globally

# Update Catppuccin variant
# Edit ~/.config/nwg-look/config
# Restart applications
```

## 🤖 AI Integration

### OpenCode Usage

```bash
# Start interactive session
opencode

# Code generation
opencode "Create a Python function to parse JSON"

# Debug assistance
opencode "Fix this Rust compilation error"

# Documentation
opencode "Generate API docs for this Go package"
```

### Archon Knowledge Base

```bash
# Query documentation
opencode "How does YADM encryption work?"

# Find code examples
opencode "Show me Rust async patterns"

# System information
opencode "What are Hyprland keybindings?"
```

## 📚 Documentation

- **[Getting Started](./docs/getting-started.md)**: Complete setup guide
- **[Hyprland Configuration](./docs/hyprland.md)**: Window manager setup
- **[YADM Guide](./docs/yadm.md)**: Dotfiles management
- **[AI Development](./docs/ai-tools.md)**: OpenCode and Archon usage
- **[Theme Customization](./docs/theming.md)**: Catppuccin theming
- **[Security](./docs/security.md)**: Safety features and best practices

## 🔧 Configuration Files

### Core Configuration

| Component | Location | Purpose |
|-----------|----------|---------|
| Hyprland | `~/.config/hypr/` | Window manager |
| YADM | `~/.config/yadm/` | Dotfiles management |
| Kitty | `~/.config/kitty/` | Terminal emulator |
| Neovim | `~/.config/nvim/` | Code editor |
| Fish | `~/.config/fish/` | Shell environment |
| GTK | `~/.config/gtk-*/` | Theme configuration |

### Safety Features

- **Pre-commit hooks**: Validate changes before commit
- **Post-commit hooks**: Auto-push changes
- **Post-pull hooks**: Show changes and reload suggestions
- **Safety overrides**: Bypass protection when needed

## 🤝 Contributing

### Development Setup

1. **Fork and clone:**
   ```bash
   git clone https://github.com/your-username/dotfiles.git
   cd dotfiles
   yadm init
   ```

2. **Create feature branch:**
   ```bash
   yadm checkout -b feature/your-feature
   ```

3. **Make changes and test:**
   ```bash
   # Edit configurations
   yadm add .
   yadm commit -m "feat: your feature description"
   ```

4. **Submit pull request**

### Guidelines

- **Conventional commits**: Use semantic commit messages
- **Documentation**: Update docs for configuration changes
- **Testing**: Test changes across different scenarios
- **Security**: Never commit sensitive data or credentials
- **Compatibility**: Ensure changes work on multiple systems

## 📋 Requirements

### System Requirements

- **OS**: Arch Linux (rolling release)
- **CPU**: x86_64 compatible
- **RAM**: 8GB minimum, 16GB recommended
- **Storage**: 50GB available space
- **GPU**: OpenGL 3.3+ compatible

### Software Dependencies

- **Hyprland**: Wayland compositor
- **YADM**: Dotfiles manager
- **OpenCode**: AI assistant
- **Archon MCP**: Knowledge base server
- **Modern toolkit**: GTK4, Qt6, Wayland

## 🐛 Troubleshooting

### Common Issues

**Hyprland won't start:**
```bash
# Check graphics drivers
lspci | grep VGA
# Verify Wayland session
echo $XDG_SESSION_TYPE
```

**Theme not applying:**
```bash
# Reset GTK settings
nwg-look -r
# Reapply themes
nwg-look -a
```

**YADM safety blocking commits:**
```bash
# Check what's being blocked
yadm log --oneline -1
# Override if needed
yadm config yadm.safety-override true
```

### Getting Help

- **Issues**: [GitHub Issues](https://github.com/artas-linux/dotfiles/issues)
- **Discussions**: [GitHub Discussions](https://github.com/artas-linux/dotfiles/discussions)
- **Documentation**: [Archon Knowledge Base](https://archon.local/docs)

## 📄 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Hyprland Community**: Modern Wayland experience
- **YADM Project**: Sophisticated dotfiles management
- **OpenCode Team**: AI-powered development
- **Archon Contributors**: Knowledge base system
- **Catppuccin Team**: Beautiful theming system
- **Arch Linux Community**: Rolling release excellence

---

**Built with ❤️ for the modern Linux development experience**