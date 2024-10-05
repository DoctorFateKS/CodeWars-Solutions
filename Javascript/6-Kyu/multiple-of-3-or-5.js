/* Challenge Title: Multiple of 3 or 5
Difficulty: 6 kyu
URL: https://www.codewars.com/kata/514b92a657cdc65150000006

Challenge Description:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.
Note: If the number is a multiple of both 3 and 5, only count it once.

My Solution: */

function solution(number){
    let sum = 0; // Initialize a variable to keep track of the sum of multiples
    for(let i = number-1; i > 0; i--) { // Loop through numbers from 'number-1' down to 1
      sum = i % 3 === 0 || i % 5 === 0 ? sum += i : // Check if 'i' is divisible by 3 or 5. If true, add 'i' to the sum
            i % 3 === 0 && i % 5 === 0 ? sum = sum : // Check if 'i' is divisible by both 3 and 5. If true, leave the sum unchanged.
            i < 0 ? 0 : sum; // If 'i' is negative, set the sum to 0
    }
    return sum; // Return the final sum
}

// Best Practice on CodeWars:

function solution(number){
    var sum = 0; // Initialize a variable to accumulate the sum of multiples of 3 or 5
    
    for(var i = 1;i< number; i++){ // Loop through all numbers from 1 up to (but not including) 'number'
      if(i % 3 == 0 || i % 5 == 0){ // If 'i' is divisible by 3 or 5, add it to the sum
        sum += i
      }
    }
    return sum; // Return the final sum after the loop
}