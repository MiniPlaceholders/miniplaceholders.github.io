---
title: ForwardingAudience Support
sidebar_label: 'ForwardingAudience Support'
sidebar_position: 7
---

There are some cases where it is necessary to use Audience Wrappers, especially in the case of cross-platform plugins.

For this reason, MiniPlaceholders supports Audience wrappers that implement the ForwardingAudience.Single interface.

```java
public record AudienceWrapper(Player player) implements ForwardingAudience.Single {
    @Override
    public Audience audience() {
        return this.player;
    }
}
```

For example, here we create a wrapper that contains a player. In a real situation, this class would have much more logic, but for this example, we will create a basic wrapper.

Having created the wrapper, we can also use it to obtain placeholders for the player contained within the wrapper.

```java
final Player player = event.getPlayer();
final AudienceWrapper wrapperAudience = new AudienceWrapper(player);
final TagResolver resolver = MiniPlaceholders.audiencePlaceholders();
final Component parsedMessage = MiniMessage.miniMessage().deserialize("Player Name: <player_name>", wrapperAudience, resolver);
```

Note that this will only work if the expansion that will provide the placeholders correctly declares its preferred audience type.


```java
Expansion.builder("test")
    .audiencePlaceholder(Player.class, "placeholder", (player, ctx, queue) -> {
        return Tag.preProcessParsed(player.getName());
    });
```

To use this feature, you can refer to plugins that already use this feature continuously, such as [CarbonChat](https://github.com/Hexaoxide/Carbon).
