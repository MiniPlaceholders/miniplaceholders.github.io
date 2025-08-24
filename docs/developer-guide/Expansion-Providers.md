---
sidebar_label: 'Expansion Providers'
sidebar_position: 4
---

Starting with MiniPlaceholders v3, Expansion Providers were implemented, a type of independent project that is capable of loading an expansion without the need for a platform initializer. In other words, from now on, expansions should not be created as plugins or mods, but as an Expansion Provider.

## How to create an Expansion Provider

First, you must create a file called `expansion-provider.properties` with the property of your main class name.

```properties
provider-class=io.github.miniplaceholders.expansion.example.ExampleExpansionProvider
```

## How to implement an Expansion Provider

The class you have assigned in the file must implement the ExpansionProvider interface and implement its methods.

```JAVA
package io.github.miniplaceholders.expansion.example;

import io.github.miniplaceholders.api.Expansion;
import io.github.miniplaceholders.api.provider.ExpansionProvider;
import io.github.miniplaceholders.api.provider.LoadRequirement;
import net.kyori.adventure.text.minimessage.tag.Tag;

public final class ExampleExpansionProvider implements ExpansionProvider {

    @Override
    public Expansion provideExpansion() {
        return Expansion.builder("example")
                .author("MiniPlaceholders Contributors")
                .version("1.0.0")
                .globalPlaceholder("some_placeholder", (queue, ctx) -> {
                    return Tag.preProcessParsed("Helloooooooo");
                }).build();
    }

    @Override
    public LoadRequirement loadRequirement() {
        return LoadRequirement.platform(Platform.PAPER);
    }
}

```

In the provideExpansion() method, you must return your Expansion.
In the loadRequirement() method, you must return the requirements that must be met for your Expansion to load. If there are no requirements, you can use LoadRequirement.none(), while if there are multiple requirements, you can join them with LoadRequirement.allOf().

:::warning

> Remember **not** to register your expansion before returning it in the provideExpansion method.

:::

For an example of an expansion that has already been created, you can check out the [Template expansion](https://github.com/MiniPlaceholders/Template-Expansion). You can also use it as a base for your next expansion!

## Advanced Usage

There are certain cases in which you may need the server instance of each platform or the MiniPlaceholders plugin instance, either to register a messaging channel plugin, obtain instances from other projects, or for other reasons.

For this reason, MiniPlaceholders v3 implemented a basic injection system, through which you can obtain the server instance on which MiniPlaceholders is running or the MiniPlaceholders initializer itself.

```JAVA
package io.github.miniplaceholders.expansion.example;

import io.github.miniplaceholders.api.Expansion;
import io.github.miniplaceholders.api.provider.ExpansionProvider;
import io.github.miniplaceholders.api.provider.LoadRequirement;
import io.github.miniplaceholders.api.provider.PlatformData;
import net.kyori.adventure.text.minimessage.tag.Tag;
import team.unnamed.inject.Inject;

public final class ExampleExpansionProvider implements ExpansionProvider {
    // For a better experience for developers who are unfamiliar with injection,
    // dependency injection is performed exclusively by fields.
    // Objects cannot be injected through the constructor, which must be empty.
    @Inject
    private PlatformData platformData;

    @Override
    public Expansion provideExpansion() {
        // In Paper it will be org.bukkit.Server,
        // in Velocity it will be com.velocitypowered.api.proxy.ProxyServer,
        // in Sponge it will be org.spongepowered.api.Server,
        // and in Fabric it will be net.minecraft.server.MinecraftServer.
        final Object serverInstance = platformData.serverInstance();
        // In Paper it will be org.bukkit.plugin.java.JavaPlugin,
        // in Velocity it will be io.github.miniplaceholders.velocity.VelocityPlugin,
        // in Sponge it will be io.github.miniplaceholders.sponge.SpongePlugin,
        // and in Fabric it will be net.fabricmc.api.ModInitializer.
        final Object complementInstance = platformData.complementInstance();

        return Expansion.builder("example")
                .author("MiniPlaceholders Contributors")
                .version("1.0.0")
                .globalPlaceholder("some_placeholder", (queue, ctx) -> {
                    return Tag.preProcessParsed("Helloooooooo");
                }).build();
    }

    @Override
    public LoadRequirement loadRequirement() {
        return LoadRequirement.platform(Platform.PAPER);
    }
}

```

:::warning

Due to the injection process, you should not include any classes that cannot be present at runtime in your class that implements ExpansionProvider, for example, in expansions that obtain information from other plugins that will be filtered with the loadRequirement() method. Try to delegate these cases to a separate static class from your Expansion.

:::
