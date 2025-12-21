#!/usr/bin/env sh
# This wrapper script is invoked by xdg-desktop-portal-termfilechooser.
#
# For more information about input/output arguments read `xdg-desktop-portal-termfilechooser(5)`

set -e

if [ "$6" -ge 4 ]; then
    set -x
fi

# Enable logging for debugging
LOG="/tmp/yazi-wrapper.log"
echo "--- New Instance ---" >> "$LOG"
echo "Args: $@ $(date)" >> "$LOG"

multiple="$1"
directory="$2"
save="$3"
path="$4"
out="$5"

cmd="yazi"
termcmd="${TERMCMD:-kitty --title 'termfilechooser'}"

if [ "$save" = "1" ]; then
    # save a file
    set -- --chooser-file="$out" "$path"
elif [ "$directory" = "1" ]; then
    # upload files from a directory
    set -- --chooser-file="$out" --cwd-file="$out"".1" "$path"
elif [ "$multiple" = "1" ]; then
    # upload multiple files
    set -- --chooser-file="$out" "$path"
else
    # upload only 1 file
    set --chooser-file="$out" "$path"
fi

# Build the command with terminal emulator
command="$termcmd $cmd"
for arg in "$@"; do
    # escape double quotes
    escaped=$(printf "%s" "$arg" | sed 's/"/\\"/g')
    # escape special
    command="$command \"$escaped\""
done

echo "Running command: $command" >> "$LOG"
sh -c "$command"

if [ "$directory" = "1" ]; then
    if [ ! -s "$out" ] && [ -s "$out"".1" ]; then
        cat "$out"".1" > "$out"
        rm "$out"".1"
    else
        rm "$out"".1"
    fi
fi

if [ -f "$out" ]; then
    echo "Selected files:" >> "$LOG"
    cat "$out" >> "$LOG"
else
    echo "No output file created" >> "$LOG"
fi
