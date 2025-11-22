function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 9)
    console.log(computerChoice)
    const rock = "Rock"
    const paper = "paper"
    const scissor = "Scissor"
    if (computerChoice <= 2) {
        return rock
    } else if (computerChoice > 2 && computerChoice <= 5) {
        return paper
    } 
    return scissor
}
console.log(getComputerChoice())