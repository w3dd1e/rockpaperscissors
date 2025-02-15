//
// Set choices
//
const options = {
    "Rock": "./rock.svg",
    "Paper": "./paper.svg",
    "Scissors": "./scissors.svg",

}


function setChoiceImage(choice, player) {
    let card = document.querySelector("." + player + "Choice");
    card.firstElementChild.setAttribute("src", options[choice]);
    card.lastElementChild.textContent = choice;


}

//
//Start new game
//

const newGame = document.querySelector(".new-game")
newGame.addEventListener("click", () => {
    window.location.reload();
})
//
// Computer randomly selects rock, paper, or scissors
//

let getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
        setChoiceImage("Rock", "computer");
        return "Rock"
    } else if (random === 1) {
        setChoiceImage("Paper", "computer")
        return "Scissors"
    } else if (random === 2) {
        setChoiceImage("Scissors", "computer")
        return "Paper"
    } else {
        return "Error: No selection made by computer"
    }
}

//
//Get selection from player
//
let playerChoice;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerChoice = e.target.textContent

        setChoiceImage(playerChoice, "player");
        playRound()

    })
})


//
// Declare the current score
//

let playerScore = 0
let computerScore = 0
let playerTotal = document.querySelector('#player-score');
let computerTotal = document.querySelector('#computer-score');

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerTotal.textContent = playerScore.toString();
    computerTotal.textContent = computerScore.toString();

}


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

    let computerChoice = getComputerChoice()


    if (playerChoice === "Rock" && computerChoice === "Scissors") {
        resultsMessage("Win!");
        playerScore++;
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        resultsMessage("Win!");
        playerScore++;
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
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
    const choices = document.querySelector('.choices');
    if (playerScore === 5) {
        resultsMessage("Game over! You win!")
        choices.replaceChildren("Select New Game to play again.")
    } else if (computerScore === 5) {
        resultsMessage("Game over! You lose!")
        choices.replaceChildren("Select New Game to play again.")

    }




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

//
// Get a game winner
//



