/* Challenge Title: You Only Need One
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/57cc975ed542d3148f00015b

Challenge Description:
You will be given an array a and a value x.
All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.

My Solution: */

function check(a, x) {
    return a.indexOf(x) !== -1 // // The condition checks whether the return value of 'indexOf' is not equal to -1, meaning that 'x' exists in the array.
}

// Best Practice on CodeWars:

const check = (a,x) => a.includes(x); // Using includes makes the intent of checking whether an element exists more obvious than using indexOf and comparing the result with -1.