// Challenge Title: Convert Boolean Value to String 'Yes' or 'No'
// Difficulty: 8 kyu
// URL: https://www.codewars.com/kata/53369039d7ab3ac506000467

// Challenge Description:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//My Solution:
function boolToWord(bool){
    return bool ? 'Yes' : 'No';     // If bool is true, return 'Yes'; otherwise, return 'No'
  }


// Example usage:
// boolToWord(true) === 'Yes'
// boolToWord(false) === 'No'