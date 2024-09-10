/* Challenge Title: Counting Sheep...
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/54edbc7200b811e956000556

Challenge Description:
Consider an array of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present).

My Solution: */

function countSheeps(sheep) {
    let count = 0; // Initialize a counter to keep track of the number of `true` values (i.e., present sheep).
    for (i = 0; i < sheep.length; i++) {
      sheep[i] ? count++ : count = count; // If the current element is `true`, increment the `count`. Otherwise, do nothing (the `count` remains the same).
    }
    return count; // Return the final count of `true` values (i.e., the number of present sheep).
}

// Best solution on Codewars:

function countSheeps(arrayOfSheeps) {
    // Use the `filter` method to create a new array containing only `truthy` values from `arrayOfSheeps`.
    // The `Boolean` constructor is used as the callback function, which effectively filters out any `falsy` values.
    // The `length` property of the filtered array gives the count of `true` values.
    return arrayOfSheeps.filter(Boolean).length;
  }

  // By using filter(Boolean), the code clearly communicates that the intent is to count the true values in the array.
  // The use of filter is a functional approach, which is considered a best practice in JavaScript because it leads to more predictable and less error-prone code.