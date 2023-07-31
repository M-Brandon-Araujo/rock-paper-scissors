const btn = document.querySelectorAll('.button');
const results = document.querySelector('.results');
const scoreDisplay = document.querySelector('.score-display');
const gameOver = document.querySelector('.game-over');

btn.forEach((element) => {
    element.addEventListener('click', function(e) {
        playerSelection = element.textContent.toLowerCase();
        playRound(playerSelection, getComputerSelection());
    })
})


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

function scoreTest() {
    if (playerScore === 5) {
        gameOver.textContent = 'Game over! You win! Refresh page to play again.';
    } else if (computerScore === 5){
        gameOver.textContent = 'Game over! You lost! Refresh page to play again.'
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        results.textContent = 'You win! Rock beats scissors!';
        scoreDisplay.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
        scoreTest();
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        results.textContent = 'You Lose! Paper beats rock!';
        scoreDisplay.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
        scoreTest();
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        results.textContent ='You win! Paper beats rock';
        scoreDisplay.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
        scoreTest();
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        results.textContent = 'You lose! Scissors beats paper!';
        scoreDisplay.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
        scoreTest();
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        results.textContent = 'You win! Scissors beats paper!';
        scoreDisplay.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
        scoreTest();
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        results.textContent = 'You lose! Rock beats scissors!';
        scoreDisplay.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
        scoreTest();
    } else {
        results.textContent = 'It\'s a tie!';
        scoreDisplay.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
    }
}
