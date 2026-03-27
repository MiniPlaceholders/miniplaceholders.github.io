---
title: Minestom Development
sidebar_label: 'Minestom Development'
sidebar_position: 8
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Starting with MiniPlaceholders 3.2.0, support for [Minestom](https://minestom.net/) has been added.

Minestom is a library that allows you to build your own Minecraft server from scratch, without relying on Mojang's code.

To use MiniPlaceholders with Minestom, you must add the dependency to your buildscript

<Tabs groupId="build-system">
  <TabItem value="gradle" label="Gradle" default>
    ```kotlin
      repositories {
        mavenCentral()
      }

      dependencies {
        implementation("io.github.miniplaceholders:miniplaceholders-minestom:3.2.0")
      }
    ```
  </TabItem>
  <TabItem value="maven" label="Maven">
    ```xml
    <dependency>
      <groupId>io.github.miniplaceholders</groupId>
      <artifactId>miniplaceholders-minestom</artifactId>
      <version>3.2.0</version>
    </dependency>
```
  </TabItem>
</Tabs>

Once the dependency has been imported, simply use it after starting the server.


```JAVA
MinestomMiniPlaceholders.initialize(
    Path.of("miniplaceholders"),
    (source, permission) -> TriState.TRUE
);
```

This will register the corresponding MiniPlaceholders commands with the Permission Checker you configure, and create the `expansions` folder where you can place the expansions you want.

You can see a real-world example of its use [here](https://github.com/MiniPlaceholders/MiniPlaceholders/tree/main/minestom/src/test/java/io/github/miniplaceholders/minestom).
