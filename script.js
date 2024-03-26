let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;

function getComputerChoice(){
    const moves = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * moves.length);
    let computerchoice = moves[random];
    console.log("computer:",computerchoice)
    return computerchoice;
}

function getPlayerChoice(){
    let playerprompt = prompt("Enter your choice: ");
    let playerchoice = playerprompt.toLowerCase();
    console.log("Player:",playerchoice);
    return playerchoice;
}

function playRound(computer, player){
    if(player != "rock" && player != "scissors" && player != "paper"){
    console.log("INVALID INPUT");
    }
    else if(computer === player){
        console.log("Its a tie");
        return 0;
    }
    else if(computer == "rock" && player == "scissors"){
        console.log("You lose! Rock beats scissors");
        return 1;
    }
    else if(computer == "rock" && player == "paper"){
        console.log("Luck you!Paper beats rock");
        return 2;
    }
    else if(computer == "paper" && player == "rock"){
        console.log("Hahah!You lose!Paper beats rocks");
        return 1;
    }
    else if(computer == "paper" && player == "scissors"){
        console.log("You win!Scissors beats paper");
        return 2;
    }
    else if(computer == "scissors" && player == "rock"){
        console.log("You win!!!Rock beats scissors");
        return 2;
    }
    else if(computer == "scissors" && player == "paper"){
        console.log("You just lostt!Scissors beats paper");
        return 1;
    }
}

function updateScore(winner){
    if(winner == 1){
        COMPUTER_SCORE++;
    }
    else if(winner == 2){
        PLAYER_SCORE++;
    }
}

function playGame(){
    for(let i = 1; i <= 5 ;i++){
        //get the choices
        computer = getComputerChoice();
        player = getPlayerChoice();
        let result = playRound(computer,player)
        updateScore(result);
    }
    console.log("PLAYER SCORE:",PLAYER_SCORE);
    console.log("COMPUTER SCORE:", COMPUTER_SCORE);
    if(PLAYER_SCORE > COMPUTER_SCORE){
        console.log("You won. But I'll get you next time.");
    }
    else if(PLAYER_SCORE < COMPUTER_SCORE){
        console.log("HAHAH! I wonnnnnn! Youu losst");
    }
    else if(PLAYER_SCORE == COMPUTER_SCORE){
        console.log("We are equals");
    }
}

playGame();