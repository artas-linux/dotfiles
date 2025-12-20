source ~/.config/fish/abbreviations.fish
set -g USERNAME archbtw

# opencode
fish_add_path /home/archbtw/.opencode/bin

# mise
mise activate fish | source
fish_add_path /home/archbtw/.local/share/mise/shims
export QT_STYLE_OVERRIDE=kvantum
