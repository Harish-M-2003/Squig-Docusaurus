---
sidebar_label : Functions
sidebar_position : 7
---

# Functions

Functions in Squig allow you to encapsulate reusable pieces of code, making your programs modular and easier to manage. Here's an overview of creating and using functions in Squig.

## 1. Function Declaration

To declare a function, use the `function` keyword .

```squig
add function { a, b } : {
    return a + b
}
```

In this example, the function `add` takes two parameters of type integer and returns their sum.

## 2. Function Invocation

To use a function, call it with the required arguments.

```squig
let result : add{ 3, 5 }
```

This invokes the `add` function with arguments `3` and `5`, and the result is stored in the variable `result`.

<!-- ## 3. Default Parameters

You can provide default values for function parameters.

```squig
func greet(name: string = "Guest") {
    print("Hello, " + name + "!")
}
```

Here, the `greet` function has a default value for the `name` parameter. If no argument is provided, it greets the "Guest" by default. -->

<!-- ## 5. Variadic Parameters

Functions can accept a variable number of arguments using variadic parameters.

```squig
func average(numbers: ...integer) -> float {
    let sum = numbers.reduce(0) { $0 + $1 }
    return float(sum) / float(numbers.count)
}
```

The `average` function calculates the average of a variable number of integers using the `...integer` variadic parameter. -->

<!-- ## 5. Recursive Functions

Squig supports recursive functions, allowing a function to call itself.

```squig
factorial function { n } :  {
    if { n <= 1 } : {
        n ;
    } else {
        log n * factorial(n - 1)
        
    }
}
``` -->

<!-- 
The `factorial` function calculates the factorial of a number using recursion.
## 6. Higher-Order Functions

Squig supports higher-order functions, allowing functions to accept other functions as parameters or return functions.

```squig
func applyOperation(a: integer, b: integer, operation: (integer, integer) -> integer) -> integer {
    return operation(a, b)
}

let result = applyOperation(3, 4, add)

In this example, the `applyOperation` function takes two integers and a function as parameters, applying the provided operation.
``` -->

## Conclusion

Functions in Squig provide a powerful way to structure your code, promote reusability, and enable better organization of your programs. Whether you're creating simple calculations, handling default values, or implementing complex recursive algorithms, Squig's functions offer flexibility and efficiency.