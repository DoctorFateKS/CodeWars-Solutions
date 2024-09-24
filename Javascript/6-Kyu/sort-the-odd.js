/* Challenge Title: Sort the Odd
Difficulty: 6 kyu
URL: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

Challenge Description:
You will be given an array of numbers.
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

My Solution: */

function sortArray(array) {
    const filteredArray = array.filter((number) => number % 2 !== 0); // Filter the array to get only the odd numbers
    filteredArray.sort(function(a, b) { // Sort the odd numbers in ascending order
        return a - b;
    });
    let index = 0 // Initialize an index to keep track of the position in the sorted odd array
    for(let i = 0; i < array.length; i++) { // Iterate through the original array
      if(array[i] % 2 !== 0) {
        array[i] = filteredArray[index]; // If the current element is odd, replace it with the sorted odd number
        index++; // // Move to the next odd number in the sorted array
      }
    }
    return array; // Return the modified array with odd numbers sorted and even numbers unchanged
}

// Best practice on CodeWars:

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b); // Filter and sort the odd numbers in ascending order
    return array.map((x) => x % 2 ? odd.shift() : x); // Use map to return a new array with odd numbers replaced by sorted odd numbers, and even numbers left untouched
}

/* 
Using map avoids side effects and keeps the code cleaner. 
Instead of modifying the original array directly with a for loop, we create and return a new transformed array.
shift() removes the first element from the sorted odd array and returns it. 
This is efficient in this case because we only need to replace odd numbers in the order they appear, ensuring that each replacement happens in constant time.
*/