const btn = document.querySelectorAll('.button');
const results = document.querySelector('.results');
const scoreDisplay = document.querySelector('.score-display');
const gameOver = document.querySelector('.game-over');
const computerImage = document.querySelector('.computer-image');
const gameRound = document.querySelector('.game-round');
let currentComputerImage = '';

btn.forEach((element) => {
    element.addEventListener('click', function(e) {
        playerSelection = element.textContent.toLowerCase();
        playRound(playerSelection, getComputerSelection());
    })
})

function increaseRound() {
    if (gameRound.textContent === 'Round: 5') {
        //calculate winner function ''''calculateWinner(); --->sends info(parameter) to modal
        //modal function ''''myModal();
        setTimeout(function () { alert('game over'); }, 1);
        return gameRound.textContent = 'Round: 5';
    }
    let text = Number(gameRound.textContent.slice(gameRound.textContent.length - 1));
    let newText = ++text;
    gameRound.textContent = 'Round:' + ' ' + newText;
}

let playerScore = 0;
let computerScore = 0;

function getComputerSelection() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        computerImageFunction('rock');
        currentComputerImage = 'rock';
        return 'rock';
    } else if (choice === 1) {
        computerImageFunction('paper');
        currentComputerImage = 'paper';
        return 'paper';
    } else {
        computerImageFunction('scissors');
        currentComputerImage = 'scissors';
        return 'scissors';
    }
}

function computerImageFunction(selection) {
    computerImage.classList.toggle(`${currentComputerImage}-image`);
    computerImage.classList.toggle(`${selection}-image`);
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
        increaseRound();
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        results.textContent = 'You Lose! Paper beats rock!';
        scoreDisplay.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
        increaseRound();
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        results.textContent ='You win! Paper beats rock';
        scoreDisplay.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
        increaseRound();
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        results.textContent = 'You lose! Scissors beats paper!';
        scoreDisplay.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
        increaseRound();
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        results.textContent = 'You win! Scissors beats paper!';
        scoreDisplay.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
        increaseRound();
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        results.textContent = 'You lose! Rock beats scissors!';
        scoreDisplay.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
        increaseRound();
    } else {
        results.textContent = 'It\'s a tie!';
        scoreDisplay.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
        increaseRound();
    }
}
