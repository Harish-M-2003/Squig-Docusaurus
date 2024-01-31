---
sidebar_label : Datatypes
sidebar_position : 5
---

# Data Types in Squig

Squig supports various data types to represent different kinds of values in your programs. Understanding these data types is crucial for effective programming. Let's explore the primary data types in Squig.

## 1. Integer

Integers represent whole numbers without any fractional or decimal part.

```squig
let age : 25
```

## 2. Float

Floats represent numbers with a decimal point, allowing for fractional values.

```squig
let pi : 3.14
```

## 3. String

Strings represent sequences of characters, such as text or words.

```squig
let message : "Hello, Squig!"
```

## 4. Boolean

Booleans represent true or false values, often used for logical conditions.

```squig
let isCodingFun : true
```


# Collections in Squig
Squig provides a diverse set of collections to help you organize and manage data efficiently. Here are the primary collection types in Squig:

:::note
In Squig, the current collection offerings include arrays for ordered lists of elements and maps for key-value pairs.
:::

## 1. Array
Arrays are ordered collections of elements, allowing for random access using index values.

```squig
let myArray : {1, 2, 3, 4, 5}
let thirdElement : myArray[2]  # Accessing the third element (3)
```

## 2. Map
A map is a collection of key-value pairs, allowing elements to be accessed by both index values and key values.
```squig
let myMap : {"name" : "squig" , "version" : "0.0.0"}
```


These are the basic data types in Squig.  Understanding the characteristics and use cases of each data type will empower you to write expressive and efficient Squig code. Happy coding!