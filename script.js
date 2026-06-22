
let humanScore = 0
let computerScore = 0


const buttons = document.querySelectorAll("button")


function randomPick () {
    const moves = ["rock", "paper", "scissors"]
    return moves[Math.floor(Math.random() * moves.length)];
}


function playRound (playerSelection) {
    const computerSelection = randomPick()

    console.log(`Player: ${playerSelection}`)
    console.log(`Computer: ${computerSelection}`)

    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        humanScore++
        console.log("You win this round")
    } else if (playerSelection === computerSelection) {
       console.log("TIE!")
    }
    if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        computerScore ++
        console.log("Computer win this round");
    }
    console.log(humanScore)
    console.log(computerScore)
    console.log(`You: ${humanScore}; Computer ${computerScore}!`)

    if ( humanScore === 3 || computerScore === 3) {
        console.log(humanScore === 3 ? "You won!" : "Computer won!");
    }
    return
}

buttons.forEach(button => {
    button.addEventListener("click", () =>
    playRound(button.textContent.toLowerCase()))
})



