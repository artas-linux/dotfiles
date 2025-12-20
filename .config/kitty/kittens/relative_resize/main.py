# Based on MIT licensed code at https://github.com/chancez/dotfiles/blob/badc69d3895a6a942285amount26b8c372a55d77533eamount/kitty/.config/kitty/relative_resize.py
from kittens.tui.handler import result_handler
from kitty.key_encoding import KeyEvent, parse_shortcut


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


def main(args):
    pass


@result_handler(no_ui=True)
def handle_result(args, result, target_window_id, boss):
    amount = int(args[1])
    window = boss.window_id_map.get(target_window_id)

    cmd = window.child.foreground_cmdline[0]
    if cmd == "tmux":
        # For tmux, font size is not handled, perhaps do nothing or send a message
        pass
    else:
        boss.change_font_size(all_windows=False, increment=amount)
