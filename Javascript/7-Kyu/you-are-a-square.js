/* Challenge Title: You're a Square
Difficulty: 7 kyu
URL: https://www.codewars.com/kata/54c27a33fb7da0db0100040e

Challenge Description:
Given an integral number, determine if it's a square number:
In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.

My Solution: */

var isSquare = function(n){
    // Math.sqrt(n) returns the square root of 'n'.
    // Number.isInteger() checks if the result is an integer (i.e., no decimal part).
    return Number.isInteger(Math.sqrt(n));
}

// Best solution on Codewars:

function isSquare(n) {
    // Using the modulo operator (%) to check if the remainder when dividing by 1 is 0.
    // If the remainder is 0, it means the square root is an integer.
    return Math.sqrt(n) % 1 === 0;
  }

  /* While both versions effectively check if a number is a perfect square, 
  the second method may be slightly more robust when handling special cases, like non-numeric inputs, 
  since Math.sqrt() on a non-number will return NaN, and NaN % 1 === 0 will correctly return false. */