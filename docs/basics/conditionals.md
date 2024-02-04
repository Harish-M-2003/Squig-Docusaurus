---
sidebar_label : Conditionals
sidebar_position : 7
---

# Conditional Statements and Loops in Squig

Squig provides a variety of control flow statements to facilitate decision-making and iterative processes in your code. Here are the key features: `if`, `if-else`, `if-elif-else`, `switch`, and `for` loop.

## 1. if Statement

The `if` statement is used for simple conditional branching. It executes a block of code only if the specified condition evaluates to true.

```squig
if { condition } : {

    // Code to execute if the condition is true

}
```

## 2. if-else Statement

The `if-else` statement extends the `if` statement by providing an alternative block of code to execute if the condition is false.

```squig
if { condition } : {

    // Code to execute if the condition is true

} else : {

    // Code to execute if the condition is false

}
```

## 3. if-elif-else Statement

The `if-elif-else` statement is an extension of the `if-else` statement that allows for multiple conditions to be checked sequentially.

```squig
if { condition1 } : {

    // Code to execute if condition1 is true

} elif { condition2 } : {

    // Code to execute if condition2 is true

} else : {

    // Code to execute if none of the conditions are true

}
```

## 4. switch Statement

The `switch` statement provides an efficient way to handle multiple possible conditions. It compares the value of an expression against various cases and executes the corresponding block of code.

```squig
switch { expression } : {

    case value1: {

        // Code to execute if expression equals value1

    }
    case value2: {

        // Code to execute if expression equals value2

    }

    // ... additional cases ...

    default : {

        // Code to execute if none of the cases match

    }

}

```

## 5. for Loop

The `for` loop in Squig is used for iterating over a sequence (e.g., range of numbers) or elements in an array.

```squig
for initializer{condition} : {

    // Code to execute in each iteration

}
```

- **initializer**: Executed once before the loop starts.

### Example

```squig
for i{10} {

    log "Iteration " , i;
    
}
```

In this example, the `for` loop iterates five times, printing "Iteration 0" through "Iteration 4."

## Conclusion

The combination of `if`, `if-else`, `if-elif-else`, `switch`, and `for` loop provides Squig programmers with powerful tools to control the flow of their code, making it expressive and adaptable to different scenarios.
