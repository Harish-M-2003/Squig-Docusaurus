---
sidebar_label : "Objects"
sidebar_position : 2
---


# Objects
An object is a fundamental concept in object-oriented programming (OOP) paradigms, including in languages like Squig. It represents a tangible entity with its own state and behavior. In OOP, classes serve as blueprints for creating objects. When you create an object, you are essentially instantiating a specific instance of a class.
<!-- 
Here are some key characteristics of objects:

1. **State**: Objects have state, which is defined by the values of their attributes or properties. These attributes hold data specific to each object and represent its current condition or characteristics.

2. **Behavior**: Objects can exhibit behavior, which is defined by the methods or functions associated with the class from which they are instantiated. These methods define the actions or operations that objects can perform.

3. **Identity**: Each object is unique and has its own identity. Even if two objects have the same attributes and behavior, they are distinct entities in memory.

4. **Encapsulation**: Objects encapsulate data and behavior into a single unit. This means that the internal state of an object is hidden from the outside world, and interactions with the object are typically performed through well-defined interfaces (methods).

5. **Instantiation**: Objects are created or instantiated from classes using a process known as instantiation. When an object is instantiated, memory is allocated to store its data, and it becomes a distinct entity that can be manipulated and interacted with in the program. -->

In summary, objects are the building blocks of object-oriented programming, representing concrete instances of abstract classes. They encapsulate both data and behavior, providing a modular and flexible way to model and manipulate complex systems in software development.

In Squig, objects are instances of classes, created using the following syntax:

```squig
let reference_name: @class_name
```

- **`reference_name`**: Specifies the name of the reference pointing to the object being created. This is the identifier that will be used to reference the object in the program. The 'let' keyword is optional.

- **`class_name`**: Specifies the name of the class from which the object is being instantiated. The class must be previously defined using the `class` keyword.

## Usage:

Creating objects allows developers to instantiate instances of classes, enabling the utilization of class attributes and methods to perform specific tasks or operations.

### Example:

```squig
let person: @Person
```

In this example, an object named 'person' of type 'Person' is created.

## Notes:

- The `@` symbol preceding the class name indicates that the variable is of object type.

## Conclusion:

Object creation in Squig facilitates the instantiation of instances of classes, providing a means to utilize class attributes and methods within the program. By creating objects, developers can model and manipulate data structures, enabling the implementation of complex systems and applications.
