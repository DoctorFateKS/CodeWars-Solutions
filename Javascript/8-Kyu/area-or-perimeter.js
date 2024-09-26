/* Challenge Title: Area or Perimeter
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/5ab6538b379d20ad880000ab

Challenge Description:
You are given the length and width of a 4-sided polygon.
The polygon can either be a rectangle or a square.
If it is a square, return its area.
If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):
6, 10 --> 32
3, 3 --> 9

My Solution: */

const areaOrPerimeter = function(l , w) {
    return l === w ? l * w : (l + w) * 2;
};

// The function calculates either the area of a square (when l and w are equal) or the perimeter of a rectangle (when l and w are different).