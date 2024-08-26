/* Challenge Title: Remove First & Last Character
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

Challenge Description:
It's pretty straightforward.  
Your goal is to create a function that removes the first and last characters of a string.
You're given one parameter, the original string.
You don't have to worry about strings with less than two characters.

My Solution: */

function removeChar(str) {
    return str.slice(1, -1);    // Use the slice method to return a new string without the first and last characters
}                               // slice(1, -1) starts at the second character (index 1) and ends at the second-to-last character (index -1)

/* Example usage:
removeChar('Name') === 'am'
removeChar('Information') === 'nformatio'
removeChar('Hello World') === 'ello Worl' */