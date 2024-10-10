/* Challenge Title: Vowel Count
Difficulty: 7 kyu
URL: https://www.codewars.com/kata/54ff3102c1bad923760001f3

Challenge Description:
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

My Solution: */

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']; // Define an array containing all the vowels we are looking for
    let count = 0; // Initialize a counter to keep track of the number of vowels found
    for(let i = 0; i < vowels.length; i++) { // Loop through each vowel in the vowels array
      for(let j = 0; j < str.length; j++) { // Loop through each character in the input string
        if(vowels[i] === str[j]) { // Check if the current vowel matches the current character in the string
          count++; // If a match is found, increment the count
        }
      }
    }
    return count; // Return the total count of vowels found in the string
}

// Best Practice on Codewars:

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

/* Use the match method to find all occurrences of vowels (a, e, i, o, u) in the string.
   The regular expression /[aeiou]/ig:
   - [aeiou] matches any vowel (a, e, i, o, u).
   - 'i' makes the match case-insensitive, so it finds both uppercase and lowercase vowels.
   - 'g' makes the search global, meaning it will find all occurrences, not just the first one.
   If no vowels are found, match() returns null, so we use "|| []" to return an empty array. */