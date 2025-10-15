---
sidebar_label: 'Commands'
sidebar_position: 3
---

In MiniPlaceholders you are provided with a command in each platform to get the plugin information and to be able to parse the placeholders directly

In Paper, Folia, Fabric and Sponge the command is `/miniplaceholders` and in Velocity the command is `/vminiplaceholders`

## Commands

### Main Command

- `/miniplaceholders`

Displays plugin information, such as the version, contributors, and links of interest.

### Parse SubCommand

- `/miniplaceholders parse me [message]`
- `/miniplaceholders parse [some player] [message]`
- `/miniplaceholders parse --null [message]`

Allows you to preview how text would be displayed to the player by applying global and audience placeholders, providing the specific audience. If the “me” argument is used, the audience provided will be the executor of the command, whether it is an OP player or the console, and if the name of a connected player is used, that player will be used in the context.

:::info

If the `--null` argument is used, no audience placeholders will be parsed, only global placeholders.

:::

### Parserel SubCommand

- `/miniplaceholders parserel me [some player] [message]`
- `/miniplaceholders parse [some player] me [message]`
- `/miniplaceholders parse [some player] [some player] [message]`

Like the parse argument, this command allows you to parse a string, but based on a relationship between two players using the relational placeholders available in MiniPlaceholders.
Note that it will also parse audience placeholders based on the player provided in the first argument.

### Expansions SubCommand

- `/miniplaceholders expansions`

Allows you to review currently installed expansions and their information.

### Help SubCommand

- `/miniplaceholders help`

It shows you all the available subcommands and how to use them.
