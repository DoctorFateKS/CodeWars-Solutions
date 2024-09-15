/* Challenge Title: Switch It Up
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/javascript

Challenge Description:
When provided with a number between 0-9, return it in words.
Input :: 1
Output :: "One".

My Solution: */

function switchItUp(number){
    switch(number) { // Use a switch statement to match the given number
        case 0: 
          return 'Zero';
          break;
        case 1: 
          return 'One';
          break;
        case 2: 
          return 'Two';
          break;
        case 3: 
          return 'Three';
          break;
        case 4: 
          return 'Four';
          break;
        case 5: 
          return 'Five';
          break;
        case 6: 
          return 'Six';
          break;
        case 7: 
          return 'Seven';
          break;
        case 8: 
          return 'Eight';
          break;
        case 9: 
          return 'Nine';
          break;
    }
}

// Clever Solution on CodeWars:

switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

/* Explanation:
- The array holds the string representation of each digit (0 through 9).
- Instead of using a long switch statement or multiple conditionals, we directly access the array element at index `n`.
- This approach is both concise and efficient, as it reduces the amount of code and eliminates the need for multiple `case` checks.
- The function leverages the fact that the index of an array corresponds to the value of the number, making it a simple lookup operation.
- The arrow function (`n => ...`) further shortens the syntax by implicitly returning the result. */