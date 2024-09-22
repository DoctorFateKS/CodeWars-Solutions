/* Challenge Title: Basic Mathematical Operations
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/57356c55867b9b7a60000bd7

Challenge Description:
Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

My Solution: */

function basicOp(operation, value1, value2){
    switch(operation) { 
      case '+': return value1 + value2;
      case '-': return value1 - value2;
      case '*': return value1 * value2;
      case '/': return value1 / value2;
    }
} // There's no default case, so if the operation doesn't match any of the specified cases (+, -, *, /), the function would return undefined.

// Best Practice CodeWars:

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0; // Includes a default case that returns 0. This handles unexpected operations more gracefully by providing a fallback value, preventing the function from returning undefined.
    }
}