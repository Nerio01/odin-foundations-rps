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
const handCombinations = ['rock', 'paper', 'scissors'];
const [rock, paper, scissors] = handCombinations;

// const getCompHand = () => {
//     const 
// }

const compareHands = (userHand, compHand) => {

    if (userHand === compHand) {
        roundCount += 1;
        console.log(`DRAW!
        Starting next round!`);
        return 'draw';
    } 
}

console.log(compareHands('rock', 'rock'));

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