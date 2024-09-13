/* Challenge Title: Square(n) Sum
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/515e271a311df0350d00000f/javascript

Challenge Description:
Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9

My Solution: */

function squareSum(numbers){
    const initialValue = 0;
    const sum = numbers.reduce( // Use the reduce method to iterate over each number in the array,
      (accumulator, currentValue) => accumulator + (currentValue * currentValue), // squaring each number and adding it to the accumulator.
      initialValue, // Starting with initialValue as 0.
    );
    return sum;
}

// Best solution on Codewars:

function squareSum(numbers){
    return numbers.reduce(function(sum, n){ // Use the reduce method to iterate over the array and define the reducer function inline as an anonymous function.
      return (n*n) + sum; // For each number n, add its square to the sum.
    }, 0) // Initial value of sum is set to 0.
}

// This solution eliminates the need to store an initialValue in a separate variable.