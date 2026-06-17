
const moves = ["Rock", "Paper", "Scissors"]
let humanScore = 0
let computerScore = 0


function randomPick () {
    let computerpick = moves[Math.floor(Math.random() * moves.length)];
    computerpick = computerpick.toLowerCase()
    return computerpick
}

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
let computerPick = randomPick()
let yourPick =  humanPick()


function playRound (computerPick, yourPick) {
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
        alert ("Computer won the round!")
        computerScore ++
    }
    console.log(humanScore)
    console.log(computerScore)
    playRound(computerPick, yourPick)
}

playRound(computerPick, yourPick)

