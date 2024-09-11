/* Challenge Title: Parse Nice Int From Char Problem
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1

Challenge Description:
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
Write a program that returns the girl's age (0-9) as an integer.
Assume the test input string is always a valid string.
For example, the test input may be "1 year old" or "5 years old".
The first character in the string is always a number.

My Solution: */

function getAge(inputString){
    return parseInt(inputString[0]);
}

// Best solution on Codewars:

function getAge(inputString){
    return parseInt(inputString);
}

// parseInt automatically stops parsing when it encounters a non-numeric character
// So there's no need to isolate the first character.
// Example: if inputString is "4 years old", parseInt will extract the number "4" from the string.