
const buttonRock = document.querySelector("#rock");  
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const result = document.querySelector("#round-result");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const body = document.querySelector("body");

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
      result.textContent = "it was a draw";
    }
  }
  else if(ROUND_COUNT == 5){ 
    if(PLAYER_SCORE > COMPUTER_SCORE){
      console.log("YOU WIN");
    }
    else if(COMPUTER_SCORE > PLAYER_SCORE){
      console.log("YOU LOSSSSE");
    }
    else{
      console.log("ITS A TIE");
    }

    const resetButton = document.createElement("button");
    resetButton.classList.add("reset");
    resetButton.textContent = "RESET";
    //TODO STYLES
    body.appendChild(resetButton);
    resetButton.addEventListener("click", () => {
      result.textContent = "";
      body.removeChild(resetButton);
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
        return `you Won! ${player} beats ${computer}`;
      } else {
        return `you Lose! ${computer} beats ${player}`;
      }
}

function reset(){
  PLAYER_SCORE = 0;
  COMPUTER_SCORE = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  ROUND_COUNT = 0;
}

buttonRock.addEventListener("click", () => {
  ROUND_COUNT++;  
  playGame("rock");
});

buttonPaper.addEventListener("click" , () => {
  ROUND_COUNT++;
    playGame("paper");
});

buttonScissors.addEventListener("click", () => {
  ROUND_COUNT++;
    playGame("scissors");
})