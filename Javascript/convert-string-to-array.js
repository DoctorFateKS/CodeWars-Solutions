/* Challenge Title: Convert a String to an Array
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

Challenge Description:
Write a function to split a string and convert it into an array of words.

My Solution: */

function stringToArray(string){
    return string.split(' ');      // Split the input string by spaces and return the resulting array
}

/* Example usage:
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"] */