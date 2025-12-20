source ~/.config/fish/user_variables.fish
source ~/.config/fish/abbreviations.fish
source ~/.config/fish/plugins/fzf.fish/conf.d/fzf.fish

set -g USERNAME archbtw

# opencode
fish_add_path /home/archbtw/.opencode/bin

# mise
mise activate fish | source
fish_add_path /home/archbtw/.local/share/mise/shims
export QT_STYLE_OVERRIDE=kvantum
