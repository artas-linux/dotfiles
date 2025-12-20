#!/usr/bin/env bash

# Robust yazi wrapper for xdg-desktop-portal-termfilechooser
# Improved version with better error handling, dependency checks, and flexibility

set -euo pipefail  # Exit on error, undefined vars, pipe failures

# Configuration
readonly CMD="${YAZI_CMD:-yazi}"
readonly TERMCMD="${TERMCMD:-kitty}"
readonly LAST_SELECTED_CFG="${XDG_CONFIG_HOME:-$HOME/.config}/xdg-desktop-portal-termfilechooser/.last_selected"
readonly CFG_DIR="$(dirname "$LAST_SELECTED_CFG")"

# Dependency checks
check_dependency() {
    local cmd="$1"
    if ! command -v "$cmd" >/dev/null 2>&1; then
        echo "Error: $cmd is not installed or not in PATH." >&2
        exit 1
    fi
}

check_dependency "$CMD"
check_dependency "$TERMCMD"

# Create config directory
mkdir -p "$CFG_DIR"

# Initialize last selected path file
if [[ ! -f "$LAST_SELECTED_CFG" ]]; then
    echo "$HOME" > "$LAST_SELECTED_CFG"
fi

# Check arguments
if [[ $# -ne 5 ]]; then
    echo "Usage: $0 <multiple> <directory> <save> <path> <out>" >&2
    echo "  multiple: 1 for multiple files, 0 otherwise" >&2
    echo "  directory: 1 for directory selection, 0 otherwise" >&2
    echo "  save: 1 for save mode, 0 for open mode" >&2
    echo "  path: suggested path or empty" >&2
    echo "  out: output file for results" >&2
    exit 1
fi

# Read inputs
readonly MULTIPLE="$1"
readonly DIRECTORY="$2"
readonly SAVE="$3"
readonly PATH_ARG="$4"
readonly OUT="$5"

# Get last selected path
LAST_SELECTED="$(head -n 1 < "$LAST_SELECTED_CFG" 2>/dev/null || echo "$HOME")"

# Determine starting path
START_PATH="$PATH_ARG"
if [[ -z "$START_PATH" ]]; then
    START_PATH="$HOME"
elif [[ "$SAVE" = "0" && -d "$LAST_SELECTED" ]]; then
    START_PATH="$LAST_SELECTED"
fi

# Ensure start path exists
if [[ ! -d "$START_PATH" ]]; then
    START_PATH="$HOME"
fi

# Build yazi arguments
ARGS=()

if [[ "$SAVE" = "1" ]]; then
    # Save/download mode: create a temporary file with instructions
    TEMP_FILE="$(mktemp --tmpdir="${START_PATH:-$HOME}" yazi-save-XXXXXX)"
    cat > "$TEMP_FILE" << 'EOF'
xdg-desktop-portal-termfilechooser - Save File

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!                 === WARNING! ===                 !!!
!!! The contents of *whatever* file you open last in !!!
!!! yazi will be *overwritten*!                    !!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Instructions:
1) Navigate to the desired save location
2) Rename the file if needed (currently: REPLACE_ME)
3) Confirm by opening the file (press Enter)

Notes:
- This temporary file will be replaced with your actual content
- If you quit without opening a file, the save is cancelled
- You can delete this file and choose another to overwrite
EOF

    ARGS+=(--chooser-file="$OUT" --cwd-file="$LAST_SELECTED_CFG" "$TEMP_FILE")
elif [[ "$DIRECTORY" = "1" ]]; then
    # Directory selection
    ARGS+=(--cwd-file="$OUT" "$START_PATH")
else
    # File selection (single or multiple)
    ARGS+=(--chooser-file="$OUT" --cwd-file="$LAST_SELECTED_CFG" "$START_PATH")
fi

# Launch yazi in terminal
$TERMCMD -- $CMD "${ARGS[@]}"

# Post-processing
if [[ "$SAVE" = "0" && "$DIRECTORY" = "1" && -s "$OUT" ]]; then
    # Save last selected path for directory operations
    head -n 1 < "$OUT" > "$LAST_SELECTED_CFG"
fi

# Clean up temp file if save was cancelled
if [[ "$SAVE" = "1" && ! -s "$OUT" && -f "$TEMP_FILE" ]]; then
    rm -f "$TEMP_FILE"
fi

# Validate output
if [[ "$SAVE" = "1" && -s "$OUT" ]]; then
    # For save operations, ensure the selected file exists
    SELECTED_FILE="$(head -n 1 < "$OUT" 2>/dev/null)"
    if [[ ! -f "$SELECTED_FILE" ]]; then
        echo "Error: Selected file does not exist" >&2
        exit 1
    fi
fi