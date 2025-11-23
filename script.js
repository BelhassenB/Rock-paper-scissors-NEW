let humanScore = 0
let computerScore = 0
function getComputerChoice() {
    const computerOutput = Math.floor(Math.random() * 3)
    const rock = "rock"
    const paper = "paper"
    const scissor = "scissor"
    if (computerOutput === 0) {
        return rock
    } else if (computerOutput === 1) {
        return paper
    } 
    return scissor
}



function getHumanChoice() {
    return (prompt("Choose your weapon: Rock, Paper or Scissor")).toLowerCase()
    
    
}

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")        
    
    ) { console.log(`Camputer choice is: ${computerChoice}. You won this round!`)
        humanScore++
              
    } else if (humanChoice === computerChoice) {
        console.log(`Computer choice is ${computerChoice}. it's a draw`) 
    } else {
        console.log(`Computer choice is ${computerChoice}. You lost this round`) 
        computerScore++  
    }            
              
}



function playGame() {
    while ((humanScore + computerScore) < 5 ) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        
        playRound(humanSelection, computerSelection)
        console.log(`You: ${humanScore}`, `Computer: ${computerScore}`)
        console.log(humanScore, computerScore)
    }
    (humanScore > computerScore) ?
    console.log(`You won against the computer: ${humanScore} VS ${computerScore}`):
    console.log(`You lost against the computer: ${humanScore} VS ${computerScore}`)
}
playGame()