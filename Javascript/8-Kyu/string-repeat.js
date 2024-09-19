/* Challenge Title: String Repeat
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/javascript

Challenge Description:
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

My Solution: */

function repeatStr (n, s) {
    return s.repeat(n); // The repeat() method creates and returns a new string which contains the original string 's' repeated 'n' times
}