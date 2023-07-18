
let playerScore = 0;
let computerScore = 0;

function getPlayerSelection() {
    let question = prompt('what is your choice');
    let selection = question.toLowerCase();
    return selection;
}

function getComputerSelection() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    console.log('player = ' + playerSelection);
    console.log('computer = ' + computerSelection);
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You win! Rock beats scissors!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return 'You Lose! Paper beats rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You win! Paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return 'You lose! Scissors beats paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You win! Scissors beats paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return 'You lose! Rock beats scissors!';
    } else {
        return 'It\'s a tie!';
    }
}

function game() {
    console.log(playRound(getPlayerSelection(), getComputerSelection()));
    console.log(playRound(getPlayerSelection(), getComputerSelection()));
    console.log(playRound(getPlayerSelection(), getComputerSelection()));
    console.log(playRound(getPlayerSelection(), getComputerSelection()));
    console.log(playRound(getPlayerSelection(), getComputerSelection()));
    if (computerScore > playerScore) {
        return 'you are the loser';
    } else if (playerScore > computerScore) {
        return 'you are the winner';
    } else {
        return 'it\'s officially a tie';
    }
}

console.log(game());





