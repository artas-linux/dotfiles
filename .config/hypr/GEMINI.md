# Directory Overview

This directory, `~/.config/hypr`, contains the configuration files for the [Hyprland](https://hyprland.org/) Wayland compositor and its ecosystem. It's a highly customized, modular setup that separates different aspects of the configuration into dedicated files and directories. The visual theme is based on [Catppuccin](https://github.com/catppuccin).

The configuration is structured to be managed as a dotfiles repository, as indicated by the presence of a `.github` directory.

## Key Files and Directories

### Main Configuration Files

-   `hyprland.conf`: The main entry point for the Hyprland configuration. It sources all other configuration files from the `configs/` and `theme/` directories. It also defines the applications and services to be started automatically.
-   `hypridle.conf`: Configures `hypridle`, the idle management daemon. It defines actions for timeouts, such as locking the screen or suspending the system.
-   `hyprlock.conf`: Configures `hyprlock`, the screen locker. It defines the appearance of the lock screen, including the background, password field, and informational labels like the time and current song.
-   `hyprpaper.conf`: Configures `hyprpaper`, the wallpaper daemon.
-   `pyprland.toml`: Configures `pyprland`, a plugin manager and IPC tool for Hyprland. It's used here to manage scratchpads (e.g., for volume control, bluetooth) and other plugins like a magnifier.

### `configs/` Directory

This directory contains the core functional configuration for Hyprland.

-   `binds.conf`: Defines all keybindings and mouse bindings for controlling windows, workspaces, applications, and system media/brightness.
-   `env.conf`: Sets environment variables required for Wayland, Qt/GTK theming, and cursor themes.
-   `input.conf`: Configures input devices like keyboards and touchpads, including layout, repeat rate, and touchpad settings.
-   `misc.conf`: Contains miscellaneous settings for general behavior, window animations, xwayland, and layout options (dwindle).
-   `monitors.conf`: Defines the monitor setup, including resolution, refresh rate, position, and scale.
-   `workspaces.conf`: Defines workspaces and assigns them to specific monitors.
-   `plugins.conf`: Manages Hyprland plugins, although most appear to be commented out.

### `theme/` Directory

This directory contains the aesthetic configuration.

-   `theme.conf`: The main entry point for the theme, sourcing animations, rules, and decoration files.
-   `animations.conf`: Defines window and workspace animations.
-p-   `colors.conf`: (Referenced in `hyprlock.conf`) Contains the Catppuccin color palette definitions.
-   `decoration.conf`: Configures window decorations like rounding, shadows, and borders.
-   `rules.conf`: Contains window rules (`windowrulev2`) to apply specific settings (e.g., floating, size, opacity) to certain applications.
-   `walls/`: A large collection of wallpapers.

### `scripts/` Directory

This directory contains various shell scripts that are executed via keybindings or at startup to perform specific actions.

-   `autostart/`: Scripts to launch services and applications when Hyprland starts.
-   `launch_app`: A script to launch applications.
-   `random_wallpaper`: A script to set a random wallpaper.
-   `color_picker`: A script for picking colors on the screen.
-   And many others for screenshots, managing floating windows, etc.

## Usage

These files collectively define the user's desktop environment on Hyprland. To use this configuration, the `~/.config/hypr` directory should be populated with these files. Hyprland will automatically load `hyprland.conf` on startup.

Any modifications to the behavior, keybindings, or appearance of the desktop environment should be made within the corresponding files in this directory structure. After making changes, Hyprland typically needs to be reloaded (often with a keybinding like `SUPER + R`) for them to take effect.
