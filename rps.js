//
// Set choice images
//
const rock = "./rock.svg";
const paper = "./paper.svg";
const scissors = "./scissors.svg";

function setChoiceImage(choice, player) {
    let card = document.querySelector("." + player + "ChoiceImg");
    card.setAttribute("src", choice);

}

//
// Computer randomly selects rock, paper, or scissors
//

let getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
        setChoiceImage(rock, "computer");
        return "rock"
    } else if (random === 1) {
        setChoiceImage(scissors, "computer")
        return "scissors"
    } else if (random === 2) {
        setChoiceImage(paper, "computer")
        return "paper"
    } else {
        return "Error: No selection made by computer"
    }
}

//
//Get selection from player
//

const buttons = document.querySelectorAll('button');
let playerObject = {};
let playerChoice;
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerChoice = e.target.textContent.toLowerCase();
        setChoiceImage(eval(playerChoice), "player");
        playRound()

    })
})


//
// Declare the current score
//

let playerScore = 0
let computerScore = 0

//
//Results Messages
//

function resultsMessage(result) {
    let gameResults = document.querySelector('.game-info-results');
    gameResults.textContent = result;
}

//
// Play a round then display the current score
//

let playRound = () => {
    let playerTotal = document.querySelector('#player-score');
    let computerTotal = document.querySelector('#computer-score');


    let computerChoice = getComputerChoice()

    if (playerChoice === "rock" && computerChoice === "scissors") {
        resultsMessage("Win!");
        playerScore++;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        resultsMessage("Win!");
        playerScore++;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        resultsMessage("Win!");
        playerScore++;
    } else if (playerChoice === computerChoice) {
        resultsMessage("Tie!");
    } else {
        resultsMessage("Lose!");
        computerScore++;
    }

    playerTotal.textContent = playerScore.toString();
    computerTotal.textContent = computerScore.toString();
}

//
// Play 5 rounds, then declare results of the game
//
let playGame = () => {

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    let isWinner = playerScore > computerScore;
    let isTie = playerScore === computerScore;

    if (isWinner) {
        alert("You win the game!")
    } else if (isTie) {
        alert("The game is a tie!")
    } else {
        alert("You lost the game!")
    }

    console.log(isWinner)
    console.log(isTie)

}

// playGame();

