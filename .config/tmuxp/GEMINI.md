### Directory Overview

This directory contains configuration files for `tmuxp`, a tmux session manager. These configurations define various development and productivity environments, each tailored for a specific task. The sessions are designed to be launched from anywhere, providing a consistent and efficient workflow.

### Key Files

*   **`default.yaml`**: A general-purpose session that opens Neovim.
*   **`mail.yaml`**: A session for managing email with `neomutt` and a separate pane for handling attachments in the `~/downloads/mail-attachments/` directory.
*   **`notes-tasks.yaml`**: A session for productivity, with one window for taking notes in Obsidian with Neovim and another for managing tasks with `taskwarrior-tui`.
*   **`web-node.yaml`**: A session for Node.js development. It opens Neovim and a pane to run a development server using `mise run serve`.
*   **`web-static.yaml`**: A session for static web development, featuring a pane with Neovim and another with `five-server` for live-reloading.

### Usage

These `tmuxp` configurations can be loaded to quickly set up a tmux session for a specific task. To load a session, use the following command in your terminal:

```bash
tmuxp load <session_name>
```

For example, to load the mail session, you would run:

```bash
tmuxp load mail
```

The session name is defined by the `session_name` key in each `.yaml` file. If `session_name` is not specified, the filename (without the `.yaml` extension) is used as the session name.
