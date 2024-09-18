/* Challenge Title: Correct the Mistake of the Character Recognition Software
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/577bd026df78c19bca0002c0/javascript

Challenge Description:
Character recognition software is widely used to digitise printed texts.
Thus the texts can be edited, searched and stored on a computer.
When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
Your task is correct the errors in the digitised text.
You only have to handle the following mistakes:
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1

My Solution: */

function correct(string) {
    return string.replaceAll('1','I').replaceAll('0','O').replaceAll('5','S'); // Use the 'replaceAll' method to replace all occurrences of '1' with 'I', '0' with 'O', and '5' with 'S', then return the modified string.
}

// Best Practice on CodeWars:

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

// To ensure compatibility with older browsers, the replace() method combined with regular expressions (/0/g, /1/g, /5/g) is preferred. 
// The g flag in the regular expression ensures a global replacement of all occurrences.