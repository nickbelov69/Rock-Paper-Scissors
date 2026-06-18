
const moves = ["Rock", "Paper", "Scissors"]
let humanScore = 0
let computerScore = 0

function humanPick () {
    let humanWord = prompt("What's your move? Rock, Paper, or  Scissors!")
    humanWord = humanWord.toLowerCase()
    while (
        humanWord !== "rock" &&
        humanWord !== "paper" &&
        humanWord !== "scissors"
        ) {
        humanWord = prompt("What's your move? Rock, Paper, or  Scissors!")
        humanWord = humanWord.toLowerCase()
    }
        return humanWord
}

function randomPick () {
    let computerpick = moves[Math.floor(Math.random() * moves.length)];
    computerpick = computerpick.toLowerCase()
    return computerpick
}

let computerPick = randomPick()
let yourPick =  humanPick()


function playRound (computerPick, yourPick) {
    alert(`Computer picked ${computerPick}`)
    if (yourPick === "rock" && computerPick === "scissors" ||
        yourPick === "paper" && computerPick === "rock" ||
        yourPick === "scissors" && computerPick === "paper") {
        alert ("You won the round!")
        humanScore++
    } else if (yourPick === computerPick) {
        alert ("TIE!")
    }

    if (yourPick === "rock" && computerPick === "paper" ||
        yourPick === "paper" && computerPick === "scissors" ||
        yourPick === "scissors" && computerPick === "rock") {
        alert ("Computer won the round")
        computerScore ++
    }
    console.log(humanScore)
    console.log(computerScore)
    alert(`You: ${humanScore}; Computer ${computerScore}!`)
    if (confirm("Next round?")) {
        playRound(randomPick(), humanPick())
    } else {
        alert (`Final score: ${humanScore}; Computer ${computerScore}!`)
    }
}

playRound(computerPick, yourPick)

