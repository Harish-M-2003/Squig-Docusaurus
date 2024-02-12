---
sidebar_label : Operators
sidebar_position : 6
---
# Operators

In programming languages, an operator is a symbol or keyword that represents a specific operation or action to be performed on one or more operands. Operators define how data values are manipulated, combined, compared, or transformed within expressions and statements in a program. They play a fundamental role in performing computations, controlling program flow, and implementing various algorithms and operations.
<!-- 
Here's a breakdown of key aspects of operators in programming languages:

1. **Operand(s)**: An operand is a value or variable upon which an operator acts. Operators may require one, two (binary operators), or three (ternary operators) operands to perform their operation.

2. **Operation**: Each operator defines a specific operation or action to be carried out on its operands. Operations can include arithmetic calculations, logical comparisons, bitwise manipulations, assignment, type conversion, and more.

3. **Types of Operators**:
   - **Arithmetic Operators**: Perform mathematical calculations such as addition, subtraction, multiplication, division, modulus, and exponentiation.
   - **Comparison Operators**: Compare two values and determine their relationship, such as equality, inequality, greater than, less than, etc.
   - **Logical Operators**: Combine boolean values and produce a boolean result based on logical operations such as AND, OR, and NOT.
   - **Bitwise Operators**: Manipulate individual bits within binary representations of values, performing operations such as bitwise AND, OR, XOR, shift left, and shift right.
   - **Assignment Operators**: Assign values to variables or modify their current values using operations such as simple assignment, compound assignment (e.g., +=, -=), and increment/decrement (e.g., ++, --).
   - **Ternary Operator**: A conditional operator that evaluates a boolean expression and returns one of two values based on the result.
   - **Member Access Operator**: Accesses members or properties of objects or data structures, such as dot notation (e.g., object.property) or arrow notation (e.g., object->property).
   - **Other Special Operators**: Includes operators for pointer manipulation, memory allocation, type conversion, and more, depending on the programming language.

4. **Precedence and Associativity**: Operators have precedence rules that dictate the order in which they are evaluated within expressions. Additionally, operators may have left-to-right or right-to-left associativity, determining the order of evaluation when multiple operators of the same precedence level appear in an expression.

5. **Overloading**: Some programming languages support operator overloading, allowing developers to define custom behaviors for operators when applied to user-defined types or objects.

6. **Error Handling**: Operators may raise errors or exceptions when used with incompatible operands or invalid operations. Proper error handling is essential for handling such situations gracefully and ensuring program robustness. -->

Overall, operators are essential language constructs in programming, providing concise syntax for expressing computations, comparisons, and transformations of data values. Understanding operators and their behaviors is crucial for writing correct, efficient, and maintainable code in programming languages.

Operators in Squig enable you to perform various operations on variables and values. Here's an overview of the different types of operators supported in Squig.

:::warning
🚧 We're actively enhancing Squig to provide comprehensive support for a wide range of operators! While Squig currently has a limited set of operators, our development team is hard at work expanding its capabilities to include a broader array of operators for various operations and computations. Stay tuned for updates as we continue to evolve and enrich Squig's feature set to meet your programming needs! 🛠️🔍
:::

## 1. Arithmetic Operators

Arithmetic operators are used to perform basic mathematical operations.

- **Addition `+`**: Adds two values.
- **Subtraction `-`**: Subtracts the right operand from the left operand.
- **Multiplication `*`**: Multiplies two values.
- **Division `/`**: Divides the left operand by the right operand.
- **Modulus `%`**: Returns the remainder of the division of the left operand by the right operand.

### Example

```javascript
let a : 10
let b : 3

let sum : a + b        // 13
let difference : a - b  // 7
let product : a * b     // 30
let quotient : a / b    // 3.333...
let remainder : a % b   // 1
```

## 2. Comparison Operators

Comparison operators are used to compare two values.

- **Equal `=`**: Checks if the values on both sides are equal.
- **Not Equal `!=`**: Checks if the values on both sides are not equal.
- **Greater Than `>`**: Checks if the left operand is greater than the right operand.
- **Less Than `<`**: Checks if the left operand is less than the right operand.
- **Greater Than or Equal `>=`**: Checks if the left operand is greater than or equal to the right operand.
- **Less Than or Equal `<=`**: Checks if the left operand is less than or equal to the right operand.

### Example

```javascript
let x : 5
let y : 10

log x = y    //false
log x != y    // true
log x > y     // false
log x < y     // true
log x >= y    // false
log x <= y    // true
```

## 3. Logical Operators

Logical operators are used to perform logical operations.

- **Logical AND `&`**: Returns true if both operands are true.
- **Logical OR `|`**: Returns true if at least one operand is true.
- **Logical NOT `!`**: Returns true if the operand is false, and false if the operand is true.

### Example

```javascript
let isTrue : true
let isFalse : false

log isTrue & isFalse  // false
log isTrue | isFalse  // true
log !isTrue           // false
```

## 4. Assignment Operators

Assignment operators are used to assign values to variables.

- **Assignment `:`**: Assigns the value on the right to the variable on the left.
- **Addition Assignment `:+`**: Adds the right operand to the left operand and assigns the result to the left operand.
- **Subtraction Assignment `:-`**: Subtracts the right operand from the left operand and assigns the result to the left operand.
- **Multiplication Assignment `:*`**: Multiplies the left operand by the right operand and assigns the result to the left operand.
- **Division Assignment `:/`**: Divides the left operand by the right operand and assigns the result to the left operand.

### Example

```js
let num : 5

num :+ 2  # num is now 7
num :- 3  # num is now 4
num :* 2  # num is now 8
num :/ 4  # num is now 2
```

## Conclusion

Understanding and effectively utilizing operators in Squig is fundamental to writing expressive and efficient code. Whether performing mathematical operations, making comparisons, or handling logical conditions, operators play a crucial role in shaping the behavior of your Squig programs.
