/* Challenge Title: Reversed Sequence
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/5a00e05cc374cb34d100000d

Challenge Description:
Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]

My Solution: */

const reverseSeq = n => {
    let reverse = [];
    for(let i = n; i >= 1; i--) { // Loop from n down to 1, decrementing by 1 each iteration
      reverse.push(i); // Push the current value of i into the reverse array
    }
    return reverse;
};