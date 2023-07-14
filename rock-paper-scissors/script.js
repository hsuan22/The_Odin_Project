const arr = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return arr[Math.floor(Math.random()*arr.length)];
}

let computerSelection = getComputerChoice();
let playerSelection = window.prompt("Type 'rock', 'paper' or 'scissors'.");
let computerScore;
let playerScore;
// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === "rock" && computerSelection === "paper") {
//         computerScore += computerScore;
//         return "You lose! Paper beats Rock.";
//     } else if (playerSelection === "rock" && computerSelection === "scissors") {
//         playerScore += playerScore;
//         return "You win! Rock beats Scissors.";
//     } else if (playerSelection === "paper" && computerSelection === "rock") {
//         playerScore += playerScore;
//         return "You win! Paper beats Rock.";
//     } else if (playerSelection === "paper" && computerSelection === "scissors") {
//         computerScore += computerScore;
//         return "You lose! Scissors beats Paper."
//     } else if (playerSelection === "scissors" && computerSelection === "rock") {
//         computerScore += computerScore;
//         return "You lose! Rock beats Scissors."
//     } else if (playerSelection === "scissors" && computerSelection === "paper") {
//         playerScore += playerScore;
//         return "You win. Scissors beats Paper.";
//     } else {
//         return "Play again.";
//     }
// }

function game() {
    for (let i = 1; i <=5; i++) {
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === "rock" && computerSelection === "paper") {
                computerScore += computerScore;
                return "You lose! Paper beats Rock.";
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore += playerScore;
                return "You win! Rock beats Scissors.";
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore += playerScore;
                return "You win! Paper beats Rock.";
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                computerScore += computerScore;
                return "You lose! Scissors beats Paper."
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                computerScore += computerScore;
                return "You lose! Rock beats Scissors."
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore += playerScore;
                return "You win. Scissors beats Paper.";
            } else {
                return "Play again.";
            }
        }
        let roundResult = console.log(playRound(playerSelection, computerSelection));
        let roundRecord = "";
        roundRecord += roundRecord + `Round ${i} ${roundResult}`;
        let winner;
        if (computerScore > playerScore) {
            winner = "Computer";
        } else if (computerScore < playerScore) {
            winner = "You";
        }
        console.log(`${roundRecord}\n  Winner: ${winner}`);
    }
}
game();