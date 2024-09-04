const validHands = ['rock', 'paper', 'scissors'];
const [rock, paper, scissors] = validHands; 

const [rockBtn, paperBtn, scissorsBtn] = Array.from(document.querySelectorAll("button"));
const resultContainer = document.querySelector('.result-container');

rockBtn.addEventListener("click", () => playRound(rock));
paperBtn.addEventListener("click", () => playRound(paper));
scissorsBtn.addEventListener("click", () => playRound(scissors));

const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    resultContainer.style.border = '1px solid lightgreen';
    button.style.border = 'solid 1px white';
    button.style.color = 'whitesmoke';
  });
  button.addEventListener("mouseup", () => {
    resultContainer.style.border = '1px solid whitesmoke';
    button.style.border = 'solid 1px lightgreen';
    button.style.color = 'lightgreen';
  });
  button.addEventListener("mouseover", () => { 
    button.style.border = 'solid 1px lightgreen';
    button.style.color = 'lightgreen';
  });
  button.addEventListener("mouseout", () => {
    button.style.border = 'solid 1px white';
    button.style.color = 'white';
  });
});

const generateHand = () => {
    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    };
    return validHands[getRandomIntInclusive(0,2)];
};

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

const finalWinnerDiv = document.createElement("div");
finalWinnerDiv.classList.add('added');
console.log(finalWinnerDiv);
finalWinnerDiv.style.height = '100px';
finalWinnerDiv.style.width = '400px';
finalWinnerDiv.style.borderRadius = '25px';
finalWinnerDiv.style.color = 'lightgreen';
finalWinnerDiv.style.backgroundColor = 'red';
finalWinnerDiv.style.alignSelf = 'center';
finalWinnerDiv.style.visibility = 'hidden';
finalWinnerDiv.style.fontSize = '30px';
finalWinnerDiv.style.display = 'flex';
finalWinnerDiv.style.justifyContent = 'center';
finalWinnerDiv.style.alignItems = 'center';

const optionsDiv = document.querySelector(".options");
optionsDiv.before(finalWinnerDiv);

const results = document.querySelector('.result-container');

const resetAfterVictory = () => {
  if (currentScore.player >= 5 || currentScore.computer >= 5) {
    resetScore();
    finalWinnerDiv.style.visibility = 'hidden';
  }
}

const playRound = (userhand) => {
    resetAfterVictory();
    const humanSelection = userhand;
    const computerSelection = generateHand();
    const roundWinner = compareHands(humanSelection, computerSelection); 
    const output = document.querySelector('.winner');
    updateScore(roundWinner);
    if (currentScore.player >= 5) {
      finalWinnerDiv.textContent = 'Player Won The Game!';
      finalWinnerDiv.style.visibility = 'visible'
    }
    if (currentScore.computer >= 5) {
      finalWinnerDiv.textContent = 'Computer Won The Game!';
      finalWinnerDiv.style.visibility = 'visible'
    }
    updateBoardScore();
    output.textContent = roundWinner;
    return roundWinner;
}

