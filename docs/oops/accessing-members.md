---
sidebar_label : "Accessing Members"
sidebar_position : 3
---
# Accessing Members

In the context of object-oriented programming (OOP), members refer to the attributes and methods that belong to a class. Members encapsulate the data and behavior associated with objects instantiated from the class.

<!-- Here's a breakdown of the two types of members:

1. **Attributes (Variables)**:
   - Attributes, also known as variables or properties, represent the data or state of objects.
   - They store information about the characteristics or properties of objects.
   - Attributes can hold values of various data types, such as integers, floats, strings, or even other objects.
   - Examples of attributes include `name`, `age`, `height`, `color`, etc.
   - Attributes define the state of an object and can be accessed and modified using the dot operator (`.`) when referring to specific object instances.

2. **Methods (Functions)**:
   - Methods represent the behavior or actions that objects can perform.
   - They encapsulate the logic and operations associated with the objects of the class.
   - Methods can manipulate the object's attributes, perform computations, interact with other objects, and more.
   - Examples of methods include `greet()`, `calculateArea()`, `move()`, etc.
   - Methods define the behavior of an object and can be invoked using the dot operator (`.`) when referring to specific object instances. -->

In summary, members are the building blocks of classes in OOP, encapsulating both data (attributes) and behavior (methods) within a single unit. They define the structure and functionality of objects instantiated from the class, providing a modular and reusable way to model and manipulate complex systems in software development.

In Squig, the dot operator (`.`) is used to access the members (attributes and methods) of a class object. It provides a way to refer to specific attributes or invoke methods associated with an object instantiated from a class.

## Syntax:

```squig
object_name.member_name
```

- **`object_name`**: Specifies the name of the object from which the member is being accessed. This is the identifier representing the instance of the class.
  
- **`member_name`**: Specifies the name of the attribute or method being accessed within the class. This can be an attribute (variable) or a method (function) defined in the class.

## Usage:

The dot operator allows developers to interact with objects by accessing their attributes and invoking their methods. It provides a mechanism for working with the data and behavior encapsulated within class objects.

### Example:

```js
Person class {
    let name: ""
    let age: -1

    greet function {} :  {
        log "Hello, my name is " + name + " and I am " + age + " years old."
    }
}

let john : @Person
john.name : "John Doe"
john.age : 30
john.greet{}
```

In this example, the dot operator is used to access the `name` and `age` attributes of the `john` object, as well as invoke the `greet` method defined in the `Person` class.

## Notes:

- The dot operator facilitates interaction with objects by providing a means to access their members.
- Members accessed using the dot operator must be public or accessible within the scope of the object.
- Attempting to access non-existent members or private members may result in runtime errors or undefined behavior.

## Conclusion:

The dot operator (`.`) in Squig serves as a fundamental mechanism for accessing the members of class objects, allowing developers to work with the data and behavior encapsulated within objects effectively. By leveraging the dot operator, developers can access attributes and invoke methods to manipulate objects and perform specific tasks within their Squig programs.
