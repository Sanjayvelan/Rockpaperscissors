const humanPick = document.querySelector(".humanPick");
const computerPick = document.querySelector(".computerPick");

const hScore = document.querySelector(".hScore");
const cScore = document.querySelector(".cScore");
const dScore = document.querySelector(".dScore");
const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");

let score = {
    human :0,
    computer :0,
    drawn :0
};



hScore.innerHTML = score.human;
cScore.innerHTML = score.computer; 
dScore.innerHTML = score.drawn; 

buttons.forEach((button)=>{
    button.addEventListener("click",function (e){
        switch (e.target.id) {
            case "rock":
                humanPick.innerHTML = " ROCK";

                playRound("rock",getComputerChoice())
                hScore.innerHTML = score.human;
                cScore.innerHTML = score.computer; 
                dScore.innerHTML = score.drawn;
                checkWinner();
                break;
            case "paper":
                humanPick.innerHTML = " PAPER";
                
                playRound("paper",getComputerChoice());
                hScore.innerHTML = score.human;
                cScore.innerHTML = score.computer; 
                dScore.innerHTML = score.drawn;
                checkWinner();
                break;
            case "scissor":
                humanPick.innerHTML = " SCISSOR";
                
                playRound("scissors",getComputerChoice());
                hScore.innerHTML = score.human;
                cScore.innerHTML = score.computer; 
                dScore.innerHTML = score.drawn;
                checkWinner();
                break;
            default:
                break;
        }
    });
});

function checkWinner(){
    if(score.human >= 5){
        result.innerHTML = "Human Wins";
    }
    else if(score.computer >= 5){
        result.innerHTML = "Computer Wins";
    }
}

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3+1)
    if(choice === 1){
        return "rock"
    }
    else if((choice === 2)){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function playRound(humanChoice,computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "scissors"){
            console.log("Human win, ROCK beats SCISSORS");
            computerPick.innerHTML = computerChoice.toUpperCase();
            score.human++; 
        }
        else if(computerChoice === "paper"){
            console.log("Comp win, PAPER beats ROCK")
            computerPick.innerHTML = computerChoice.toUpperCase();
            score.computer++;
        }
        else{
            console.log("Draw, BOTH ROCK")
            computerPick.innerHTML = computerChoice.toUpperCase();
            score.drawn++;
        }
    }

    else if(humanChoice === "scissors"){
        if(computerChoice === "paper"){
            console.log("Human win, SCISSORS beats PAPER")
            computerPick.innerHTML = computerChoice.toUpperCase();
            score.human++;
        }
        else if(computerChoice === "rock"){
            console.log("Comp win, ROCK beats SCISSORS")
            computerPick.innerHTML = computerChoice.toUpperCase();
            score.computer++;
        }
        else{
            console.log("Draw, BOTH SCISSOR")
            computerPick.innerHTML = computerChoice.toUpperCase();
            score.drawn++;
        }
    }
    else{
        if(computerChoice === "rock"){
            console.log("Human win, PAPER beats ROCK")
            computerPick.innerHTML = computerChoice.toUpperCase();
            score.human++;
        }
        else if(computerChoice === "scissors"){
            console.log("Comp win, SCISSORS beats PAPER")
            computerPick.innerHTML = computerChoice.toUpperCase();
            score.computer++;
        }
        else{
            console.log("Draw, BOTH PAPER")
            computerPick.innerHTML = computerChoice.toUpperCase();
            score.drawn++;
        }
    }
}



