---
title: MiniMessage API Usage
sidebar_label: 'MiniMessage Integration'
sidebar_position: 5
---

MiniPlaceholders is a plugin that is completely based on the MiniMessage API. Therefore, to get the placeholders and to create expansions you need to have a basic knowledge.
Here I will try to explain you in the best way how these APIs are related.

## TagResolver

When you obtain the placeholders of a respective type, you will get an object of the TagResolver type. This object is capable of providing a Tag from a text or null if it does not correspond.

```java
final TagResolver resolver = MiniPlaceholders.globalPlaceholders();
```

It is recommended not to use TagResolver directly, but to delegate its use to MiniMessage parsing as appropriate.

```java
final MiniMessage miniMessage = MiniMessage.miniMessage();
final Component component = miniMessage.deserialize("some string with placeholders", resolver);
```

## Tags

A Tag is an object to be inserted in the final component resulting from the parse of a TagResolver. This object determines how it will be inserted and how it will relate to other placeholders. There are several types of Tags that allow you to either directly insert a component without affecting other placeholders, or allow the result to be used as an argument in other placeholders.

### PreProcessParsed

This tag inserts a string directly into the MiniMessage parse, allowing it to be used as an argument within other placeholders.

```java
return Tag.preProcessParsed("some content");
```

:::note[Recommended Usage]

```java
String string = "<expansion_argumentprocessing_placeholder:<expansion_preprocessparsed_placeholder>>";
```

:::

### SelfClosingInserting

This tag inserts a component directly into the main component, so it will not inherit its style to other components nor can it be used as an argument in another placeholder

```java
return Tag.selfClosingInserting(Component.text("Hi"));
```

### Inserting

This tag inserts a component and passes its attributes to the other characters until the tag is closed.

```java
return Tag.inserting(Component.text("Hi", NamedTextColor.RED));
```
:::note[Recommended Usage]

```java
// In this example, the placeholder player_prefix would use an inserting tag,
// which would inherit the formatting to the following characters until a <reset> is done or the </player_prefix> tag is closed
String string = "<player_prefix><player_name><gray>:<reset> <message>"
```

:::

### Styling

This tag applies formatting to the following characters until it is closed

```java
return Tag.styling(NamedTextColor.AQUA);
```


:::note[Recommended Usage]

```java
String string = "<player_prefix><player_name><gray>: <player_chat_color><message>";
```

:::

## ArgumentQueue

The ArgumentQueue object allows you to get the arguments of the placeholder. The player can enter as many arguments as he wants, but you have the ability to specify whether a specific number of arguments is required.

For example, you have a placeholder that does a sum with all the numbers provided in placeholders:

```java
builder.globalPlaceholder("queue_example", (Context context, ArgumentQueue argumentQueue) -> {
  int sum = 0;
  while (queue.hasNext()) {
    sum += queue.pop().asInt().orElse(0);
  }

  return Tag.preProcessParsed(Integer.toString(sum));
});
```

In this example, it is iterating through all available arguments, and in case they are numbers, they will be added to the count. By using a while, we ensure that we iterate through all the elements, and if there are no arguments, nothing is added.

## Context
The Context object gives you information about the current TagResolvers parse context, so, here you can have access to all the TagResolvers applied in the execution, in case you want to parse by yourself a text according to the current TagResolvers.

For example, note that the user provides an argument with a legacy string (&) that he wants to be converted into a component, but also includes a placeholder with his username.

```java
builder.globalPlaceholder("context_example", (Context context, ArgumentQueue argumentQueue) -> {
  String argument = argumentQueue.popOr("Error: argument not provided");
  // The LegacyStrings#parsePossibleLegacy method converts the text to minimessage format and, using the context, applies the corresponding placeholders.
  return Tag.selfClosingInserting(LegacyStrings.parsePossibleLegacy(argument, context));
});
```