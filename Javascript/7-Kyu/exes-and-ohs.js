/* Challenge Title: Exes & Ohs
Difficulty: 7 kyu
URL: https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript

Challenge Description:
Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.
The string can contain any char.

My Solution: */

function XO(str) {
    let countX = 0;
    let countO = 0;
    str = str.toLowerCase();                     // Convert the input string to lowercase to make the comparison case-insensitive
    for(let i = 0; i < str.length; i++) {        // Loop through each character in the string
      if(str[i] == 'x') {                      
        countX++;                                // If the character is 'x', increment the countX counter
      } else if (str[i] == 'o') {
        countO++;                                // If the character is 'o', increment the countO counter
      }
    }
    return countX == countO ? true : false;      // Check if the counts of 'x' and 'o' are equal and return true if they are, false otherwise
}

// Best solution on Codewars:

function XO(str) {
    /* Use a regular expression to find all 'x' characters in the string, ignoring case
    'g' flag ensures that all matches are found, not just the first one
    'i' flag makes the search case-insensitive */
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);                        // Use a regular expression to find all 'o' characters in the string, ignoring case
    // Compare the lengths of the arrays returned by 'match' (or 0 if null) to check if they are equal
    return (x && x.length) === (o && o.length);      // The 'x && x.length' and 'o && o.length' ensure that if 'x' or 'o' is null, it is treated as 0
}

/* Example usage:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */