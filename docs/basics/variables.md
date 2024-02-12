---
sidebar_label : Variables
sidebar_position : 2
---

# Variables

A variable in programming is a symbolic name or identifier that represents a storage location in computer memory. It holds a value that can be changed or modified during the execution of a program. Variables play a fundamental role in programming, allowing developers to store, manipulate, and retrieve data efficiently.


In summary, variables serve as fundamental building blocks in programming, enabling the storage and manipulation of data values within a program. They provide flexibility, modularity, and abstraction, essential for implementing various algorithms, data structures, and software applications.

<!-- Variables in Squig are essential for storing and managing data. They are dynamically typed, allowing flexibility in assigning values without explicit type declarations. Let's explore the basics of variables in Squig. -->

## Variable Declaration

In Squig, you declare variables using the `let` keyword:

```js
let age : 25

let name : "Squig"

let isCodingFun : true
```

Here, we have created variables for an integer (`age`), a string (`name`), and a boolean (`isCodingFun`).

## Dynamic Typing

Squig is dynamically typed, meaning you don't need to explicitly declare the variable type. The language infers the type based on the assigned value.

```js
let dynamicVar : 3.14  
dynamicVar : "Squig" 
```

<!-- ## Variable Scope

Variables in Squig have block scope. They are accessible only within the block of code where they are declared:

```squig
if true {
    let insideIf = "Inside If Block"
    print(insideIf)  # This works
}

print(insideIf)  # This will result in an error as 'insideIf' is not accessible here
``` -->

<!-- ## Mutable Variables

If you need to change the value of a variable, use the `let` keyword:

```squig
let count : 1
count : count + 1
``` -->

Understanding how to declare and use variables is fundamental to Squig programming. As you progress, these concepts will form the building blocks for creating dynamic and expressive Squig programs. Happy coding!