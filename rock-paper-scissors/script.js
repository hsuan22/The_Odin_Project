const arr = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return arr[Math.floor(Math.random() * arr.length)];
}

let computerScore = 0;
let playerScore = 0;
/* 
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
**/

function game(computerSelection, playerSelection) {
  for (let i = 1; i <= 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = window.prompt(
      'Please type "rock", "paper", or "scissors".'
    );
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore += computerScore;
      return "You lose! Paper beats Rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore += playerScore;
      return "You win! Rock beats Scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore += playerScore;
      return "You win! Paper beats Rock.";
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      computerScore += computerScore;
      return "You lose! Scissors beats Paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore += computerScore;
      return "You lose! Rock beats Scissors.";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore += playerScore;
      return "You win. Scissors beats Paper.";
    } else {
      return "Play again.";
    }

    let roundResult = playRound();
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
