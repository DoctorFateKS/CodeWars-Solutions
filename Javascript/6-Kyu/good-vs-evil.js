/* Challenge Title: Good vs Evil
Difficulty: 6 kyu
URL: https://www.codewars.com/kata/52761ee4cffbc69732000738

Challenge Description:
Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil.
Different races will certainly be involved. Each race has a certain worth when battling against others.
On the side of good we have the following races, with their associated worth:

Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10

On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10

Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.
Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters. 
Each parameter will be a string of multiple integers separated by a single space. 
Each string will contain the count of each race on the side of good and evil.
The first parameter will contain the count of each race on the side of good in the following order: Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order: Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. 
The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

My Solution: */

function goodVsEvil(good, evil){
    const goodArray = good.split(' '); // Split the 'good' and 'evil' strings into arrays of numbers representing each race's count
    const evilArray = evil.split(' ');
    // Calculate the total power of the 'good' and 'evil' side and multiplying the count of each race by their corresponding power value
    const goodSum = (goodArray[0] * 1) + (goodArray[1] * 2) + (goodArray[2] * 3) + (goodArray[3] * 3) + (goodArray[4] * 4) + (goodArray[5] * 10)
    const evilSum = (evilArray[0] * 1) + (evilArray[1] * 2) + (evilArray[2] * 2) + (evilArray[3] * 2) + (evilArray[4] * 3) + (evilArray[5] * 5) + (evilArray[6] * 10)
    // Determine the result of the battle based on the total power of each side
    if(goodSum > evilSum) {
      return 'Battle Result: Good triumphs over Evil';
    } else if(goodSum < evilSum) {
      return 'Battle Result: Evil eradicates all trace of Good';
    } else return 'Battle Result: No victor on this battle field';
}

// Best Practice on CodeWars:

function goodVsEvil(good, evil) {  
    var getWorth = function( side, worth ) {
      return side.split(' ').reduce( function(result, value, index) { 
        return result + (worth[index] * value);
      }, 0);
    }
  
    var result = getWorth( good, [1,2,3,3,4,10] ) - getWorth( evil, [1,2,2,2,3,5,10] );
  
    return result > 0 ? "Battle Result: Good triumphs over Evil" :
           result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                        "Battle Result: No victor on this battle field";
}

/* The getWorth function is defined to encapsulate the logic of calculating the total worth of a side. 
This helps in reducing code duplication, as the calculation is required for both good and evil sides. 
If changes are needed in the calculation, they can be made in one place.

By encapsulating the worth calculation within the helper function, the main function remains cleaner and focused on determining the battle result, improving overall code readability. */