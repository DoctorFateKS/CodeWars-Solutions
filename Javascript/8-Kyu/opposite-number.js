/* Challenge Title: Opposite Number
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/56dec885c54a926dcd001095/javascript

Challenge Description:
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

My Solution: */

function opposite(number) {
    return number - (number * 2); // Subtract the product of the number and 2 from the number. This effectively flips the sign of the number to return its opposite.
}

// Best solution on Codewars:

function opposite(number) {
    return(-number); // Simply negate the number by prefixing it with a minus sign.
}

// This solution uses the unary minus operator (-) to directly negate the number.
// This is the simplest and most efficient way to return the opposite of a number in JavaScript.

/* Example Usage:
1: -1
14: -14
-34: 34 */