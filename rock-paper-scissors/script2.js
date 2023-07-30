const arr = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return arr[Math.floor(Math.random() * arr.length)];
}

let computerScore = 0;
let playerScore = 0;

function game(computerSelection, playerSelection) {
  // New game with 5 rounds
  for (let i = 1; i <= 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = window.prompt(
      'Please type "rock", "paper", or "scissors".'
    );
    playerSelection = playerSelection.toLowerCase();
    console.log(computerSelection);
    console.log(playerSelection);

    if (
      (computerSelection === "rock" && playerSelection === "scissors") ||
      (computerSelection === "paper" && playerSelection === "rock") ||
      (computerSelection === "scissors" && playerSelection === "paper")
    ) {
      computerScore = ++computerScore;
      console.log(
        `Round ${i} Computer win.\n Computer Score: ${computerScore} | Player Score: ${playerScore}`
      );
    } else if (
      (computerSelection === "scissors" && playerSelection === "rock") ||
      (computerSelection === "rock" && playerSelection === "paper") ||
      (computerSelection === "paper" && playerSelection === "scissors")
    ) {
      playerScore = ++playerScore;
      console.log(
        `Round ${i} You win.\n Computer Score: ${computerScore} | Player Score: ${playerScore}`
      );
    } else {
      console.log(
        `Round ${i} It's a tie.\n Computer Score: ${computerScore} | Player Score: ${playerScore}`
      );
    }
  }

  // Final winner
  if (computerScore > playerScore) {
    console.log("Final Winner: Computer");
  } else if (computerScore < playerScore) {
    console.log("Final Winner: You");
  } else {
    console.log("Let's play again.");
    computerScore = 0;
    playerScore = 0;
    game();
  }
}

game();
