/* Challenge Title: Are You Playing Banjo ?
Difficulty: 8 kyu
URL: https://www.codewars.com/kata/53af2b8861023f1d88000832

Challenge Description:
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.

My Solution: */

function areYouPlayingBanjo(name) {
    // Check if the first character of the name is 'r' or 'R'
    // If true, return the string stating that the person plays banjo
    // Otherwise, return the string stating that the person does not play banjo
    return name[0] === 'r' || name[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`; 
}

// Clever Solution on CodeWars:

function areYouPlayingBanjo(name) {
    // Convert the first letter of the name to lowercase and check if it's 'r'
    // If the first letter is 'r', append ' plays', otherwise append ' does not play'
    // Append 'banjo' at the end of the string
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

// The use of toLowerCase() simplifies the comparison by handling both 'r' and 'R' in a single operation, without needing multiple checks.