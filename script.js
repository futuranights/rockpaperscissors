// Criar uma função que escolhe um numero de 1 a 3
function letComputerChoice() {
// Escolher um numero de 1 a 3
    let result = Math.floor(Math.random() * 3) + 1
    if (result === 3) {
        return "Paper"
    } else if (result === 2) {
        return "Rock"
    } else {
        return "Scissors"
    }
}


// Criar uma função para receber a escolha do jogador
function letHumanChoise() {
    let choise = prompt("Choose between Rock, Paper or Scissors:")
    return choise
}
