/* Challenge Title: Coakroach
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/javascript

Challenge Description:
The cockroach is one of the fastest insects.
Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

My Solution: */

function cockroachSpeed(speed) {
    return Math.floor(speed * (100000 / 3600)); // Math.floor is used to round down the result to the nearest whole number
}
  
/* Example usage:
1.08 --> 30 */