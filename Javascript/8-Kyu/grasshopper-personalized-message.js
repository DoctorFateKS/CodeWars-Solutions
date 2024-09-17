/* Challenge Title: Grasshopper - Personalized Message
   Difficulty: 8 kyu
   URL: https://www.codewars.com/kata/5772da22b89313a4d50012f7

   Challenge Description:
   Create a function that gives a personalized greeting.
   This function takes two parameters: name and owner.
   Use conditionals to return the proper message:
   name equals owner	'Hello boss'
   otherwise	'Hello guest'

   My Solution:
*/

function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
}

// Use a ternary operator to check if 'name' is equal to 'owner'
// If 'name' is equal to 'owner', return 'Hello boss'
// Otherwise, return 'Hello guest'