# Neovide Configuration

This directory contains Neovide (GUI frontend for Neovim) configuration optimized for modern Linux desktop environments. Inspired by Matt-FTW's professional setup with enhanced performance and visual settings.

## 📄 Files

- **`config.toml`** - Main Neovide configuration with optimized settings

## ⚙️ Configuration Overview

### 🎨 **Rendering Settings**
```toml
vsync = true          # Vertical sync for smooth rendering
srgb = true           # sRGB color space for accurate colors
no-multigrid = true   # Performance optimization
```

### 🖼️ **Window Management**
```toml
maximized = false     # Let window manager control sizing
frame = "full"        # Full window frame with title bar
idle = false          # Stay responsive, don't suspend
```

### 🔗 **Neovim Integration**
```toml
neovim_bin = "~/.local/share/bob/nvim-bin/nvim"
```
Uses bob-managed Neovim for consistency with terminal setup.

## 🎯 Key Features

### 🚀 **Performance Optimizations**
- **VSync**: Smooth rendering without screen tearing
- **Multigrid Disabled**: Better performance on modern GPUs
- **Idle Prevention**: Maintains responsiveness during editing

### 🎨 **Visual Quality**
- **sRGB Color Space**: Accurate color representation
- **Full Frame**: Complete window decorations
- **Smooth Animations**: Optimized refresh rates

### 🔧 **Integration**
- **Bob Compatibility**: Works with bob Neovim version manager
- **Window Manager**: Respects desktop environment window management
- **Font Rendering**: High-quality text rendering

## 🚀 Usage

### **Launch Neovide**
```bash
# Launch with current directory
neovide

# Launch with specific file
neovide ~/.config/hypr/configs/binds.conf

# Launch with multiple files
neovide file1.txt file2.md
```

### **Command Line Options**
```bash
# Custom Neovim binary
neovide --neovim-bin /usr/bin/nvim

# Window size
neovide --size 1920x1080

# Maximized window
neovide --maximized

# Custom frame style
neovide --frame none  # none, full, transparent
```

## 🎨 Customization Options

### **Font Configuration**
```toml
# Add to config.toml for custom fonts
font_normal = ["JetBrains Mono", "Symbols Nerd Font Mono"]
font_size = 14.0
font_hinting = "full"      # none, slight, full
font_edging = "subpixel"   # none, antialias, subpixel
```

### **Theme Settings**
```toml
# Force theme mode
theme = "auto"   # auto, light, dark
```

### **Cursor Effects**
```toml
# Visual cursor effects
cursor_vfx_mode = "pixiedust"  # pixiedust, torpedo, ripple, wireframe
cursor_vfx_opacity = 200.0
cursor_vfx_particle_lifetime = 1.2
cursor_vfx_particle_density = 7.0
```

### **Animation Settings**
```toml
# Performance tuning
refresh_rate = 60
no_idle = true
```

## 🔧 Advanced Configuration

### **Environment Variables**
```bash
# Force Wayland backend
export WINIT_UNIX_BACKEND=wayland

# Custom config location
export NEOVIDE_CONFIG_PATH=~/.config/neovide/config.toml
```

### **Performance Tuning**
```toml
# For high-refresh rate displays
refresh_rate = 144

# For battery-powered devices
vsync = false
no_multigrid = true
```

### **Integration with Neovim**
Neovide automatically detects and uses your Neovim configuration:
- **init.lua**: Main configuration
- **plugins**: All installed plugins work
- **keybindings**: Custom mappings function normally
- **themes**: Colorschemes render properly

## 📊 Performance Comparison

| Setting | Default | Optimized | Benefit |
|---------|---------|-----------|---------|
| **vsync** | false | true | Smooth rendering |
| **srgb** | false | true | Accurate colors |
| **no-multigrid** | false | true | Better performance |
| **idle** | true | false | Responsive editing |

## 🐛 Troubleshooting

### **Neovide Won't Start**
```bash
# Check Neovim installation
~/.local/share/bob/nvim-bin/nvim --version

# Test basic functionality
neovide --version
```

### **Rendering Issues**
```toml
# Try disabling vsync
vsync = false

# Force software rendering
export WGPU_BACKEND=gl
```

### **Font Problems**
```toml
# Reset to system defaults
font_normal = []
font_size = 14.0
font_hinting = "full"
```

### **Wayland Issues**
```bash
# Force X11 backend
export WINIT_UNIX_BACKEND=x11
neovide
```

## 🔗 References

**Inspired by Matt-FTW's Neovide configuration:**
- Optimized rendering settings for smooth performance
- Professional GUI integration with Neovim
- Performance-focused configuration choices

**Official Documentation:**
- [Neovide GitHub](https://github.com/neovide/neovide)
- [Configuration Guide](https://neovide.dev/configuration.html)
- [Neovim Integration](https://neovim.io/)

## ⚡ Quick Setup

1. **Install Neovide**:
   ```bash
   # Via package manager
   yay -S neovide

   # Or download from releases
   # https://github.com/neovide/neovide/releases
   ```

2. **Copy Configuration**:
   ```bash
   mkdir -p ~/.config/neovide
   cp ~/dotfiles/.config/neovide/config.toml ~/.config/neovide/
   ```

3. **Launch**:
   ```bash
   neovide
   ```

## 🎉 **Professional GUI Neovim Experience**

*Neovide provides a modern, GPU-accelerated GUI for Neovim with native performance and beautiful rendering. This configuration optimizes it for daily development workflows.*

---

**🚀 Ready for beautiful, performant Neovim GUI editing!**