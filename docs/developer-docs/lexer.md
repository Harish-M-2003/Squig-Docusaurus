---
sidebar_label : "Lexer"
sidebar_position : 3
---
# Lexer 
The Lexer class in Squig is responsible for performing lexical analysis, which involves breaking down the source code into tokens. Tokens are the smallest units of syntax in a Squig program and serve as the building blocks for further processing during compilation.

## Lexer Class

The Lexer class processes the source code character by character, identifying and classifying tokens based on predefined rules. It utilizes various tokenization methods to recognize different types of tokens, including keywords, operators, literals, and special symbols.

### Methods:

- **`__init__(self, file, source_code)`**: Initializes a new Lexer object with the specified source code and file name.
- **`next(self)`**: Moves to the next character in the source code.
- **`tokenize_lesser_or_lesserThanEqual(self)`**: Tokenizes the lesser-than (`<`) or lesser-than-equal (`<=`) operator.
- **`tokenize_greater_or_greaterThanEqual(self)`**: Tokenizes the greater-than (`>`) or greater-than-equal (`>=`) operator.
- **`tokenize_not_or_notEqual(self)`**: Tokenizes the negation (`!`) or not-equal (`!=`) operator.
- **`tokenize_mul_or_power(self)`**: Tokenizes the multiplication (`*`) or power (`**`) operator.
- **`tokenize_assignment(self)`**: Tokenizes assignment operators (`:`, `:+`, `:*`, `:**`).
- **`tokenize_string(self)`**: Tokenizes string literals.
- **`tokenize_variable(self)`**: Tokenizes variables.
- **`tokenize_digit(self)`**: Tokenizes numeric literals.
- **`tokenize_input_message(self)`**: Tokenizes input message strings.
- **`tokenize(self)`**: Performs tokenization of the source code, generating a list of tokens.

### Code Explanation:

The provided code defines the Lexer class, which tokenizes the source code using various tokenization methods. Here's a breakdown of the code:

- **Initialization**: Initializes the Lexer object with the source code and file name.
- **`next()` Method**: Advances to the next character in the source code.
- **Tokenization Methods**: Define methods to tokenize different types of tokens, such as operators, literals, and special symbols.
- **`tokenize()` Method**: Orchestrates the tokenization process by iterating through the source code and applying tokenization methods as needed.

### Example Usage:

```python
from Lexer import Lexer

# Initialize Lexer with source code
lexer = Lexer("<core>", "if x < 10 { log 'x is less than 10'; }")

# Tokenize the source code
tokens, error = lexer.tokenize()

if error:
    print("Error:", error)
else:
    # Print tokens
    for token in tokens:
        print(token)
```

## Conclusion

The Lexer class in Squig plays a crucial role in the compilation process by breaking down source code into tokens. By accurately identifying and classifying tokens, Squig can perform subsequent parsing and interpretation tasks, leading to the execution of Squig programs.
