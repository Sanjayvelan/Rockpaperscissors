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

function getHumanChoice(){
    let choice = prompt("Enter your choice:\n1)rock\n2)paper\n3)scissors").toLowerCase()
    return choice
}

function playRound(humanChoice,computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "scissors"){
            console.log("Human win, ROCK beats SCISSORS")
            return "H"
        }
        else if(computerChoice === "paper"){
            console.log("Comp win, PAPER beats ROCK")
            return "C"
        }
        else{
            console.log("Draw, BOTH ROCK")
            return "D"
        }
    }

    else if(humanChoice === "scissors"){
        if(computerChoice === "paper"){
            console.log("Human win, SCISSORS beats PAPER")
            return "H"
        }
        else if(computerChoice === "rock"){
            console.log("Comp win, ROCK beats SCISSORS")
            return "C"
        }
        else{
            console.log("Draw, BOTH SCISSOR")
            return "D"
        }
    }
    else{
        if(computerChoice === "rock"){
            console.log("Human win, PAPER beats ROCK")
            return "H"
        }
        else if(computerChoice === "scissors"){
            console.log("Comp win, SCISSORS beats PAPER")
            return "C"
        }
        else{
            console.log("Draw, BOTH PAPER")
            return "D"
        }
    }
}


function playGame(){
    let humanScore = 0
    let computerScore = 0
    let drawn = 0

    for(let i=0 ; i<5; i++){
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()

        let result = playRound(humanChoice,computerChoice)

        if(result === "H"){
            humanScore++
        }
        else if(result === "C"){
            computerScore++
        }
        else{
            drawn++
        }
    }

    if((humanScore === 0 && computerScore === 0) || humanScore === computerScore){
        console.log("GAME DRAWN")
    }
    else{
        if(humanScore > computerScore){
            console.log("HUMAN IS BOSS")
        }
        else{
            console.log("COMPUTER WON")
        }
    }
}

playGame()


