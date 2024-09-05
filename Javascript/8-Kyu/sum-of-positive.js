/* Challenge Title: Sum of Positive
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

Challenge Description:
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.

My Solution: */

function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    arr[i] > 0 ? sum = sum + arr[i] : sum = sum; // Use of a If... Else structure isn't the best option
  }
  return sum;
}

// Best Practice on Codewars:

function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

/* Example usage:
console.log(positiveSum([1,2,3,4,5]));   Output: 15
console.log(greet([1,-2,3,4,5]));        Output: 13
console.log(positiveSum([]));            Output: 0
console.log(greet([-1,-2,-3,-4,-5]));    Output: 0
console.log(greet([-1,2,3,4,-5]));       Output: 9 */