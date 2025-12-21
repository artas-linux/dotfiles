-- This file is executed when Yazi starts up.
-- Configuration and startup commands can be added here.

-- Override the create function to handle new file creation properly
require("file").create = function()
	local name = ya.input({
		title = "Name:",
		position = { "top-center", 1 },
		size = { "80%", 1 },
	})
	if not name or name == "" then
		return
	end

	local path = ya.target():parent() / name
	if path:is_dir() then
		ya.manager_emit("cd", { target = path })
	else
		ya.write(path, "")
		ya.manager_emit("refresh", {})
	end
end

-- Override the create directory function
require("file").create_dir = function()
	local name = ya.input({
		title = "Name:",
		position = { "top-center", 1 },
		size = { "80%", 1 },
	})
	if not name or name == "" then
		return
	end

	local path = ya.target():parent() / name
	ya.mkdir(path, { recursive = true })
	ya.manager_emit("refresh", {})
end
