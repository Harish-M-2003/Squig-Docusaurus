---
sidebar_position : 1
title : "Classes"
---


# Classes

A class is a fundamental concept in object-oriented programming (OOP) that serves as a blueprint for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of that class will have. In essence, a class acts as a template or prototype from which objects are instantiated.
<!-- 
Here are some key characteristics of classes:

1. **Attributes**: Classes define attributes or properties that represent the state or data associated with objects of that class. These attributes store information about the object's characteristics or characteristics.

2. **Methods**: Classes contain methods or functions that define the behavior or actions that objects of that class can perform. These methods encapsulate the logic and operations that manipulate the object's attributes or interact with other objects.

3. **Encapsulation**: Classes encapsulate data and behavior into a single unit, providing a way to organize and structure code in a modular and reusable manner. Encapsulation hides the internal state of an object and exposes only the necessary interfaces (methods) for interacting with the object.

4. **Inheritance**: Classes support inheritance, allowing one class (subclass or derived class) to inherit attributes and methods from another class (superclass or base class). This promotes code reuse and facilitates the creation of class hierarchies with specialized behavior.

5. **Polymorphism**: Classes support polymorphism, which allows objects of different classes to be treated uniformly through a common interface. Polymorphism enables dynamic dispatch of methods based on the actual type of the object at runtime, enhancing flexibility and extensibility in the code.

6. **Instantiation**: Classes are used as blueprints for creating objects through a process called instantiation. When an object is instantiated from a class, it inherits the attributes and methods defined by that class and becomes a distinct instance with its own state and behavior. -->

In summary, a class in object-oriented programming represents a template or prototype for creating objects with specific attributes and behaviors. It encapsulates data and behavior, promotes code reuse through inheritance, and enables polymorphic behavior, contributing to modular, flexible, and maintainable software design.


:::warning
🛠️ We're working on to integrate object-oriented programming (OOP) concepts into Squig to enhance its capabilities! While Squig currently doesn't support object-oriented features, our development team is actively working on implementing OOP principles to empower developers with a more robust and versatile programming experience. Stay tuned for exciting updates as we strive to bring the power of OOP to Squig! 🚀🔧
:::

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
