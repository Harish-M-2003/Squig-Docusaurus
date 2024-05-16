---
sidebar_label : Conditionals
sidebar_position : 7
---

# Conditional Statements and Loops

Conditional and iterative statements are fundamental programming constructs that enable dynamic control flow and repetitive execution of code blocks based on specific conditions or for a predetermined number of iterations.

<!-- **Usage:**
- **When to Use:**
  - Use conditional statements when you need to execute different blocks of code based on specific conditions or criteria. They are essential for implementing decision-making logic in programs.
  - Conditional statements are commonly used for user input validation, flow control, error handling, algorithmic logic, and user interface interactions.
  - Use iterative statements when you need to perform a task multiple times without duplicating code. They are essential for automating repetitive tasks and processing sequences of data or events efficiently.
  - Iterative statements are commonly used for data processing, algorithm implementation, control flow, and task automation.
- **Choosing the Right Statement:**
  - Choose the appropriate type of conditional statement (e.g., if, if-else, switch) based on the number of conditions and the desired control flow.
  - Select the suitable type of iterative statement (e.g., for loop, while loop) based on the nature of the task and the termination condition.
- **Benefits:**
  - Combined, conditional and iterative statements help create more flexible, responsive, and efficient programs.
  - They improve code readability, maintainability, and performance by encapsulating decision-making and repetitive logic into concise and reusable constructs.
  - By leveraging conditional and iterative statements effectively, developers can streamline development, enhance functionality, and improve user experience in software applications. -->

Squig provides a variety of control flow statements to facilitate decision-making and iterative processes in your code. Here are the key features: `if`, `if-else`, `if-elif-else`, `switch`, and `for` loop.

:::warning Brace Closure and Colon Usage

Check your braces {} and colons :! Incorrect usage could lead to bugs in your code. Keep it concise, keep it clean, and your Squig adventures will be smooth sailing.
:::

## 1. if Statement

The `if` statement is used for simple conditional branching. It executes a block of code only if the specified condition evaluates to true.

```py

if { condition } : {

    # Code to execute if the condition is true

}
```

## 2. if-else Statement

The `if-else` statement extends the `if` statement by providing an alternative block of code to execute if the condition is false.

```python
if { condition } : {
    
    # Code to execute if the condition is true

} else : {

    # Code to execute if the condition is false

}
```

## 3. if-elif-else Statement

The `if-elif-else` statement is an extension of the `if-else` statement that allows for multiple conditions to be checked sequentially.

```python
if { condition1 } : {

    # Code to execute if condition1 is true

} elif { condition2 } : {

    # Code to execute if condition2 is true

} else : {

    # Code to execute if none of the conditions are true

}
```

## 4. switch Statement

The `switch` statement provides an efficient way to handle multiple possible conditions. It compares the value of an expression against various cases and executes the corresponding block of code.

```squig
switch { expression } : {

    case value1: {

        # Code to execute if expression equals value1

    }
    case value2: {

        # Code to execute if expression equals value2

    }

    # ... additional cases ...

    default : {

        # Code to execute if none of the cases match

    }

}

```

## 5. for Loop

The `for` loop in Squig is used for iterating over a sequence (e.g., range of numbers) or elements in an array.

```squig
for initializer{start , stop , step} : {

    // Code to execute in each iteration

}

for initializer{sequence} : {

    // Code to execute in each iteration

}
```

- **initializer**: Executed once before the loop starts.
- **start** and **step** are optional

### Example

```js
for i{10} {

    log "Iteration " , i;
    
}


let message : "Hello , world"

for i{message} {

    log i;
    
}
```

In this example, the `for` loop iterates five times, printing "Iteration 0" through "Iteration 4."

## Conclusion

The combination of `if`, `if-else`, `if-elif-else`, `switch`, and `for` loop provides Squig programmers with powerful tools to control the flow of their code, making it expressive and adaptable to different scenarios.
