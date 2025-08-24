---
sidebar_label: 'Project Integration'
sidebar_position: 3
---

This guide will teach you how to use the MiniPlaceholders API in your plugins or mods to parse placeholders from other projects.

## Obtaining Placeholders

You can get the required plugin/mod placeholders whenever you want, from the methods located in the main `MiniPlaceholders` class

### Global

```java
TagResolver resolver = MiniPlaceholders.globalPlaceholders();

Component parsedMessage = MiniMessage.miniMessage().deserialize("Online Players: <proxy_online_players>", resolver);
```

:::note

Starting with MiniPlaceholders v3, the returned TagResolvers do not depend on an Audience or a RelationalAudience. This was done to modernize the API, improve placeholder processing performance, and avoid potential issues when caching TagResolvers.

:::

### Audience
```java
Player player = event.getPlayer();

TagResolver resolver = MiniPlaceholders.audiencePlaceholders();

Component parsedMessage = MiniMessage.miniMessage().deserialize("Player name: <player_name>", player, resolver);
```

### Relational

```java
Player mainPlayer = event.getPlayer();
Player playerTwo = event.getAttacker();

TagResolver resolver = MiniPlaceholders.relationalPlaceholders();

Component parsedMessage = MiniMessage.miniMessage().deserialize("Player name: <player_name> Attacker Name: <example_war_plugin_rel_attacker_name>", new RelationalAudience<>(mainPlayer, playerTwo), resolver);
```

## Single Expansion usage
You can also use unregistered Expansions to obtain placeholders. This can be useful for example, for an internal expansion of your plugin.


```java
Expansion expansion = Expansion.builder("internal")
    .globalPlaceholder("sum", (queue, ctx) -> {
        int sum = 0;
        while (queue.hasNext()) {
          sum += queue.pop().asInt().orElse(0);
        }
        return Tag.selfClosingInserting(Component.text(sum));
    })
    .build();

Component parsed = MiniMessage.miniMessage().deserialize("Sum of several numbers: <internal_sum:1:2:3:4:10:50>", expansion.globalPlaceholders());

assert PlainTextComponentSerializer.plainText().serialize(parsed).equals("Sum of several numbers: 70");

```