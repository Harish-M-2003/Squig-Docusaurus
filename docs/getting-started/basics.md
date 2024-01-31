---
sidebar_label : Basics
sidebar_position : 3
---
# Language Basics

Now that you've had a taste of Squig with our quick start guide, let's delve into the language basics. Understanding these foundational concepts will pave the way for more complex and powerful Squig programming.

## 1. Variables and Data Types

In Squig, variables are used to store and manage data. Let's explore the basic data types and how to declare variables:

```squig
# Integer
let age : 25

# String
let name : "Squig"

# Boolean
let isCodingFun : true

```

Squig is dynamically typed, allowing you to assign values to variables without explicitly specifying their types.

## 2. Basic Syntax

Squig's syntax is designed for simplicity and clarity. Here's a quick overview of some basic syntax elements:


# Comments
```squig
# This is a single-line comment
```

# Print to the console
```squig
log "Hello, Squig!"
```

# String concatenation
```squig
let greeting : "Hello"
let subject : "Squig"
let fullGreeting : greeting + ", " + subject + "!"
```

## 3. Control Structures

Control structures allow you to dictate the flow of your Squig programs. Let's explore the `if` statement:

```squig
let temperature : 28

if { temperature > 25 } : {
    log "It's a warm day!"
} else : {
    log "It's a bit chilly."
}
```

## 4. Loops

Loops are essential for repeating actions. Squig supports `for` loops only:

```squig
# For loop
for i{5} : {
    log "Iteration: " + String{i}
}
```

These are the foundational elements of Squig's syntax. As you become more comfortable with these basics, you'll be ready to explore more advanced features and build robust applications. Stay curious, and happy coding with Squig!