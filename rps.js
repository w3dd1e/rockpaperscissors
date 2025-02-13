//
// Computer randomly selects rock, paper, or scissors
//

let getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return "rock"
    } else if (random === 1) {
        return "scissors"
    } else if (random === 2) {
        return "paper"
    } else {
        return "Error: No selection made by computer"
    }
}

//
//Get selection from player
//
const buttons = document.querySelectorAll('button');

let playerChoice;
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerChoice = e.target.textContent.toLowerCase();
        console.log(playerChoice);
        playRound()

    })
})


//
// Declare the current score
//

let playerScore = 0
let computerScore = 0

//
// Play a round then display the current score
//

let playRound = () => {

    let computerChoice = getComputerChoice()

    let winMessage = () => alert("You picked " + playerChoice + " and the computer picked " + computerChoice + ". You win this round!");
    let loseMessage = () => alert("You picked " + playerChoice + " and the computer picked " + computerChoice + ". You lose this round!");
    let tieMessage = () => alert("You picked " + playerChoice + " and the computer picked " + computerChoice + ". It's a tie!");

    if (playerChoice === "rock" && computerChoice === "scissors") {
        winMessage();
        playerScore++;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        winMessage();
        playerScore++;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        winMessage();
        playerScore++;
    } else if (playerChoice === computerChoice) {
        tieMessage();
    } else {
        loseMessage();
        computerScore++;
    }

    console.log("Scores:");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);

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

