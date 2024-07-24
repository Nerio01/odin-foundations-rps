//
// get user name
// accept user input and store it in name constant variable 
// output greeting of the user by name
// output rules of the game to the user
// IF number of rounds is > 3 THEN stop the game and output the winner name and score ELSE continue
// start round 
// get randomized computer gesture stored in a variable currentCompAnswer 
// accept user input and store it in currentUserAnswer variable
// validate THEN normalize user input stored in currentUserAnswer 
// IF user input validated THEN compare against currentCompAnswer 
// IF draw THEN start new round
// IF user wins THEN output win response THEN start new round 
// IF user loses THEN output lose responce THEN start new round 
// 
let roundCount = 0; // round counting variable to be later stored inside the main function, max is 3 round.  
const [rock, paper, scissors] = ['rock', 'paper', 'scissors'];

// const getCompHand = () => {
//     const 
// }

const validateUserInput = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();
    if (lowerCaseInput !== rock 
    && lowerCaseInput !== paper 
    && lowerCaseInput !== scissors) {
        return 'invalid';
        // here we should restart the round without changing roundCount value - UPDATE - NVM not required as this will be done inside the main function
    }
    return 'valid';
}

console.log('Testing user input validation - case of invalid input');
console.log(validateUserInput('fist'));
console.log('Testing user input validation - case of valid input');
console.log(validateUserInput('paper'));

const compareHands = (userHand, compHand) => {

    let winner = '';
    if (userHand === compHand) {
        roundCount += 1;
        console.log(`DRAW!
        Starting next round!`);
        return 'draw';
    } 

    switch (true) {
        case ((userHand === rock) && (compHand === scissors)):
        case ((userHand === paper) && (compHand === rock)):
        case ((userHand === scissors) && (compHand === paper)):
            winner = 'user';
            roundCount += 1;
            break;
        case ((userHand === rock) && (compHand === paper)):
        case ((userHand === paper) && (compHand === scissors)):
        case ((userHand === scissors) && (compHand === rock)):
            winner = 'computer';
            roundCount += 1;
            break;
    }

    return `Winner: ${winner}!`;
};
console.log('Testing hand comparison function - case of identical hands');
console.log(compareHands('rock', 'rock'));

console.log('Testing hand comparison function - case of user win');
console.log(compareHands('rock', 'scissors'));

console.log('Testing hand comparison function - case of computer win');
console.log(compareHands('paper', 'scissors'));


// COMBINATIONS 
// ROCK vs SCISSORS - ROCK WIN 
// ROCK vs PAPER - ROCK LOSE  
// ROCK vs ROCK - DRAW
// SCISSORS vs ROCK - SCISSORS LOSE
// SCISSORS vs PAPER - SCISSORS WIN 
// SCISSORS vs SCISSORS - DRAW
// PAPER vs ROCK - PAPER WINS
// PAPER vs SCISSORS - PAPER LOSE
// PAPER VS PAPER - DRAW