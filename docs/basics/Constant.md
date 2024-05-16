---
sidebar_label : Constant
sidebar_position : 3
---

## 

In Squig, the `imu` keyword is used to declare constants. Constants are variables whose values cannot be changed once they are initialized. This is useful when you have values that should remain constant throughout your program.

### Syntax:
```squig
imu variable_name : value
```

- `imu`: This keyword stands for "immutable," indicating that the variable declared will be constant.
- `variable_name`: This is the name of the constant variable you want to declare.
- `value`: This is the initial value assigned to the constant variable.

### Example:
```squig
imu PI : 3.14159
imu MAX_CONNECTIONS : 100
```

In this example, `PI` and `MAX_CONNECTIONS` are constants with the values `3.14159` and `100`, respectively. Once these constants are declared, their values cannot be changed elsewhere in the program.
