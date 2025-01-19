/*
Following traditional rules, if the user input beats the computer, add one to win total.
Else, add 1 to loss total.
Repeat 4 more times for a total of 5 rounds.
At the end of 5 rounds, declare a winner.

 */

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

let getPlayerChoice = () => {
    let playerChoice = prompt("Pick rock, paper, or scissors.").toLowerCase()
    switch (playerChoice) {
        case "rock":
        case "scissors":
        case "paper":
            return playerChoice
        default:
            alert("Please choose a rock, paper, or scissors.");
            return getPlayerChoice()
    }
}

//
// Declare the current score
//

let playerScore = 0
let computerScore = 0

//
// Play a round then display the current score
//

let playRound = () => {
    let playerChoice = getPlayerChoice()
    let computerChoice = getComputerChoice()

    let winMessage = () => alert("You picked " + playerChoice + " and the computer picked " + computerChoice + ". You win this round!");
    let loseMessage = () => alert("You picked " + playerChoice + " and the computer picked " + computerChoice + ". You lose this round!");


    if (playerChoice === "rock" && computerChoice === "scissors") {
        winMessage();
        playerScore++;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        winMessage();
        playerScore++;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        winMessage();
        playerScore++;
    } else {
        loseMessage();
        computerScore++;
    }

    console.log("Scores:");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);

}


