---
sidebar_label : "Type Keyword"
sidebar_position : 4
---

# Type Keyword

The `type` keyword in Squig is used to provide insight into the data types at runtime. It enables developers to dynamically determine the type of a variable or expression, allowing for more flexible programming.

## Syntax

```squig
type expression
```

- **expression**: The variable or expression for which you want to determine the type.

## Usage

The `type` keyword returns a string representing the data type of the specified expression. It can be used in various scenarios, such as debugging, conditional branching, or dynamic type-dependent behavior.

### Example

```squig
let x : 42
let y : "Hello, Squig!"

log type x  # Output: "integer"
log type y  # Output: "string"
```

In the example above, the `type` keyword is used to inspect the data type of variables `x` and `y` at runtime. The resulting strings, "integer" and "string," respectively, provide valuable information about the types of the variables.

## Considerations

- The `type` keyword is particularly useful in situations where the data type of a variable is not known beforehand or may change dynamically during program execution.
- It enhances the adaptability of Squig code by allowing developers to create more generic and reusable functions that can handle different types of data.

<!-- ## Conclusion

The `type` keyword in Squig empowers developers with dynamic type-checking capabilities, fostering a more flexible and resilient coding experience. By incorporating this keyword judiciously, you can write code that gracefully adapts to varying data types, promoting cleaner and more maintainable solutions.

--- -->