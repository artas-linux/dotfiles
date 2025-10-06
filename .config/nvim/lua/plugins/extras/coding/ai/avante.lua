return {
  {
    "yetone/avante.nvim",
    event = "VeryLazy",
    -- lazy = false,
    version = false, -- set this if you want to always pull the latest change
    opts = {
      selector = {
        ---@alias avante.SelectorProvider "native" | "fzf_lua" | "mini_pick" | "snacks" | "telescope" | fun(selector: avante.ui.Selector): nil
        provider = "snacks", -- "fzf_lua" | "mini_pick" | "snacks" | "telescope" | fun(selector: avante.ui.Selector): nil
        provider_opts = {},
      },
      -- provider = "copilot",
      provider = "ollama",
      disabled_tools = {
        -- "list_files", -- Built-in file operations
        -- "search_files",
        -- "read_file",
        -- "create_file",
        -- "rename_file",
        -- "delete_file",
        -- "create_dir",
        -- "rename_dir",
        -- "delete_dir",
        -- "bash", -- Built-in terminal access
        -- "web_search",
      },
      -- copilot = {
      --   endpoint = "https://api.githubcopilot.com",
      --   model = "claude-3.7-sonnet",
      --   proxy = nil, -- [protocol://]host[:port] Use this proxy
      --   allow_insecure = false, -- Allow insecure server connections
      --   timeout = 30000, -- Timeout in milliseconds
      --   temperature = 0,
      --   max_tokens = 20480,
      -- },
      -- vendors = {
      --   deepseek = {
      --     __inherited_from = "openai",
      --     api_key_name = "DEEPSEEK_API_KEY",
      --     endpoint = "https://api.deepseek.com",
      --     model = "deepseek-coder",
      --   },
      -- },
      providers = {
        groq_deepseek_r1 = {
          __inherited_from = "openai",
          api_key_name = "GROQ_API_KEY",
          endpoint = "https://api.groq.com/openai/v1/",
          model = "deepseek-r1-distill-llama-70b",
          reasoning_format = "hidden",
          tool_choice = "auto",
        },
        groq_llama_70 = {
          __inherited_from = "openai",
          api_key_name = "GROQ_API_KEY",
          endpoint = "https://api.groq.com/openai/v1/",
          model = "llama-3.3-70b-versatile",
          tool_choice = "auto",
        },
        ollama = {
          __inherited_from = "openai",
          api_key_name = "",
          endpoint = "http://0.0.0.0:11434/v1",
          -- model = "deepseek-r1:1.5b",
          model = "gemma3",
          disable_tools = true,
        },
        deepseek = {
          __inherited_from = "openai",
          api_key_name = "DEEPSEEK_API_KEY",
          endpoint = "https://api.deepseek.com",
          model = "deepseek-coder",
        },
        deepseekreasoner = {
          __inherited_from = "openai",
          api_key_name = "DEEPSEEK_API_KEY",
          endpoint = "https://api.deepseek.com",
          model = "deepseek-reasoner",
        },

        openrouter = {
          __inherited_from = "openai",
          endpoint = "https://openrouter.ai/api/v1",
          api_key_name = "OPENROUTER_API_KEY",
          model = "deepseek/deepseek-r1",
        },
        xai_grok4_latest = {
          __inherited_from = "openai",
          api_key_name = "XAI_API_KEY",
          endpoint = "https://api.x.ai/v1",
          model = "grok-4-latest",
          -- model = "deepseek-code",
        },
        xai_grok3_latest = {
          __inherited_from = "openai",
          api_key_name = "XAI_API_KEY",
          endpoint = "https://api.x.ai/v1",
          model = "grok-3",
          -- model = "deepseek-code",
        },
        xai_grok3_mini = {
          __inherited_from = "openai",
          api_key_name = "XAI_API_KEY",
          endpoint = "https://api.x.ai/v1",
          model = "grok-3-mini",
          -- model = "deepseek-code",
        },

        gemini25pro = {
          __inherited_from = "gemini",
          model = "gemini-2.5-pro",
          -- model = "gemini-2.5-pro-preview-05-06",
        },
        grok = {
          __inherited_from = "openai",
          -- api_key_name = "XAI_API_KEY",
          endpoint = "https://api.x.ai/v1",
          -- model = "grok-3-beta",
          model = "grok-2-latest",
          api_key_name = "GROK_API_KEY",
          max_tokens = 131072,
        },
        copilot = {
          endpoint = "https://api.githubcopilot.com",
          model = "claude-3.7-sonnet",
          proxy = nil, -- [protocol://]host[:port] Use this proxy
          allow_insecure = false, -- Allow insecure server connections
          timeout = 30000, -- Timeout in milliseconds
          extra_request_body = {
            max_tokens = 20480,
            temperature = 0,
          },
        },
      },
      -- The custom_tools type supports both a list and a function that returns a list. Using a function here prevents requiring mcphub bef
      custom_tools = function()
        -- tools = require("mcphub.extensions.avante").mcp_tool()
        return {
          require("mcphub.extensions.avante").mcp_tool(),
        }
      end,
      -- system_prompt = function()
      --   local hub = require("mcphub").get_hub_instance()
      --   return hub:get_active_servers_prompt()
      -- end,
    },
    setup = {
      system_prompt = function()
        local hub = require("mcphub").get_hub_instance()
        return hub:get_active_servers_prompt()
      end,
      -- The custom_tools type supports both a list and a function that returns a list. Using a function here prevents requiring mcphub bef
      custom_tools = function()
        -- tools = require("mcphub.extensions.avante").mcp_tool()
        return {
          require("mcphub.extensions.avante").mcp_tool(),
        }
      end,
    },
    -- if you want to build from source then do `make BUILD_FROM_SOURCE=true`
    build = "make",
    -- build = "powershell -ExecutionPolicy Bypass -File Build.ps1 -BuildFromSource false" -- for windows
    dependencies = {
      "nvim-treesitter/nvim-treesitter",
      "stevearc/dressing.nvim",
      "nvim-lua/plenary.nvim",
      "MunifTanjim/nui.nvim",
      --- The below dependencies are optional,
      "echasnovski/mini.pick", -- for file_selector provider mini.pick
      "nvim-telescope/telescope.nvim", -- for file_selector provider telescope
      "hrsh7th/nvim-cmp", -- autocompletion for avante commands and mentions
      -- "ibhagwan/fzf-lua", -- for file_selector provider fzf
      "folke/snacks.nvim", -- for input provider snacks
      "nvim-tree/nvim-web-devicons", -- or echasnovski/mini.icons
      "zbirenbaum/copilot.lua", -- for providers='copilot'
      {
        -- support for image pasting
        "HakonHarnes/img-clip.nvim",
        event = "VeryLazy",
        opts = {
          -- recommended settings
          default = {
            embed_image_as_base64 = false,
            prompt_for_file_name = false,
            drag_and_drop = {
              insert_mode = true,
            },
            -- required for Windows users
            use_absolute_path = true,
          },
        },
      },
      {
        -- Make sure to set this up properly if you have lazy=true
        "MeanderingProgrammer/render-markdown.nvim",
        opts = {
          file_types = { "markdown", "Avante" },
        },
        ft = { "markdown", "Avante" },
      },
    },
  },
}
