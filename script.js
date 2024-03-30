const buttonRock = document.querySelector("#rock");  
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const result = document.querySelector("#round-result");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const body = document.querySelector("body");
const playerSelection = document.querySelector(".playerSelection");
const computerSelection = document.querySelector(".computerSelection");
const footer = document.querySelector("footer")
const resetButton = document.querySelector(".reset");

result.setAttribute("style", "font-family: monospace; font-size: 25px; color: rgb(255, 157, 0)");
resetButton.disabled = true;
let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;
let ROUND_COUNT = 0;

function getComputerChoice(){
    const moves = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * moves.length);
    let computerchoice = moves[random];
    return computerchoice;
}

function playGame(player){
  if(ROUND_COUNT < 5){
    let computer = getComputerChoice();

    if(computer == "rock"){
      computerSelection.textContent = "✊";
    }
    else if(computer == "paper"){
      computerSelection.textContent = "✋";
    }
    else{
      computerSelection.textContent = "✌";
    }
    console.log("player",player,"computer",computer);
    let resultComment = playRound(computer,player);
    if(resultComment.includes("Won")){
      result.textContent = resultComment
      PLAYER_SCORE++; //player won
      playerScore.textContent = PLAYER_SCORE;
    }
    else if(resultComment.includes("Lose")){
      result.textContent = resultComment;
      COMPUTER_SCORE++; //computer won
      computerScore.textContent = COMPUTER_SCORE;
    }
    else{
      //its a tie
      PLAYER_SCORE++;
      COMPUTER_SCORE++;
      playerScore.textContent = PLAYER_SCORE;
      computerScore.textContent = COMPUTER_SCORE;
      result.textContent = "It's a draw.";
    }
  }
  else if(ROUND_COUNT == 5){ 
    result.setAttribute("style", "font-family: monospace; font-size: 27px; font-weight: bold; color: rgb(255, 157, 0)");
    if(PLAYER_SCORE > COMPUTER_SCORE){
      result.textContent = "YOU WIN"
    }
    else if(COMPUTER_SCORE > PLAYER_SCORE){
      result.textContent = "YOU LOSE"
    }
    else{
      result.textContent = "IT WAS A TIE"
    }

    buttonPaper.disabled = true;
    buttonRock.disabled = true;
    buttonScissors.disabled = true;

    resetButton.disabled = false;
    resetButton.addEventListener("click", () => {
      reset();
    });
  }
}

function playRound (computer, player){
    if (player == computer) {
        return "draw";
      } else if (
        (player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")
      ) {
        return `You Won! ${player} beats ${computer}`;
      } else {
        return `You Lose! ${computer} beats ${player}`;
      }
}

function reset(){
  PLAYER_SCORE = 0;
  COMPUTER_SCORE = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  ROUND_COUNT = 0;
  playerSelection.textContent = "?";
  computerSelection.textContent = "?"

  buttonPaper.disabled = false;
  buttonRock.disabled = false;
  buttonScissors.disabled = false;

  resetButton.disabled = true;

  result.textContent = "";
} 

buttonRock.addEventListener("click", () => {
  ROUND_COUNT++;
  playerSelection.textContent = "✊";
  playGame("rock");
});

buttonPaper.addEventListener("click" , () => {
    ROUND_COUNT++;
    playerSelection.textContent = "✋";
    playGame("paper");
});

buttonScissors.addEventListener("click", () => {
    ROUND_COUNT++;
    playerSelection.textContent = "✌";
    playGame("scissors");
})