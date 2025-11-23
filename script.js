let humanScore = 0
let computerScore = 0
function getComputerChoice() {
    const computerOutput = Math.floor(Math.random() * 3)
    console.log(computerOutput)
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
const computerSelection = getComputerChoice()
console.log(computerSelection)

function getHumanChoice() {
    return (prompt("Choose your weapon: Rock, Paper or Scissor")).toLowerCase()
    
    
}
const humanSelection = getHumanChoice()

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")        
    
    ) { console.log(`Camputer choice is: ${computerChoice}. You won this round!`)
        humanScore++
              
    } else if (humanChoice === computerChoice) console.log("it's a draw!")
      else 
        console.log(`Computer choice is ${computerChoice}. You lost this round:`)
        computerScore++
      
        
}
playRound(humanSelection, computerSelection)
console.log(humanScore, computerScore)

