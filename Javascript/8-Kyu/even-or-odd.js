/* Challenge Title: Even or Odd
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

Challenge Description:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

My Solution: */

function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

// Use the modulo operator (%) to check if the number is divisible by 2
// If the remainder is 0, the number is even, otherwise it is odd
// The ternary operator (?) returns 'Even' if the condition is true (number is divisible by 2)
// Otherwise, it returns 'Odd' if the condition is false (number is not divisible by 2)