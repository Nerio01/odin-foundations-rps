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

const dynamicPopupContainer = document.createElement("div");


const styleAsWinnerDiv = (element) => {
  element.classList.add('added');
  element.style.height = '50px';
  element.style.width = '400px';
  element.style.borderRadius = '25px';
  element.style.color = 'lightgreen';
  element.style.backgroundColor = 'black';
  element.style.alignSelf = 'center';
  element.style.visibility = 'hidden';
  element.style.fontSize = '30px';
  element.style.display = 'flex';
  element.style.justifyContent = 'center';
  element.style.alignItems = 'center';
};

const styleAsRoundResult = (element) => {
  element.classList.add('added');
  element.style.heigth = "400px";
  element.style.width = "700px";
  element.style.borderRadius = '20px';
  element.style.color = 'lightgreen';
  element.backgroundColor = 'rgba(255 255 255 0.1)';
  element.style.alignSelf = 'center';
  element.style.justifyContent = 'center';
  element.style.fontSize = '30px';
  element.style.display = 'flex';
  element.style.alignItems = 'center';
  element.style.visibility = 'hidden';
};


const optionsDiv = document.querySelector(".options");
optionsDiv.before(dynamicPopupContainer);

const results = document.querySelector('.result-container');

const resetAfterVictory = () => {
  if (currentScore.player >= 5 || currentScore.computer >= 5) {
    resetScore();
    dynamicPopupContainer.style = 0;
    dynamicPopupContainer.style.visibility = 'hidden';
  }
};

const displayRoundResult = (usrHand, compHand, win) => {
  if (win === 'computer') {
    styleAsRoundResult(dynamicPopupContainer);
    dynamicPopupContainer.textContent = 
      `Computer wins this round!
    ${compHand} beats ${usrHand}! 
    `
    dynamicPopupContainer.style.visibility = 'visible';
  }
  if (win === 'user'){
    styleAsRoundResult(dynamicPopupContainer);
    dynamicPopupContainer.textContent = 
      `Player wins this round!
    ${usrHand} beats ${compHand}! 
    `
    dynamicPopupContainer.style.visibility = 'visible';
  }
  if (win === 'draw'){
    styleAsRoundResult(dynamicPopupContainer);
    dynamicPopupContainer.textContent = 
      `This round ends with draw!`
    dynamicPopupContainer.style.visibility = 'visible';
  }
};

const playRound = (userhand) => {
    resetAfterVictory();
    const humanSelection = userhand;
    const computerSelection = generateHand();
    const roundWinner = compareHands(humanSelection, computerSelection); 
    const output = document.querySelector('.winner');
    updateScore(roundWinner);
    updateBoardScore();
    displayRoundResult(humanSelection, computerSelection, roundWinner);
    if (currentScore.player >= 5) {
      styleAsWinnerDiv(dynamicPopupContainer);
      dynamicPopupContainer.style.color = 'lightgreen';
      dynamicPopupContainer.textContent = 'Player Won The Game!';
      dynamicPopupContainer.style.visibility = 'visible'
    }
    if (currentScore.computer >= 5) {
      styleAsWinnerDiv(dynamicPopupContainer);
      dynamicPopupContainer.style.color = 'red';
      dynamicPopupContainer.textContent = 'Computer Won The Game!';
      dynamicPopupContainer.style.visibility = 'visible';
    }
    output.textContent = roundWinner;
    return roundWinner;
};

