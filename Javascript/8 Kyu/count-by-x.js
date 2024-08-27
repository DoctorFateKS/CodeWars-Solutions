/* Challenge Title: Count by X
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/5513795bd3fafb56c200049e

Challenge Description:
Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ).

My Solution: */

function countBy(x, n) {
  let z = [];                   // initialize an empty array to store the result
  for(i = 1; i <= n; i++) {     // loop from 1 to n
    z[i-1] = x * i;             // assign the value of (x * i) to the [i-1]th index of the array z
  }
  return z;                     // return the array z containing the multiple of x
}

// Best Practice on Codewars:

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);            // Calculate (x * i) and add it to the array z using push
  }
  return z;
}

/* The push method is a built-in function in JavaScript that adds one or more elements to the end of an array. 
It is commonly used when you want to dynamically add elements to an array without needing to manage the array's indices manually.

Here, z.push(x * i) is used to append each multiple of x (from x * 1 to x * n) to the array z. 
This is done within a loop, so by the end of the loop, z contains all the desired multiples of x.

Example usage:
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10] */