---
sidebar_label : Operators
sidebar_position : 6
---
# Operators

Operators in Squig enable you to perform various operations on variables and values. Here's an overview of the different types of operators supported in Squig.

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
