

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
    const buttons = document.querySelectorAll("button"); //NodeList
    console.log(buttons);
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            return (button.id);
        });
    })
}

function playRound(computer, player){
    if(computer === player){
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

computer = getComputerChoice();
console.log(computer);
player = getPlayerChoice();
console.log("hi",player);
playRound(computer, player);
