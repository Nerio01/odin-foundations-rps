const validHands = ['rock', 'paper', 'scissors'];
const [rock, paper, scissors] = validHands; 

const [rockBtn, paperBtn, scissorsBtn] = Array.from(document.querySelectorAll("button"));

rockBtn.addEventListener("click", () => playRound(rock));
paperBtn.addEventListener("click", () => playRound(paper));
scissorsBtn.addEventListener("click", () => playRound(scissors));


const generateHand = () => {
    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    };
    return validHands[getRandomIntInclusive(0,2)];
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

const currentScore = {
  player: 0,
  computer: 0,
}

const updateScore = (roundWinner) => {
  if (roundWinner === 'computer') {
    currentScore.computer += 1;
  }
  if (roundWinner === 'user') {
    currentScore.player += 1;
  }
}

const resetScore = () => {
  currentScore.player = 0;
  currentScore.computer = 0;  
}

const updateBoardScore = () => {
  const playerScore = document.querySelector('div .player-score');
  const computerScore = document.querySelector('div .computer-score');
  playerScore.textContent = currentScore.player;
  computerScore.textContent = currentScore.computer;
}

const playRound = (userhand) => {
    const humanSelection = userhand;
    const computerSelection = generateHand();
    const roundWinner = compareHands(humanSelection, computerSelection); 
    const output = document.querySelector('.winner');
    updateScore(roundWinner);
    console.log(currentScore);
    updateBoardScore();
    output.textContent = roundWinner;
    return roundWinner;
}


   
