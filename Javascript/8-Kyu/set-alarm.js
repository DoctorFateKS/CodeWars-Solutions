/* Challenge Title: L1: Set Alarm
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/568dcc3c7f12767a62000038/javascript

Challenge Description:
Write a function named setAlarm which receives two parameters.
The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm).
It should return false otherwise.

My Solution: */

function setAlarm(employed, vacation){
    return employed && vacation === false ? true : false;
}

// Check if employed is true and vacation is false.
// If both conditions are met, return true, meaning the alarm should be set.
// Otherwise, return false, meaning the alarm should not be set.

// Best solution on Codewars:

const setAlarm = (employed, vacation) => employed && !vacation;

// This solution removes unnecessary elements (the ternary operator and true/false literals). 
// employed && !vacation is straightforward and expresses the logic clearly without extra symbols.

/* Example Usage:
employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false */