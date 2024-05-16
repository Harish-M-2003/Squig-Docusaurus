---
sidebar_label : Datatypes
sidebar_position : 3
---

# Data Types

Data types are a fundamental concept in programming that define the kind of data that can be stored and manipulated within a program. They specify the format of data values, how they should be interpreted, and what operations can be performed on them. In essence, data types provide a blueprint for representing and organizing data in a structured manner.
<!-- 
Here are some key points about data types:

1. **Classification of Data**: Data types categorize data into different groups based on their characteristics, such as numeric values, textual information, boolean values, etc.

2. **Representation of Values**: Each data type has a specific representation format that determines how data values are stored and interpreted by the computer's memory.

3. **Operations**: Different data types support different operations or behaviors. For example, numeric data types may support arithmetic operations like addition and subtraction, while string data types may support operations like concatenation and substring extraction.

4. **Immutability and Mutability**: Some data types are immutable, meaning their values cannot be changed once they are assigned, while others are mutable, allowing their values to be modified.

5. **Built-in and User-defined Types**: Programming languages provide built-in data types, such as integers, floats, strings, and arrays, which are available for immediate use. Additionally, developers can define their own custom data types using structures, classes, or other constructs provided by the language.

6. **Type Checking**: Data types enable type checking, a process where the compiler or interpreter verifies that operations are performed on data values of compatible types, helping to prevent errors and ensure program correctness. -->

Common built-in data types found in programming languages include:

- **Number**: Represents whole and fractional numbers.
- **String**: Represents sequences of characters.
- **MutableString**: Represents sequences of characters that can be modified dynamically.
- **Boolean**: Represents true or false values.
- **Array/List**: Represents collections of values of the same type.
- **Map**: Represents collections of key-value pairs.
<!-- - **Custom Objects/Classes**: Represents user-defined data structures with their own attributes and methods. -->

Understanding data types is essential for writing correct and efficient programs, as it enables developers to select appropriate types for representing and manipulating data, ensuring compatibility and consistency throughout the codebase.

Squig supports various data types to represent different kinds of values in your programs. Understanding these data types is crucial for effective programming. Let's explore the primary data types in Squig.

## Number Type: Integers and Floats

In Squig, integers and floating-point numbers are both represented under the number type. This allows you to work with numeric values of varying precision in your programs.

Integers represent whole numbers without any fractional or decimal part.

```js
let age : 25
```

Floats represent numbers with a decimal point, allowing for fractional values.

```js
let pi : 3.14
```


## String Type : Immutable

Strings represent sequences of characters, such as text or words.
In Squig, the String type is immutable, meaning that once a string is created, its value cannot be changed. This ensures that string values remain consistent and predictable throughout your program.

```js
let message : "Hello, Squig!"
```

## Mutable String Type:

In Squig, a mutable string is represented by enclosing text between backticks `` ` ``. Unlike regular strings, mutable strings allow you to modify their contents after they've been created.

### Declaration and Initialization

You can declare and initialize a mutable string variable by enclosing text between backticks `` ` ``.

Example:
```squig
let message : `Hello, world!`
```

## Boolean Type : 

Booleans represent true or false values, often used for logical conditions.

```js
let isCodingFun : true
```

## Collection Type : 

In Squig, the Collection type allows you to work with sequences of elements, similar to lists in Python. These sequences can contain elements of any data type, and you can perform various operations on them, such as adding, removing, and accessing elements.

<!-- ### Declaration and Initialization

You can declare and initialize a Collection variable using square brackets `[]` and adding elements separated by commas. -->

Example:
```squig
let fruits : {"apple", "banana", "orange"}
let numbers : {1, 2, 3, 4, 5}
```

In this example, `fruits` and `numbers` are Collection variables containing strings and integers, respectively.
<!-- 
### Accessing Elements

You can access individual elements in a Collection using square brackets `[]` and the index of the element you want to access. Indexing starts from 0.

Example:
```squig
str first_fruit : fruits[0]
num third_number : numbers[2]
```

In this example, `first_fruit` will contain `"apple"`, and `third_number` will contain `3`.

### Operations

You can perform various operations on Collections, such as adding and removing elements, getting the length of the Collection, and checking if an element exists.

Example:
```squig
fruits.append("grape")
numbers.remove(2)
num length : fruits.length()
bool has_banana : "banana" in fruits
```

In this example, `append() -->

## Map Type : 

In Squig, a Map is a collection of key-value pairs, allowing elements to be accessed by both index values and key values. Each element in a Map consists of a unique key and its corresponding value.

<!-- ### Declaration and Initialization

You can declare and initialize a Map variable using curly braces `{}` to define key-value pairs, separated by colons `:`. -->

Example:
```squig
let myMap : {"name" : "Squig", "version" : "0.0.0"}
```

In this example, `myMap` is a Map variable containing two key-value pairs: `"name"` with the value `"Squig"` and `"version"` with the value `"0.0.0"`.
