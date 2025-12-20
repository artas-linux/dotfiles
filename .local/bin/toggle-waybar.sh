#!/usr/bin/env bash
# toggle-waybar.sh
# Toggles waybar process: starts if not running, kills if running.
# Also changes gaps_out in hyprland config via hyprctl keyword.

set -u

# ------------------------ Settings ------------------------
WAYBAR_CMD='waybar'
PIDFILE="${XDG_RUNTIME_DIR:-$HOME/.cache}/waybar-autohide.pid"
# -----------------------------------------------------------

user_name=$(id -un)

log() { printf '[%s] %s\n' "$(date +'%H:%M:%S')" "$*" >&2; }

start_waybar() {
    log "Starting waybar..."
    setsid bash -c "$WAYBAR_CMD" >/dev/null 2>&1 &
    sleep 0.2
    pid=$(pgrep -u "$user_name" -n -x waybar || true)
    if [ -n "$pid" ]; then
        echo "$pid" > "$PIDFILE"
        chmod 600 "$PIDFILE" 2>/dev/null || true
        log "waybar started (PID $pid)"
        # set gaps_out for mode with bar
        hyprctl keyword general:gaps_out "8, 15, 15, 15" >/dev/null 2>&1 || true
    else
        log "Could not find waybar process after start"
    fi
}

stop_waybar() {
    # set gaps_out for mode without bar
    hyprctl keyword general:gaps_out "15, 15, 15, 15" >/dev/null 2>&1 || true

    if [ -f "$PIDFILE" ]; then
        pid=$(cat "$PIDFILE" 2>/dev/null || true)
        if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
            log "Stopping waybar (PID $pid)"
            kill "$pid" || true
            sleep 0.2
            if kill -0 "$pid" 2>/dev/null; then
                log "Force killing waybar (kill -9)"
                kill -9 "$pid" 2>/dev/null || true
            fi
        fi
        rm -f "$PIDFILE" 2>/dev/null || true
    else
        log "Stopping all waybar processes for user $user_name"
        pkill -u "$user_name" -x waybar 2>/dev/null || true
    fi
}

# ------------------ Main logic ------------------
if pgrep -u "$user_name" -x waybar >/dev/null 2>&1; then
    stop_waybar
else
    start_waybar
fi