#  Activity 1

## Introduction 

- This is **Activity 1** blah blah blah 

## Fruits

1. pears
2. Cherries
3. Apples
     1. Red
     2. Yellow
     3. Green
4. Oranges

## Fruits

- pears
- Cherries
- Apples
     - Red
     - Yellow
     - Green
- Oranges

## Links / Images
[wikiBob](https://gitlab.com/bobby.estey/wikibob/-/blob/master/README.md)

[Google](https://google.com)

![America's Flagship Seal](https://gitlab.com/bobby.estey/wikibob/-/raw/master/docs/icons/cv64AmericasFlagShip100x100.png)
![America's Flagship Seal](https://gitlab.com/bobby.estey/wikibob/-/raw/master/docs/icons/cv64AmericasFlagShip100x100.png "America's Flag Ship")

## Tables
|First Name|Last Name|
|--|--|
|Cody|Crosby|
|Corbin|Crosby|


## Code Blocks
```java
public class CodeBlock {
    public static void main(String[] args) {
        System.out.println("Code Block Example");
    }
}
```

```mermaid
---
title: MermaidJS - Class Diagram - Animal example
---
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
```
