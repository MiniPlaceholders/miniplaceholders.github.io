---
sidebar_label: 'Mod Development'
sidebar_position: 6
---

If you are developing a Fabric mod and want to register placeholders or use placeholders from other plugins, there are a few extra steps to consider

## Dependency

MiniPlaceholders relies on the Adventure MiniMessage API to get its placeholders and requires valid Audiences for it, so you must rely on Adventure-Platform-Fabric so that player, console and even entities objects can inherit from the Audience interface at compile time and can be used in conjunction with the MiniPlaceholders API.

If your project does not fully depend on Adventure-Platform-Fabric or MiniPlaceholders, you can avoid including it in your final jar by avoiding using an include when declaring your dependencies

```kotlin
dependencies {
  compileOnly("io.github.miniplaceholders:miniplaceholders-api:3.0.0")
  modImplementation("net.kyori:adventure-platform-fabric:6.6.0")
  // In case your mod optionally depends on MiniPlaceholders and does not necessarily require this dependency,
  // you can avoid including it in your final jar by removing this line
  include("net.kyori:adventure-platform-fabric:5.8.0")
}

```
