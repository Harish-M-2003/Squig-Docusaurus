---
sidebar_label : Variables
sidebar_position : 4
---

# Variables

Variables in Squig are essential for storing and managing data. They are dynamically typed, allowing flexibility in assigning values without explicit type declarations. Let's explore the basics of variables in Squig.

## Variable Declaration

In Squig, you declare variables using the `let` keyword:

```squig
# Integer
let age : 25

# String
let name : "Squig"
let name : "John" # This would likely result in a redeclaration error


# Boolean
let isCodingFun : true
```

Here, we have created variables for an integer (`age`), a string (`name`), and a boolean (`isCodingFun`).

## Dynamic Typing

Squig is dynamically typed, meaning you don't need to explicitly declare the variable type. The language infers the type based on the assigned value.

```squig
let dynamicVar : 3.14  # This can be a float
dynamicVar : "Squig"  # Now it becomes a string
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

## Mutable Variables

If you need to change the value of a variable, use the `var` keyword:

```squig
let count : 1
count : count + 1
```

The `var` keyword allows you to reassign values to the variable.

Understanding how to declare and use variables is fundamental to Squig programming. As you progress, these concepts will form the building blocks for creating dynamic and expressive Squig programs. Happy coding!