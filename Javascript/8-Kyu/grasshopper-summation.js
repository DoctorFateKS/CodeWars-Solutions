/* Challenge Title: Grasshopper - Summation
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/55d24f55d7dd296eb9000030

Challenge Description:
Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0.
Your function only needs to return the result.

My Solution:  */

var summation = function (num) {
  let sum = 0;                     // Initialize the variable 'sum' to store the cumulative sum
  for(i = 1; i <= num; i++) {      // Loop from 1 to the given number 'num'
    sum += i;                      // Add the current value of 'i' to 'sum'
  }
  return sum;                      // Return the final summation result
}

/* Example usage:
summation(2) === 3 (1 + 2)
summation(8) === 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) */