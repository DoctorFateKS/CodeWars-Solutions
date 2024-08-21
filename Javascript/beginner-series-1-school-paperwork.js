// Challenge Title: Beginner Series #1 - School Paperwork
// Difficulty: 8 kyu
// URL: 

// Challenge Description:
// Your classmates asked you to copy some paperwork for them. 
// You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

//My Solution:
function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0; // // Check if both n and m are positive numbers. If true, return the product of n and m. If either n or m is not positive (i.e., 0 or negative), return 0
  }

// Example usage:
// countBy(5,5) === 25
// countBy(-5,5) === 0