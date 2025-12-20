#!/bin/bash
# Simple GPU usage script for Waybar
radeontop -d - -l 1 | grep -o 'gpu [0-9]\+\.[0-9]\+%' | cut -d' ' -f2