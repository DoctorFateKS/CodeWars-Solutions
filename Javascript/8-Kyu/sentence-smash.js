/* Challenge Title: Sentence Smash
   Difficulty: 8 kyu
   URL: https://www.codewars.com/kata/53dc23c68a0c93699800041d/javascript

   Challenge Description:
   Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
   You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
   Be careful, there shouldn't be a space at the beginning or the end of the sentence!
 
   My Solution:
*/

function smash (words) {
    return words.toString().replaceAll(',', ' '); // Convert the array to a string where each element is separated by a comma and replace all commas with spaces, effectively joining the words with spaces
};

// Best Practice on Codewars:

smash = function (words) {
    return words.join(" "); // Use the array method 'join' to concatenate all elements into a single string with a space separating each word
};

/* Using join(" ") is more efficient than converting the array to a string and then replacing commas.
join is specifically designed to concatenate array elements with a separator and is optimized for this purpose.
join handles non-string elements gracefully by converting them to strings as part of the concatenation process.

Example usage:
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great' */