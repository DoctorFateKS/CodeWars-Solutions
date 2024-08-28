/* Challenge Title: Beginner Series #1 - School Paperwork
Difficulty: 7 kyu
URL: https://www.codewars.com/kata/558fc85d8fd1938afb000014/javascript

Challenge Description:
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.

My Solution: */

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);           // Sort the array of numbers in ascending order (smallest to largest)
    return numbers[0] + numbers[1];         // Return the sum of the first two elements (which are the two smallest numbers)
};

// The sort() function sorts the numbers in ascending order. The comparison function (a, b) => a - b ensures that the numbers are sorted numerically rather than lexicographically (which is the default for sort()).

/* Example usage:
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455 */