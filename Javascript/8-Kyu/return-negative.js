/* Challenge Title: Return Negative
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/55685cd7ad70877c23000102

Challenge Description:
In this simple assignment you are given a number and have to make it negative.
But maybe the number is already negative?

Examples:
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

My Solution: */

function makeNegative(num) {
    return num > 0 ? -num : num; // If the number is positive, return its negative equivalent. Otherwise, return the number as it is
}

// Clever solution on CodeWars:

function makeNegative(num) {
    return -Math.abs(num); // Return the negative of the absolute value of the number
}