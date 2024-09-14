/* Challenge Title: Simple Multiplication
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/583710ccaa6717322c000105/javascript

Challenge Description:
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

My Solution: */

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9; // If the number is even (number % 2 === 0), multiply it by 8. Otherwise (if the number is odd), multiply it by 9
}

// Clever Solution on CodeWars:

function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

// This solution eliminates the need for the ternary condition's repetition of n by placing it outside the conditional.
// n % 2 ? 9 : 8 works well because it checks if n is odd (n % 2 will be 1 for odd numbers) and multiplies by 9 for odd numbers, or by 8 for even numbers.