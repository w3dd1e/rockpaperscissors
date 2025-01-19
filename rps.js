/*
Following traditional rules, if the user input beats the computer, add one to win total.
Else, add 1 to loss total.
Repeat 4 more times for a total of 5 rounds.
At the end of 5 rounds, declare a winner.

 */

//
//Computer randomly selects rock, paper, or scissors
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

let getHumanChoice = () => {
    return prompt("Pick rock, paper, or scissors.")
}

//
// Declare the current score
//

let playerScore = 0
let computerScore = 0