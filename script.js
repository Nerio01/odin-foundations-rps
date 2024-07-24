const prompt = require("prompt-sync")({ sigint: true });

const validHands = ['rock', 'paper', 'scissors'];
const [rock, paper, scissors] = validHands; // global variable for ease of reference and comparison 

const generateHand = () => {
    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    };
    return validHands[getRandomIntInclusive(0,2)];
}

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

const compareHands = (userHand, compHand) => {

    let winner = '';

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
        default:
            return 'draw';
    }

    return winner;
};

const gameRound = () => {
    const userHand = prompt("Enter rock, paper or scissors: ");
    if (validateUserInput(userHand) === `invalid`) {
        console.log('Invalid hand. Please enter "rock", "paper" or "scissors".');
        return;
    }
    const compHand = generateHand();
    const winner = compareHands(userHand, compHand); 
    return winner;
}

const rockPaperScissors = () => {
    console.log('Welcome to Rock Paper Scissors game!');
    const userName = prompt('What is your name: ');
    console.log(`Hello, ${userName}!`);
    console.log('This game will consist of three rounds. Lets start!');
    let userScore = 0;
    let computerScore = 0;
    let rounds = 1;
    while (rounds <= 3) {
        const result = gameRound();
        if (result === 'computer') {
            computerScore += 1;
            rounds += 1;
        }
        if (result === 'user') {
            userScore += 1;
            rounds += 1;
        }
        if (result === 'draw') {
            rounds += 1;
        }
        if (result === 'draw') {
            console.log('Draw!');
        }
        console.log (`User: ${userScore}, Computer: ${computerScore}`);
    }

    console.log (`User: ${userScore}, Computer: ${computerScore}`);
    if (userScore === computerScore) {
        console.log('The game ends with DRAW!');
        return;
    }
    if (userScore > computerScore) {
        console.log ('You win!');
        return;
    }
    console.log('You lost!');
    return;
};

rockPaperScissors();
    