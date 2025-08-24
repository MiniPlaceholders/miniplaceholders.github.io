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

Allows you to preview how text would be displayed to the player by applying global and audience placeholders, providing the specific audience. If the “me” argument is used, the audience provided will be the executor of the command, whether it is an OP player or the console, and if the name of a connected player is used, that player will be used in the context.

### Expansions SubCommand

- `/miniplaceholders expansions`

Allows you to review currently installed expansions and their information.

### Help SubCommand

- `/miniplaceholders expansions`

It shows you all the available subcommands and how to use them.
