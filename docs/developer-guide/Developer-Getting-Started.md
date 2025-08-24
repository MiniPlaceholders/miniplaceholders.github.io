---
sidebar_label: 'Getting Started'
sidebar_position: 1
---

MiniPlaceholders is a plugin and mod that allows you to register global placeholders based on [Adventure Components](https://docs.advntr.dev/text.html) to be used in other plugin/mods instances.

Requires [Paper](https://papermc.io/software/paper) 1.21 and higher, [Velocity](https://papermc.io/software/velocity) 3.3.0 and higher, [Fabric](https://fabricmc.net/) 1.21.1+ or [Sponge](https://spongepowered.org/) API 8+.

To continue, you first need knowledge of [MiniMessage](https://docs.adventure.kyori.net/minimessage/index.html). To see how to use the MiniMessage API in MiniPlaceholders, [check this section](https://github.com/MiniPlaceholders/MiniPlaceholders/wiki/MiniMessage-API-in-MiniPlaceholders).

To use MiniPlaceholders API, you need Java 21 at least

**Remember not to shade or relocate MiniMessage, as the platforms on which MiniPlaceholders run already have MiniMessage built in.** MiniPlaceholders is only compatible with projects using native API, if you use Adventure Platform Bukkit either relocated or integrated, MiniPlaceholders will not be able to work properly

If you want a template to create your next expansion, you can use our template https://github.com/MiniPlaceholders/Template-Expansion

**This guide is updated for MiniPlaceholders v3. If you need a guide for MiniPlaceholders v2, you can view the change history on this wiki**

## API Module ![](https://img.shields.io/maven-central/v/io.github.miniplaceholders/miniplaceholders-api?style=flat-square)

[![Javadocs](https://github.com/MiniPlaceholders/MiniPlaceholders/assets/68704415/fd7a3c86-d377-48f2-8230-67f50cdf2db6)](https://javadoc.io/doc/io.github.miniplaceholders/miniplaceholders-api)


#### Gradle
```kotlin
repositories {
  mavenCentral()
}

dependencies {
  compileOnly("io.github.miniplaceholders:miniplaceholders-api:3.0.1")
}
```

#### Maven
```xml
<dependency>
    <groupId>io.github.miniplaceholders</groupId>
    <artifactId>miniplaceholders-api</artifactId>
    <version>3.0.1</version>
    <scope>provided</scope>
</dependency>
```

## Kotlin Extra ![](https://img.shields.io/maven-central/v/io.github.miniplaceholders/miniplaceholders-kotlin-ext?style=flat-square)

[![Javadocs](https://github.com/MiniPlaceholders/MiniPlaceholders/assets/68704415/fd7a3c86-d377-48f2-8230-67f50cdf2db6)](https://javadoc.io/doc/io.github.miniplaceholders/miniplaceholders-kotlin-ext)

Kotlin Extra is an API submodule that makes it easy to develop Expansions in Kotlin environments.

It can only be used in environments that provide kotlin-stdlib, such as Krypton, Fabric with [Fabric Language Kotlin](https://modrinth.com/mod/fabric-language-kotlin), or with plugins that provide it, such as [MCKotlin](https://modrinth.com/plugin/mckotlin)

#### Gradle
```kotlin
repositories {
  mavenCentral()
}

dependencies {
  compileOnly("io.github.miniplaceholders:miniplaceholders-kotlin-ext:3.0.1")
}
```
