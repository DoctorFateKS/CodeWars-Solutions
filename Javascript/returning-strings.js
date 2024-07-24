// Challenge Title: Returning Strings
// Difficulty: 8 kyu
// URL: https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript

// Challenge Description:
// Make a function that will return a greeting statement that uses an input; y
// Your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]

// My Solution:
function greet(name){
  return `Hello, ${name} how are you doing today?`; // I use template literals to create a string that includes the value of `name`
}

// Example usage:
// console.log(greet("Alice"));  // Output: "Hello, Alice how are you doing today?"
// console.log(greet("Bob"));    // Output: "Hello, Bob how are you doing today?"
