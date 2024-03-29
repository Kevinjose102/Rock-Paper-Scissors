const buttonRock = document.querySelector("#rock");  
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const result = document.querySelector("round-result");

let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;

function getComputerChoice(){
    const moves = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * moves.length);
    let computerchoice = moves[random];
    return computerchoice;
}

function playGame(player){

    let computer = getComputerChoice();

    console.log("player",player);
    console.log("computer",computer);   

    for(let round = 1; round <= 5; round++){
        let resultComment = playRound(computer,player);
        
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

buttonRock.addEventListener("click", () => {
    playGame("rock");
});

buttonPaper.addEventListener("click" , () => {
    playGame("paper");
});

buttonScissors.addEventListener("click", () => {
    playGame("scissors");
})