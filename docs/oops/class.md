---
sidebar_position : 1
title : "Classes"
---


# Classes

In Squig, classes are defined using the following syntax:

```js
class_name class {
    class_members
}
```

- **`class_name`**: Specifies the name of the class. Class names in Squig follow the same naming conventions as variables and functions.

- **`class_members`**: Represents the members or properties of the class. These can include attributes (variables) and methods (functions) that define the behavior and characteristics of objects instantiated from the class.

## Usage:

Classes serve as blueprints for creating objects with specific attributes and behaviors. They encapsulate data and functions into a single unit, providing a way to organize and structure code in a modular and reusable manner.

### Example:

```js
Person class {
    let name: ""
    let age: -1

    introduce function {} : {
        log "Hello, my name is " + name + " and I am " + age + " years old."
    }
}
```

In this example, a class named 'Person' is defined with two attributes: 'name' of type string and 'age' of type int. Additionally, a method named 'introduce' is defined to print a greeting message using the values of the 'name' and 'age' attributes.

## Notes:

- Classes in Squig support encapsulation, inheritance, and polymorphism, allowing for the creation of complex data structures and hierarchies.
- Objects instantiated from classes can access and modify their attributes and invoke their methods to perform specific tasks.

## Conclusion:

Classes play a fundamental role in object-oriented programming (OOP) paradigms, facilitating the creation of modular, reusable, and maintainable code. In Squig, classes provide a powerful mechanism for modeling real-world entities and implementing complex systems with ease.
