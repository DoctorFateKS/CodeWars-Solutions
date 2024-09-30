/* Challenge Title: Find Maximum and Minimum Value of a List
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/577a98a6ae28071780000989

Challenge Description:
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

You may consider that there will not be any empty arrays/vectors.

My Solution: */

var min = function(list){
    list.sort((a, b) => a - b); // Sort the list in ascending order (smallest to largest)
    return list[0]; // Return the first element, which is the smallest after sorting
}

var max = function(list){
    list.sort((a, b) => b - a); // Sort the list in descending order (largest to smallest)
    return list[0]; // Return the first element, which is the largest after sorting
}

// Best Practice on Codewars:

const min = (list) => Math.min(...list); // The spread operator (...) expands the array into individual arguments for Math.min
const max = (list) => Math.max(...list); // The spread operator (...) expands the array into individual arguments for Math.max

// This version uses Math.min and Math.max, which only iterate through the list once, making it more efficient for large lists.
// This version doesn't alter the input list, preserving its original order.