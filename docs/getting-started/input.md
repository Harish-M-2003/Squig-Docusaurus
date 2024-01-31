---
sidebar_label : User input
sidebar_position : 6
---

# User Input

Squig simplifies user input by automatically detecting the input type, allowing for a seamless and straightforward experience. Here's how you can capture user input:

## Automatic Type Detection

```squig
# Receive user input for a number
let userNumber : 'Enter a number: '

# Receive user input for text
let userText : 'Enter some text: '
```

In the example above, Squig dynamically detects the type of user input based on the context. Whether the user enters a number, or a text Squig adapts to the provided input.

## Using User Input

Once you've captured user input, you can use it in your program as needed:

```squig
# Use the user's number in a calculation
let squaredNumber : userNumber * userNumber
log "The square of your number is: " + squaredNumber

# Concatenate user text
let greeting : "Hello, " + userText + "!"
log greeting

# Make decisions based on user choice
if { userChoice } : {
    log  "You chose true!"
} else : {
    log "You chose false!"
}
```

Squig's automatic type detection for user input streamlines the coding process, making it more intuitive and user-friendly. As you incorporate user input into your Squig programs, take advantage of this feature to enhance the user experience. Happy coding!