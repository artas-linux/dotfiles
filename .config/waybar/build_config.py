import json
import os

# Load the bar config
with open("bars/bar-1.jsonc", "r") as f:
    config = json.load(f)

# Get includes
includes = config.pop("include")

# Load each module
for inc in includes:
    path = os.path.expanduser(inc)
    with open(path, "r") as f:
        module = json.load(f)
    config.update(module)

# Add bar properties
config.update(
    {
        "height": 48,
        "layer": "top",
        "output": "DP-1",
        "mode": "dock",
        "exclusive": True,
        "passthrough": False,
        "gtk-layer-shell": True,
        "margin-top": 5,
        "margin-left": 5,
        "margin-bottom": 0,
        "margin-right": 5,
    }
)

# Write to config.jsonc
with open("config.jsonc", "w") as f:
    json.dump(config, f, indent=2)
