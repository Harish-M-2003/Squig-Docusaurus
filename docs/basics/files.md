---
sidebar_label : Files
sidebar_position : 9
---
# File Handling

Squig provides simple and expressive syntax for handling files. This documentation covers reading and writing to files using Squig.

## Opening a File in Read Mode

To open a file in read mode, use the `file` keyword followed by the file reference, like this:

```squig
file reference: "filename"
```

This loads the file named "filename" in read mode by default.

:::warning
Please make sure that you use double quotes around you filename.
:::

#### Example:

```squig
file myFile: "example.txt"
log myFile
```

In this example, the contents of "example.txt" are read and printed to the console.

## Opening a File in Write Mode

To open a file in write mode, use the `file<"w">` syntax followed by the file reference:

```squig
file<"w"> reference: "filename"
```

This loads the file named "filename" in write mode.

#### Example:

```squig
file<"w"> myFile: "output.txt"
myFile <<< "This content will override the file."
```

In this example, "output.txt" is opened in write mode, and the provided content is written, overriding the existing file content.

## Closing a File

Remember to close the file after performing file operations to free up system resources:

```squig
close myFile
```

## Conclusion

With Squig's intuitive syntax, handling files becomes a seamless process. Whether you're reading data for processing or writing content to a file, Squig simplifies file operations for a smoother coding experience.
