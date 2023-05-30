// assign values to randomly generated numbers 1-3
function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)];
}

// assign 0 as scores for computers and players
let playerScore = 0;
let computerScore = 0;

// function to run one round of the game
function playRound(playerSelection, computerSelection) {

  // define computer selection as above
  computerSelection = getComputerChoice();
  playerSelection = prompt("Enter your choice").toLowerCase();

  //scenario 1 when it's a draw; no point added for both
  if (playerSelection == computerSelection) {
    console.log("It's a tie! Your choice: " + `${playerSelection}` + ", Computer choice: " + `${computerSelection}`);
    console.log(playerScore, computerScore);
  }

  // scenario 2 when player wins; player gets a point
  else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
    playerScore++;
    console.log("You win! Your choice: " + `${playerSelection}` + ", Computer choice: " + `${computerSelection}`);
    console.log(playerScore, computerScore);

  }
  // scenario 3 when player loses; computer gets a point
  else {
    computerScore++;
    console.log("You lose! Your choice: " + `${playerSelection}` + ", Computer choice: " + `${computerSelection}`);
    console.log(playerScore, computerScore);

  }
}

function game() {
  // once the function runs ok, put it in a loop and run 5 times
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  // a separate logic to track the scores and define the winner
  if (playerScore == 5 || playerScore > computerScore) {
    console.log("Congratulations! You win!");
  }
  else if (computerScore == 5 || computerScore > playerScore) {
    console.log("Computer win!");
  }
  else {
    console.log("It was a draw!")
  }
}

game();