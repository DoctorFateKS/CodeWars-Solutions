/* Challenge Title: Convert a String to a Number
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/544675c6f971f7399a000e79

Challenge Description:
We need a function that can transform a string into a number. 
What ways of achieving this do you know?
Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

My Solution: */

function stringToNumber(str){
    return parseInt(str);
}

// parseInt takes the string (str) and returns an integer.
// If the string starts with numbers, it will convert them.
// If the string contains non-numeric characters, parseInt will stop converting at the first non-numeric character.

/* Example usage:

"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7 */