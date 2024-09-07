/* Challenge Title: Opposite Attract
   Difficulty: 8 kyu
   URL: https://www.codewars.com/kata/555086d53eac039a2a000083

   Challenge Description:
   Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
   If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
   Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

   My Solution:
*/

function lovefunc(flower1, flower2){
    // Calculate the difference between the two flower numbers and check if it's odd
    // If the difference is odd, the result of (flower1 - flower2) % 2 will not be 0, so the function returns true
    // If the difference is even, the function returns false
    return (flower1 - flower2) % 2 != 0;
}

// Best Practice on Codewars:

function lovefunc(flower1, flower2){
    // Check if flower1 is odd and flower2 is even, or if flower1 is even and flower2 is odd
    // flower1 % 2 !== flower2 % 2 ensures the function returns true only when one number is odd and the other is even
    return flower1 % 2 !== flower2 % 2;
}

// The use of !== ensures that not only the values are compared but also their types.
// This is a good practice in JavaScript to avoid unexpected behavior due to type coercion.
// In this specific case, the types are always numbers, but using !== is still a good habit.

