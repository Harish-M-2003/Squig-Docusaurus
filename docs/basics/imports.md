---
sidebar_label : "Working with modules"
sidebar_position : 11
---

# 'use' Keyword

The 'use' keyword in Squig is used to import modules, enabling the inclusion of external code and functionalities into Squig programs. It allows Squig programs to access functions, classes, and other definitions defined in external modules, expanding the capabilities and features available to Squig developers.

## Syntax:

```js
use "module_name"
```

- **`module_name`**: Specifies the name of the module to be imported. The module name may include the full path to the module file or the module name if it is located in a predefined search path.

:::info
The module name should be enclosed in double quotes to denote it as a string literal.
:::

## Usage:

The 'use' keyword is typically used at the beginning of a Squig program to import the necessary modules before utilizing their functionalities. Once imported, the definitions and symbols provided by the module become available for use within the Squig program.

### Example:

```js
use "math"
use "math.squig"
```

In this example, the 'math' and 'io.file' modules are imported into the Squig program, allowing access to mathematical functions and file input/output operations provided by these modules.

## Notes:

- Imported modules must be accessible from the Squig interpreter's search path or specified location.
- Modules may contain functions, classes, constants, and other definitions that can be used within the Squig program after importing.

## Conclusion:

The 'use' keyword in Squig simplifies the process of incorporating external code and functionalities into Squig programs, promoting code reuse, modularity, and maintainability. By importing modules, Squig developers can leverage existing libraries and tools to enhance the capabilities of their applications, accelerating development and fostering innovation.
