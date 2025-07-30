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
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`) 
        return "human"
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
        return "computer"
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for(let i=1; i <= 5; i++){
        console.log(`--- Round ${i}!---`);
        const humanSelection = getHumanChoise();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);

        if (result === "human") {
            humanScore++
        } else if (result == "computer"){
            computerScore++
        }

        console.log(`Score after round ${i}: You ${humanScore}, Computer ${computerScore}.`)
    }

    console.log('---Final Result---')
    if (humanScore>computerScore){
        console.log("You won!")
    } else if (computerScore>humanScore) {
        console.log("You lost!")
    } else {
        console.log("You tied!")
    }
}

playGame()
