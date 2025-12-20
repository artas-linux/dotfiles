# Yazi Configuration Guide

## Overview

Yazi is a modern terminal file manager written in Rust, featuring asynchronous I/O, extensive customization, and a user-friendly interface. This configuration provides a complete setup with multi-tool integration, plugin support, and desktop portal compatibility.

## File Structure

```
~/.config/yazi/
├── yazi.toml      # Main configuration (managers, openers, tasks)
├── keymap.toml    # Keybindings and shortcuts
├── theme.toml     # Theme and flavor selection
├── package.toml   # Plugin dependencies
├── init.lua       # Plugin initialization (Lua)
└── flavors/       # Theme flavor definitions
    ├── catppuccin-macchiato.yazi/
    └── solarized-*.yazi/
```

## Core Configuration (yazi.toml)

### Manager Settings

```toml
[mgr]
ratio = [1, 4, 3]          # Pane ratios: [parent, current, preview]
sort_by = "natural"         # Sort method: natural, name, size, mtime
sort_dir_first = true       # Show directories before files
show_hidden = true          # Display hidden files
show_symlink = true         # Show symlink indicators
scrolloff = 5               # Lines to keep visible around cursor
mouse_events = ["click", "scroll"]  # Mouse interaction
title_format = "Yazi: {cwd}" # Window title format
```

### Opener System

Yazi supports categorized openers for different file types:

#### Directory Openers
```toml
[opener]
folder = [
  { run = 'hyprctl dispatch exec "[float; size 60% 60%; center 1] nemo" "$1"', orphan = true, desc = "nemo", for = "linux" },
  { run = '''fish -c "nvim "$1""''', block = true, desc = "neovim", for = "linux" },
  { run = 'kitty --detach nvim "$@"', orphan = true, desc = "neovim (detached)", for = "linux" },
  { run = '''fish -c "lazygit -p "$1""''', block = true, desc = "lazygit", for = "linux" },
  { run = 'codium  "$@"', orphan = true, desc = "vscodium", for = "linux" },
  { run = 'kitty "$@"', orphan = true, desc = "kitty", for = "linux" },
  { run = 'xdg-open "$@"', orphan = true, desc = "xdg-open", for = "linux" },
]
```

#### Text File Openers
```toml
text = [
  { run = '$EDITOR "$@"', block = true, desc = "$EDITOR", for = "linux" },
  { run = 'nvim "$@"', block = true, desc = "neovim", for = "linux" },
  { run = 'kitty --detach nvim "$@"', block = true, desc = "neovim (detached)", for = "linux" },
  { run = 'codium  "$@"', orphan = true, desc = "vscodium", for = "linux" },
  { run = 'xdg-open "$@"', orphan = true, desc = "xdg-open", for = "linux" },
]
```

#### Media Openers
```toml
image = [
  { run = 'xdg-open "$@"', orphan = true, desc = "xdg-open", for = "linux" },
  { run = 'qimgv "$@"', orphan = true, desc = "qimgv", for = "linux" },
  { run = 'krita "$@"', orphan = true, desc = "krita", for = "linux" },
  { run = 'satty --filename "$@"', orphan = true, desc = "satty", for = "linux" },
]

video = [
  { run = 'xdg-open "$@"', orphan = true, desc = "xdg-open", for = "linux" },
  { run = 'mpv "$@"', orphan = true, desc = "mpv", for = "linux" },
  { run = 'vlc "$@"', orphan = true, desc = "vlc", for = "linux" },
]

audio = [
  { run = 'xdg-open "$@"', orphan = true, desc = "xdg-open", for = "linux" },
  { run = 'mpv "$@"', orphan = true, desc = "mpv", for = "linux" },
  { run = 'vlc "$@"', orphan = true, desc = "vlc", for = "linux" },
]
```

#### Document Openers
```toml
document = [
  { run = 'xdg-open "$@"', orphan = true, desc = "xdg-open", for = "linux" },
  { run = 'zathura "$@"', orphan = true, desc = "zathura", for = "linux" },
  { run = 'libreoffice "$@"', orphan = true, desc = "libreoffice", for = "linux" },
]
```

#### Fallback Opener
```toml
fallback = [
  { run = 'xdg-open "$@"', orphan = true, desc = "xdg-open", for = "linux" },
]
```

### Open Rules

Define which opener to use for different file types:

```toml
[open]
rules = [
  # Directories use folder openers
  { name = "*/", use = "folder" },

  # MIME type based rules
  { mime = "text/*", use = "text" },
  { mime = "image/*", use = "image" },
  { mime = "video/*", use = "video" },
  { mime = "application/octet-stream", use = "video" },
  { mime = "audio/*", use = "audio" },
  { mime = "inode/x-empty", use = "text" },
  { mime = "application/json", use = "text" },

  # Archive files
  { mime = "application/zip", use = "archive" },
  { mime = "application/gzip", use = "archive" },
  { mime = "application/x-tar", use = "archive" },
  { mime = "application/x-bzip", use = "archive" },
  { mime = "application/x-bzip2", use = "archive" },
  { mime = "application/x-7z-compressed", use = "archive" },
  { mime = "application/x-rar", use = "archive" },
  { mime = "application/x-xz", use = "archive" },

  # Documents
  { mime = "application/pdf", use = "document" },
  { mime = "application/epub+zip", use = "document" },
  { mime = "application/x-mobipocket-ebook", use = "document" },

  # Fallback for everything else
  { mime = "*", use = "fallback" },
]
```

### Task System

Configure asynchronous task processing:

```toml
[tasks]
micro_workers = 10      # Quick operations (file ops, metadata)
macro_workers = 5       # Heavy operations (image processing)
bizarre_retry = 3       # Retry failed tasks
image_alloc = 536870912 # 512MB for image processing
image_bound = [0, 0]    # Unlimited image dimensions
suppress_preload = false # Enable preloaders
```

### Plugin Configuration

```toml
[plugin]
# Git status fetchers
prepend_fetchers = [
  { id = "git", name = "*", run = "git" },
  { id = "git", name = "*/", run = "git" },
]

# Preview and preloader settings
previewers = [
  { name = "*/", run = "folder", sync = true },
  { mime = "text/*", run = "code" },
  { mime = "image/*", run = "image" },
  { mime = "video/*", run = "video" },
  { mime = "application/pdf", run = "pdf" },
  { mime = "application/zip", run = "archive" },
  { name = "*", run = "file" },
]

preloaders = [
  { name = "*/", run = "folder", prio = "low" },
  { mime = "image/*", run = "image" },
  { mime = "video/*", run = "video" },
]
```

## Keybindings (keymap.toml)

### Manager Keybindings

```toml
[mgr]
prepend_keymap = [
  # Shell access
  { on = "!", run = 'shell "$SHELL" --block', desc = "Open shell here" },

  # Archive operations
  { on = ["c", "a"], run = "plugin compress", desc = "Archive selected files" },

  # Preview navigation
  { on = "<C-u>", run = "seek -5", desc = "Seek up 5 units in the preview" },
  { on = "<C-d>", run = "seek 5", desc = "Seek down 5 units in the preview" },

  # Page scrolling
  { on = "K", run = "arrow -50%", desc = "Move cursor up half page" },
  { on = "J", run = "arrow 50%", desc = "Move cursor down half page" },
  { on = "<A-k>", run = "arrow -5", desc = "Move cursor up 5 lines" },
  { on = "<A-j>", run = "arrow 5", desc = "Move cursor down 5 lines" },

  # Search functionality
  { on = "s", run = "plugin searchjump --autocd", desc = "Flash jump to character" },
  { on = "S", run = "search --via=fd", desc = "Search files by name using fd" },

  # System clipboard
  { on = ["<C-y>"], run = 'shell -- for path in "$@"; do echo "file://$path"; done | wl-copy -t text/uri-list', desc = "Copy to clipboard" },

  # File operations
  { on = "A", run = "create --dir", desc = "Create a directory" },

  # Git integration
  { on = ["g", "r"], run = 'shell -- ya emit cd "$(git rev-parse --show-toplevel)"', desc = "Go to Git repository root" },

  # Tab management
  { on = "H", run = "tab_switch -1 --relative", desc = "Switch to previous tab" },
  { on = "L", run = "tab_switch 1 --relative", desc = "Switch to next tab" },
  { on = "<", run = "tab_swap -1", desc = "Swap current tab with previous" },
  { on = ">", run = "tab_swap 1", desc = "Swap current tab with next" },
]

append_keymap = [
  { on = "e", run = "open", desc = "Open the selected files" },
  { on = "E", run = "open --interactive", desc = "Open with interactive picker" },
]
```

### Completion Keybindings

```toml
[completion]
prepend_keymap = [
  { on = "<C-k>", run = "arrow -1", desc = "Move cursor up" },
  { on = "<C-j>", run = "arrow 1", desc = "Move cursor down" },
]
```

## Theme Configuration (theme.toml)

```toml
[flavor]
dark = "catppuccin-macchiato"
# light = "solarized-light"  # Uncomment for light mode
```

## Plugin Dependencies (package.toml)

```toml
[[plugin.deps]]
use = "yazi-rs/plugins:full-border"
rev = "d7588f6"
hash = "3996fc74044bc44144b323686f887e1"

[[plugin.deps]]
use = "yazi-rs/plugins:git"
rev = "d7588f6"
hash = "63b6c222bf2103b3023389dde5e2ecfe"

[[plugin.deps]]
use = "DreamMaoMao/searchjump"
rev = "7fafec3"
hash = "5337bf545993d8c4dec2c229031f49d"

[[plugin.deps]]
use = "Rolv-Apneseth/starship"
rev = "a63550b"
hash = "c2021386289a0cbb3e152a052f67c177"

[flavor]
deps = []
```

## Plugin Initialization (init.lua)

```lua
local catppuccin_palette = {
  rosewater = "#f4dbd6",
  flamingo = "#f0c6c6",
  pink = "#f5bde6",
  mauve = "#c6a0f6",
  red = "#ed8796",
  maroon = "#ee99a0",
  peach = "#f5a97f",
  yellow = "#eed49f",
  green = "#a6da95",
  teal = "#8bd5ca",
  sky = "#91d7e3",
  sapphire = "#7dc4e4",
  blue = "#8aadf4",
  lavender = "#b7bdf8",
  text = "#cad3f5",
  subtext1 = "#b8c0e0",
  subtext0 = "#a5adcb",
  overlay2 = "#939ab7",
  overlay1 = "#8087a2",
  overlay0 = "#6e738d",
  surface2 = "#5b6078",
  surface1 = "#494d64",
  surface0 = "#363a4f",
  base = "#24273a",
  mantle = "#1e2030",
  crust = "#181926",
}

-- Plugin configurations
require("full-border"):setup({
  type = ui.Border.ROUNDED,
})

require("searchjump"):setup({
  unmatch_fg = catppuccin_palette.overlay0,
  match_str_fg = catppuccin_palette.green,
  match_str_bg = catppuccin_palette.base,
  first_match_str_fg = catppuccin_palette.lavender,
  first_match_str_bg = catppuccin_palette.base,
  lable_fg = catppuccin_palette.lavender,
  lable_bg = catppuccin_palette.base,
  only_current = false,
  show_search_in_statusbar = true,
  auto_exit_when_unmatch = false,
  enable_capital_lable = true,
})

require("git"):setup()
require("starship"):setup()
```

## Terminal Integration

### xdg-desktop-portal-termfilechooser

Yazi integrates with the terminal file chooser portal for GTK applications:

```bash
# Configuration in ~/.config/xdg-desktop-portal-termfilechooser/config
[filechooser]
cmd=/home/archbtw/.local/bin/yazi-wrapper-improved.sh
default_dir=$HOME
open_mode=suggested
save_mode=suggested
create_help_file=0
env=TERMCMD=kitty --title 'File Chooser'
```

### Portal Preferences

```bash
# ~/.config/xdg-desktop-portal-termfilechooser/portals.conf
[preferred]
default=gtk
org.freedesktop.impl.portal.FileChooser=termfilechooser
```

## Usage Examples

### Basic Navigation
- `h/j/k/l` or arrow keys: Navigate
- `K/J`: Half-page scrolling
- `Enter`: Open file/directory
- `q`: Quit

### File Operations
- `y`: Yank (copy)
- `x`: Cut
- `p`: Paste
- `d`: Delete
- `r`: Rename

### Search & Jump
- `s`: Searchjump (flash to character)
- `S`: Search files with fd
- `!`: Open shell in current directory
- `gr`: Go to Git repository root

### Tab Management
- `t`: New tab
- `H/L`: Switch tabs
- `< >`: Swap tabs

### Plugin Features
- Git status indicators in directories
- Starship prompt integration
- Full border UI enhancement
- Search and jump functionality

## Customization Tips

### Adding New Openers
```toml
[opener]
custom = [
  { run = 'my-custom-command "$@"', orphan = true, desc = "Custom tool", for = "linux" },
]
```

### Custom Keybindings
```toml
[mgr]
prepend_keymap = [
  { on = "X", run = "custom_command", desc = "My custom action" },
]
```

### Theme Customization
```toml
# Create custom flavors in ~/.config/yazi/flavors/
[flavor]
dark = "my-custom-theme"
```

## Troubleshooting

### Configuration Issues
```bash
# Validate TOML syntax
python3 -c "import tomllib; tomllib.load(open('yazi.toml', 'rb'))"

# Check for yazi errors
yazi --help
```

### Plugin Issues
```bash
# Reinstall plugins
ya pack -u

# Check plugin status
ya pack -l
```

### Performance Tuning
- Adjust `micro_workers` and `macro_workers` based on system resources
- Toggle `suppress_preload` for performance vs responsiveness
- Monitor task activity in the status bar

## Resources

- [Yazi GitHub](https://github.com/sxyazi/yazi)
- [Yazi Documentation](https://yazi-rs.github.io/docs/)
- [Plugin Repository](https://github.com/yazi-rs/plugins)
- [Theme Gallery](https://github.com/yazi-rs/flavors)

---

*This configuration provides a complete, production-ready yazi setup with extensive customization options and desktop integration.*