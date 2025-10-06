### Directory Overview

This directory, `~/.config/mise`, contains the configuration for the [mise](https.mise.jdx.dev) tool, a fast polyglot version manager. It replaces tools like `nvm`, `pyenv`, and `asdf`. This configuration is tailored for a specific user's workflow, pre-defining tools and providing templates for various development environments.

### Key Files

*   **`config.toml`**: The main configuration file for mise. It specifies the default tools and their versions to be installed, and configures mise's behavior, such as enabling experimental features and setting the frequency of plugin updates.

*   **`templates/`**: This directory contains templates for different development environments. When a new project is initialized, these templates can be used to quickly set up the necessary tools and tasks. The available templates are:
    *   `go.toml`: For Go projects.
    *   `node.toml`: For Node.js projects (using pnpm).
    *   `python-poetry.toml`: For Python projects using Poetry.
    *   `python-uv.toml`: For Python projects using uv.
    *   `rust.toml`: For Rust projects.

### Usage

This configuration is used by the `mise` command-line tool. When you run `mise` in a directory, it will look for a `.mise.toml` file (or `.tool-versions`) and use the configuration in this directory to determine which tools and versions to use.

The templates can be used to create a new `.mise.toml` file in a project directory. For example, to use the Node.js template, you could copy the contents of `templates/node.toml` to a `.mise.toml` file in your project.
