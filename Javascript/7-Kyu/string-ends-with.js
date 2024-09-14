/* Challenge Title: String Ends With
Difficulty: 7 kyu
URL: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/javascript

Challenge Description:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

My Solution: */

function solution(str, ending){
  return str.endsWith(ending); // The method 'endsWith' checks if the string 'str' ends with the specified 'ending'. It returns true if 'str' ends with 'ending', otherwise it returns false
}

/* Example usage:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */