# Unexpected String Concatenation in JavaScript

This example demonstrates a common error in JavaScript due to its loose typing system. The + operator performs both addition and string concatenation depending on the operands.  When one operand is a string, the + operator concatenates the operands as strings instead of performing arithmetic addition.

This can be unexpected and lead to subtle bugs in your code.  The solution shows how to avoid this by explicitly type checking your variables before the operation.
