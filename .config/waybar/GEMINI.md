### Directory Overview

This directory contains the configuration files for Waybar, a highly customizable Wayland status bar. The configuration is modular, with separate files for the main bar, different bar layouts, individual modules, and styling. This allows for easy customization and management of the Waybar setup.

### Key Files

*   `config.jsonc`: The main configuration file that loads a specific bar layout from the `bars` directory.
*   `style.css`: The stylesheet that defines the appearance of the Waybar and its modules. It uses a custom color palette and has styles for various modules and their states.
*   `bars/`: This directory contains different bar layouts. Each file in this directory defines which modules are included and their position on the bar.
*   `modules/`: This directory contains the configuration for individual Waybar modules. Each file defines the behavior and appearance of a specific module, such as the CPU monitor, clock, or workspace indicator.
*   `scripts/`: This directory contains helper scripts that are used by some of the Waybar modules. For example, the `cava.sh` script is used to create a custom audio visualizer.

### Usage

This directory is used to configure the Waybar status bar. To use this configuration, you need to have Waybar installed and then tell it to use the `config.jsonc` file in this directory. The configuration is highly modular, so you can easily customize it by editing the files in the `modules` and `bars` directories. You can also change the appearance of the bar by editing the `style.css` file.
