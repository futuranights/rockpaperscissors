// AREA PRE-JOGO
// Criar uma função que escolhe um numero de 1 a 3 
function getComputerChoice() {
// Escolher um numero de 1 a 3.
    let result = Math.floor(Math.random() * 3) + 1
//Fazer com que a escolha se traduza para Rock, Paper or Scissors
    if (result === 3) {
        return "paper"
    } else if (result === 2) {
        return "rock"
    } else {
        return "scissors"
    }
}

// Criar uma função para receber a escolha do jogador por meio de um prompt.
function getHumanChoise() {
    let choise = prompt("Choose between Rock, Paper or Scissors:")
    return choise
}
// Criar duas variaveis, humanScore e computerScore, ambas iniciando no valor 0.
var humanScore = 0
var computerScore = 0

// Fazer a logica para apenas uma partida
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === computerChoice) {
        return "You tied!"
    } else if  (
        (computerChoice === "rock" && humanChoice === "paper") || 
        (computerChoice === "paper" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "rock") 
    ) {
        return console.log(`You won! ${humanChoice} beats ${computerChoice}!`) || humanScore === +1
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}!`) || computerScore === +1
    }
}

const humanSelection = getHumanChoise()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)

