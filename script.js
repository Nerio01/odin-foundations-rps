const validHands = ['rock', 'paper', 'scissors'];
const [rock, paper, scissors] = validHands; 

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
            break;
        case ((userHand === rock) && (compHand === paper)):
        case ((userHand === paper) && (compHand === scissors)):
        case ((userHand === scissors) && (compHand === rock)):
            winner = 'computer';
            break;
        default:
            return 'draw';
    }

    return winner;
};
const getHumanChoice = () => prompt("Enter rock, paper or scissors: ");
const playRound = () => {
    const humanSelection = getHumanChoice();
    const computerSelection = generateHand();

    if (validateUserInput(humanSelection) === `invalid`) {
        console.log('Invalid hand. Please enter "rock", "paper" or "scissors".');
        return;
    }
    const winner = compareHands(humanSelection, computerSelection); 
    return winner;
}

const playGame = () => {
    console.log('Welcome to Rock Paper Scissors game!');
    const userName = prompt('What is your name: ');
    console.log(`Hello, ${userName}!`);
    console.log('This game will consist of three rounds. Lets start!');
    let userScore = 0;
    let computerScore = 0;
    let rounds = 1;
    while (rounds <= 5) {
        const result = playRound();
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

playGame();
    