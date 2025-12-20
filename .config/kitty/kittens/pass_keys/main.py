import re

from kittens.tui.handler import result_handler
from kitty.key_encoding import KeyEvent, parse_shortcut
from kitty_utils import relative_resize_window


def is_window_vim(window, vim_id):
    from kittens.tui.loop import debug

    debug(vim_id)
    fp = window.child.foreground_processes
    return any(
        re.search(vim_id, p["cmdline"][0] if len(p["cmdline"]) else "", re.I)
        for p in fp
    )


def encode_key_mapping(window, key_mapping):
    mods, key = parse_shortcut(key_mapping)
    event = KeyEvent(
        mods=mods,
        key=key,
        shift=bool(mods & 1),
        alt=bool(mods & 2),
        ctrl=bool(mods & 4),
        super=bool(mods & 8),
        hyper=bool(mods & 16),
        meta=bool(mods & 32),
    ).as_window_system_event()

    return window.encoded_key(event)


def main():
    pass


@result_handler(no_ui=True)
def handle_result(args, result, target_window_id, boss):
    window = boss.window_id_map.get(target_window_id)

    if window is None:
        return

    # Handle pass_keys action (vim/tmux key passing)
    if len(args) >= 3 and args[1] in ["vim", "tmux"]:
        vim_id = args[1]  # "vim" or "tmux"
        key_mapping = args[2]  # "C-t", "C-v", etc.

        if is_window_vim(window, vim_id):
            # Pass the key through to vim/tmux
            encoded = encode_key_mapping(window, key_mapping)
            window.write_to_child(encoded)
        else:
            # If not in vim/tmux, do nothing (or could fall back to Kitty action)
            pass

    # Handle other actions (neighboring_window, relative_resize)
    elif len(args) >= 4:
        action = args[1]
        direction = args[2]
        key_mapping = args[3] if action == "neighboring_window" else args[4]
        amount = int(args[3]) if action == "relative_resize" else None
        vim_id_idx = 4 if action == "neighboring_window" else 5
        vim_id = args[vim_id_idx] if len(args) > vim_id_idx else "n?vim"

        if is_window_vim(window, vim_id):
            for keymap in key_mapping.split(">"):
                encoded = encode_key_mapping(window, keymap)
                window.write_to_child(encoded)
        elif action == "neighboring_window":
            boss.active_tab.neighboring_window(direction)
        elif action == "relative_resize":
            relative_resize_window(direction, amount, target_window_id, boss)
