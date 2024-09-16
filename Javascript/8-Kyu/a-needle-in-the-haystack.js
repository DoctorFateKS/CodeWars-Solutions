/* Challenge Title: A Needle in the Haystack
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/javascript

Challenge Description:
Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

My Solution: */

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

// Use the indexOf method to search for the string "needle" within the array 'haystack'
// The indexOf method returns the position (index) of "needle" in the array
// Concatenate the result into a string that indicates where the needle was found