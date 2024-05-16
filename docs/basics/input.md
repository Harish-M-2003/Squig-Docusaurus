---
sidebar_label : User input
sidebar_position : 5
---

# User Input

User input refers to data provided by the user of a computer program during its execution. It allows users to interact with the program by entering information, making selections, or issuing commands through input devices such as keyboards, mice, touchscreens, or other input devices.


:::info Note Using Single Quotes for User Input

When getting user input in Squig, remember to use single quotes ' ' around the prompt message. This ensures a smooth experience for your users without any interruptions.

:::

<!-- Here's a breakdown of user input in programming:

1. **Interaction**: User input enables programs to respond to user actions and requests in real-time, creating an interactive experience. Users can provide input to control the behavior, flow, and functionality of the program.

2. **Types of Input**: User input can take various forms, including:
   - **Text Input**: Entering textual information, such as names, addresses, messages, or commands, via keyboard input.
   - **Numeric Input**: Providing numerical data, such as integers, floating-point numbers, or mathematical expressions.
   - **File Input**: Specifying files or file paths as input for file-related operations, such as reading, writing, or processing data from files. -->

Squig simplifies user input by automatically detecting the input type, allowing for a seamless and straightforward experience. Here's how you can capture user input:

## Automatic Type Detection

```js
# Receive user input for a number

let userNumber : 'Enter a number: '
log type userNumber 

# Receive user input for text

let userText : 'Enter some text: '
log type userText
```

In the example above, Squig dynamically detects the type of user input based on the context. Whether the user enters a number, or a text Squig adapts to the provided input.

## Using User Input

Once you've captured user input, you can use it in your program as needed:

```js

let squaredNumber : userNumber * userNumber
log "The square of your number is: " + squaredNumber

let greeting : "Hello, " + userText + "!"
log greeting

if { userChoice } : {
    log  "You chose true!"
} else : {
    log "You chose false!"
}
```

Squig's automatic type detection for user input streamlines the coding process, making it more intuitive and user-friendly. As you incorporate user input into your Squig programs, take advantage of this feature to enhance the user experience. Happy coding!