/* Challenge Title: Third Angle of a Triangle
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/5a023c426975981341000014

Challenge Description:
You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.
Note: only positive integers will be tested.

My Solution: */

function otherAngle(a, b) {
    return 180 - (a + b);
}

// The sum of angles in a triangle is always 180 degrees.
// Subtract the sum of the two given angles (a and b) from 180 to find the third angle.