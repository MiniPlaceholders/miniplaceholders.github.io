---
title: Expansion Creation
sidebar_label: 'Expansion Creation'
sidebar_position: 2
---

:::info

If you are looking for how to create a standalone jar for your expansion, check out how to create an [Expansion Provider](docs/developer-guide/Expansion-Providers.md) first.

:::

To create an Expansion, you must create an Expansion.Builder

```ts
Expansion.Builder builder = Expansion.builder("example");
```

The `Expansion#builder` method receives a String argument, this will be the name of the expansion, which will be used to name the placeholders, for example: `<example_name>`, `<example_online_players>`, etc

## Placeholders Creation

In each placeholder registration method you are provided with [ArgumentQueue](https://jd.advntr.dev/text-minimessage/4.24.0/net/kyori/adventure/text/minimessage/tag/resolver/ArgumentQueue.html) and [Context](https://jd.advntr.dev/text-minimessage/4.24.0/net/kyori/adventure/text/minimessage/Context.html) arguments that come from [MiniMessage](https://docs.adventure.kyori.net/minimessage/api.html#handling-arguments). This is so that you can make powerful placeholders that support arguments

In each placeholder registration method, you have to return a Tag with the required component modification, see the [MiniMessage documentation for more information](https://docs.adventure.kyori.net/minimessage/api.html#tags)

### Global Placeholder

In MiniPlaceholders you can create global placeholders, which can be called without the need for an Audience argument

```java
// example placeholder name: `<example_online_players>`
builder.globalPlaceholder("online_players", (queue, ctx) -> {
    // calculate stuff

    // At the end you must return a Tag according to the information you have computed    
    // For example, this is an empty Tag that inserts an empty component
    return Tags.EMPTY_TAG;
});
```



### Audience Placeholder


```java
// example placeholder name: `<example_player_name>`
builder.audiencePlaceholder("player_name", (audience, queue, ctx) -> {
    // calculate stuff

    // At the end you must return a Tag according to the information you have computed    
    // For example, this is an empty Tag that inserts an empty component
    return Tags.EMPTY_TAG;
});
```

### Relational Placeholder


```java
// example placeholder name: `<example_rel_are_enemies>`
builder.relationalPlaceholder("are_enemies", (audience, otherAudience, queue, ctx) -> {
    // calculate stuff

    // At the end you must return a Tag according to the information you have computed    
    // For example, this is an empty Tag that inserts an empty component
    return Tags.EMPTY_TAG;
});
```

### Filters
When creating placeholders, you have the ability to add a filter to configure what type of audience can process your placeholder.

Unlike MiniPlaceholders v2, you are not provided with an audience filter that can be applied to the audiences to be processed. Instead, you are provided with a type-safe and more efficient experience.

```ts
builder.audiencePlaceholder(Player.class, "example_placeholder", (Player player, ArgumentQueue queue, Context ctx) -> null);
```

It will only filter with the existing filters, if the class filter is null, it will only filter by the Predicate, and if both are null, no audience filtering will be performed

### Expansion Registration

:::warning

**If you are using a [Expansion Provider](docs/developer-guide/Expansion-Providers.md), this process is performed by MiniPlaceholders itself when loading the expansion, so you can skip this section.**

:::

You can register the expansion for use in MiniPlaceholders main class static methods.

You need to create the expansion first. This expansion can be used [Standalone](https://github.com/4drian3d/MiniPlaceholders/wiki/Integration#single-expansion-usage)

```ts
// Expansion creation
Expansion expansion = builder.build();

// Here you can register the expansion
expansion.register();
```