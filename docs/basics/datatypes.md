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
- **Custom Objects/Classes**: Represents user-defined data structures with their own attributes and methods.

Understanding data types is essential for writing correct and efficient programs, as it enables developers to select appropriate types for representing and manipulating data, ensuring compatibility and consistency throughout the codebase.

Squig supports various data types to represent different kinds of values in your programs. Understanding these data types is crucial for effective programming. Let's explore the primary data types in Squig.

## 1. Integer

Integers represent whole numbers without any fractional or decimal part.

```js
let age : 25
```

## 2. Float

Floats represent numbers with a decimal point, allowing for fractional values.

```js
let pi : 3.14
```

## 3. String

Strings represent sequences of characters, such as text or words.

```js
let message : "Hello, Squig!"
```

## 4. Boolean

Booleans represent true or false values, often used for logical conditions.

```js
let isCodingFun : true
```


<!-- # Collections
Squig provides a diverse set of collections to help you organize and manage data efficiently. Here are the primary collection types in Squig:

:::info
In Squig, the current collection offerings include arrays for ordered lists of elements and maps for key-value pairs.
:::

#### 1. Array
Arrays are ordered collections of elements, allowing for random access using index values.

```squig
let myArray : {1, 2, 3, 4, 5}
let thirdElement : myArray[2]  # Accessing the third element (3)
```

#### 2. Map
A map is a collection of key-value pairs, allowing elements to be accessed by both index values and key values.
```squig
let myMap : {"name" : "squig" , "version" : "0.0.0"}
``` -->

These are the basic data types in Squig.  Understanding the characteristics and use cases of each data type will empower you to write expressive and efficient Squig code. Happy coding!