### Directory Overview

This directory, `~/.config`, contains the configuration files for a highly customized Arch Linux desktop environment. The setup is centered around the [Hyprland](https://hyprland.org/) Wayland compositor, with a strong focus on a keyboard-driven workflow, extensive customization, and a consistent [Catppuccin](https://github.com/catppuccin) theme.

The configuration is managed as a dotfiles repository, as indicated by the presence of `.github` directories in many of the subdirectories.

### Key Applications and Configuration

*   **Window Manager:** [Hyprland](https://hyprland.org/) is the core of the desktop environment. The configuration is modular, with the main `hyprland.conf` sourcing files from the `configs/` and `theme/` directories. Keybindings are defined in `configs/binds.conf` and are centered around the `SUPER` key.
*   **Status Bar:** [Waybar](https://github.com/Alexays/Waybar) provides the status bar. The configuration is in the `waybar/` directory, with `config.jsonc` loading the main bar layout and `style.css` defining the Catppuccin-based theme. The bar includes modules for system monitoring, workspaces, and notifications.
*   **Shell:** [Fish](https://fishshell.com/) is the user's shell. The configuration is in the `fish/` directory, with `config.fish` setting up `mise` for environment management and `atuin` for shell history.
*   **Editor:** [Neovim](https://neovim.io/) is the primary text editor. The configuration is in the `nvim/` directory and uses [LazyVim](https://www.lazyvim.org/), a popular Neovim distribution. The main entry point is `init.lua`, which bootstraps the LazyVim configuration.
*   **Terminal:** [Kitty](https://sw.kovidgoyal.net/kitty/) is the terminal emulator. The configuration is in the `kitty/` directory.
*   **Application Launcher:** [Rofi](https://github.com/davatorium/rofi) is used as an application launcher and for other menus. The configuration is in the `rofi/` directory.

### Philosophy and Goals

This dotfiles setup reflects a desire for a highly personalized and efficient desktop environment. The key goals of this configuration appear to be:

*   **Aesthetics:** A consistent and visually appealing Catppuccin theme is used across all applications.
*   **Efficiency:** The keyboard-driven workflow, tiling window manager, and custom scripts are all designed to maximize efficiency.
*   **Modularity:** The configuration is broken down into smaller, more manageable files, making it easier to maintain and customize.
*   **Portability:** The use of a dotfiles repository and tools like `mise` suggests that the user wants to be able to easily replicate this environment on different machines.

### Usage

These dotfiles are intended to be managed with a dotfile manager like `yadm` or `stow`. To use this configuration, the `~/.config` directory should be populated with the contents of this repository. After that, the various applications will automatically pick up their respective configurations.
