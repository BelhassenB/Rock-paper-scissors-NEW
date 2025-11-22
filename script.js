let humanScore = 0
let computerScore = 0
function getComputerChoice() {
    const computerOutput = Math.floor(Math.random() * 3)
    console.log(computerOutput)
    const rock = "Rock"
    const paper = "paper"
    const scissor = "Scissor"
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
    if (humanChoice === "rock" && computerChoice === "Scissor") {
        const result = `Computer Choise is: ${computerChoice}, You won!`
        console.log(result)
        humanScore++
        
    } 
        
}
playRound(humanSelection, computerSelection)