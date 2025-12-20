#!/usr/bin/env bash

# Enable logging for debugging
LOG="/tmp/yazi-wrapper.log"
echo "--- New Instance ---" >> "$LOG"
echo "Args: $@" >> "$LOG"

multiple="$1"
directory="$2"
save="$3"
path="$4"
out="$5"

# Validate output file path
if [ -z "$out" ]; then
    echo "Error: No output file specified" >> "$LOG"
    exit 1
fi

# Default to home if path is invalid
if [ -z "$path" ] || [ ! -e "$path" ]; then
    path="$HOME"
fi

# Build Yazi arguments
# We start with the path
args=("$path")

# Add chooser file argument
args+=("--chooser-file=$out")

echo "Running: yazi ${args[*]}" >> "$LOG"

# Run Yazi
yazi "${args[@]}"

exit_code=$?
echo "Exit code: $exit_code" >> "$LOG"

if [ -f "$out" ]; then
    echo "Selected files:" >> "$LOG"
    cat "$out" >> "$LOG"
else
    echo "No output file created" >> "$LOG"
fi

exit $exit_code
