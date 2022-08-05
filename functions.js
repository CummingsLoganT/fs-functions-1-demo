// In this file, we'll continue with our soccer simulation.
// So recently we talked about a soccer match between the Emerald Eagles and the Draconian Dragons. We used conditional logic to determine soccer match scenarios, and used arrays to manage Mahalia’s backpack. But, there are more than one match in a season. Do we really want to rewrite the same blocks of code over and over again?
// This is where functions come in. Functions allow us to perform the same block of code many times, without having to rewrite the entire block of code. They even allow us to take in parameters to slightly modify the data that the function uses.

// First, let’s practice with data types and string methods. Then we’ll get into writing functions.

// Create a variable that tracks the Eagles’ morale.
let eaglesMorale = 100;

// How would we make this into a string? 
let eagleMoraleStr = String(eaglesMorale);
// Or, by concatenating an empty string:
// let eaglesMoraleStr = eaglesMorale + '';
// console.log(eaglesMorale , typeof eaglesMorale);
// console.log(eagleMoraleStr , typeof eagleMoraleStr);

// How would we make eaglesMorale into a boolean?
let eaglesMoraleBool = Boolean(eaglesMorale);
// console.log(eaglesMoraleBool , typeof eaglesMoraleBool);
// Remember: the only value for eaglesMorale that would give us false would be 

// lets create a string that declaraes a winner. the winjner should be the dragons.
// then lets replace the dragons with the eagles
let theWinnerIs = 'The Dragons are the winners.';
let newWinner = theWinnerIs.replace('Dragons' , 'Eagles');

// now lets just confirm that your string contains 'The Eagles'
// console.log(newWinner.includes('Eagles'));

// now we have to convert our string to kebab case (all lowercase separated by hyphens)
// let newWinnerLower = newWinner.toLowerCase();
// let newWinnerSplit = newWinnerLower.split(' ');
// let newWinnerKebab = newWinnerSplit.join('-');
// Or, with method chaining:
let newWinnerKebab = newWinner.toLowerCase()
                              .split(' ')
                              .join('-');
// Note: the semicolon is only after the very last method call.
// console.log(newWinnerKebab);


// now, lets create a simple function to see if the Emerald Eagles still have morale left, and then console.log the result.
function doEaglesHaveMorale() {
    if (eaglesMorale > 0) {
        console.log('The Eagles have morale left!');
    } else {
        console.log("The Emerald Eagles don't have any morale left.");
    }
}

// so now at any point in time, we can call this function we have just created in order to find out if the Eagles have any fight left in them.

// so we have written this function, but you might notice, it has not actually run yet. This is because functions do not run until they are called. Let's call the above function.
// doEaglesHaveMorale();

// now, lets create a function that can be used every time the Eagles lose a match.
let reduceMorale = (amount) => {
    eaglesMorale -= amount;
};

// lets have the Emerald Eagles lose an importyant match. A match worth 20 morale.
reduceMorale(20);

// with out function, we can call our block of code over and over again. Call the function again, because the Eagles just lost another match worth 12 morale.
reduceMorale(12);

//  if that wasn't all, the Eagles lost a third match. However, they were already expecting to lose, so this match is only 6 morale.
reduceMorale(6);

// at this point the Emerald Eagles have lost a few times. it would probably be a good time to check and make sure they are still up[ for matches. Call your doEaglesHaveMorale function.
// doEaglesHaveMorale();

//Thinking about it further, shouldn’t we check to see if the Eagles still have morale after each time they lose a match? We could call the doEaglesHaveMorale function after each time they lose. But, there is an easier way to do that. Modify your reduceMorale function to call doEaglesHaveMorale after it has run all its other code.
reduceMorale = (amount) => {
    eaglesMorale -= amount;
    doEaglesHaveMorale();
};

reduceMorale(33);
reduceMorale(33);
reduceMorale(34);

// yes, you can call functions from almost anywhere including from inside another function.
// it is important to know that functions can be set up to have as many parameters as you would like. in this next function, we will use two. 

// lets create another function that allows 2 teams to shake hands with each other.
const shakeHands = function(team1 , team2) {
    console.log(`The ${team1} and the ${team2} shake hands.`);
};
shakeHands('Eagles' , 'Dragons');

// FURTHER STUDY

//So far, we have just been console logging in our functions. But, functions can actually return a value back to its call site. Let’s create a function to represent a dice role.
function rolldice() {
    let possibleRoles = [1 , 2 , 3 , 4 , 5 , 6];
    let randomNumber = Math.floor(Math.random() * possibleRoles.length);
    return possibleRoles[randomNumber];
}
let firstRoll = rolldice(); 
let secondRoll = rolldice();
console.log(firstRoll , secondRoll);

// further study on math.floor:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// Further study on Math.random:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// now lets take this one step further. lets create a function that calls rolldice twice, and multiplies the returned rolls together.
function diceMultiplier() {
    let firstRoll = rolldice();
    let secondRoll = rolldice();

    return firstRoll * secondRoll;
}
let multipliedNumber = diceMultiplier();
console.log(multipliedNumber);
// note: the firstroll and secondroll variables above are scoped to the dicemultiplier function, and are not related to the variable with the same name in the outer scope.
