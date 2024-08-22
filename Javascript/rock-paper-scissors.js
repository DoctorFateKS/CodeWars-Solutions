// Challenge Title: Rock, Paper, Scissors
// Difficulty: 8 kyu
// URL: https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// Challenge Description:
// Let's play!   
// You have to return which player won!
// In case of a draw return 'Draw!'.

//My Solution:
const rps = (p1, p2) => {
    if((p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock") || (p1 === "rock" && p2 === "scissors")) {          // Check if Player 1 win
      return 'Player 1 won!';
    } else if((p1 === "scissors" && p2 === "rock") || (p1 === "paper" && p2 === "scissors") || (p1 === "rock" && p2 === "paper")) {   // Check if Player 2 win
      return 'Player 2 won!';
    } else {
      return 'Draw!';   // If neither player wins, it must be a draw
    }
  };

// Best Practice on Codewars:
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";     // check if both players made the same choice, resulting in a draw
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};      // Define the rules in an object, each key is a choice, and its value is the choice it beats
    if (p2 === rules[p1]) {     // Check if Player 2's choice matches what Player 1's choice beats. If it does, Player 1 wins
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";     // Else, Player 2 wins
    }
  };

// Instead of writing out multiple conditions to cover all possible outcomes, this version simplifies the logic by using a lookup table (rules object).
// This table defines the winning conditions in a concise manner.

// Example usage:
// rps("paper","scissors") === "Player 1 won!"
// rps("rock","paper") === "Player 2 won!"
// rps("paper","paper") === "Draw!"