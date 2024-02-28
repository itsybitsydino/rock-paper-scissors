let playerScore = 0;
let computerScore = 0;

// generates random value among rock, paper, or scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * (4 - 1) + 1); //selects a number 1, 2, or 3
    switch (choice) {
        case 1: return 'rock';
        break;
        case 2: return 'paper';
        break;
        case 3: return 'scissors';
        break;
    }
}

function getPlayerChoice() {
    let choice = prompt(`Choose your attack!`).toLowerCase();
        if (choice === 'rock' ||
            choice === 'paper' ||
            choice === 'scissors' ){
            return choice;
        } 
}

function playRound(player, computer){
    if (((player == 'scissors') && (computer == 'paper')) ||
        ((player == 'paper') && (computer == 'rock')) ||
        ((player == 'rock') && (computer == 'scissors'))) { // these are win criteria
        playerScore++;
        return `You won this round. Point to you. \nThe score is (player) ${playerScore} : ${computerScore} (computer).`;
    } else if (player == computer) {
        playerScore++;
        computerScore++;
        return `You tied this round. Points to both. \nThe score is (player) ${playerScore} : ${computerScore} (computer).`;
    } else {
        computerScore++;
        return `You lost this round. Point to computer. \nThe score is (player) ${playerScore} : ${computerScore} (computer).`;
    }
}

function playGame() {
    let i = 0;
    while (i < 5) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(`Computer chose: ${computerSelection} || Player chose: ${playerSelection}`);
        console.log(`${playRound(playerSelection, computerSelection)}`);   
        i++;
    }
    console.log(`The final score is (player) ${playerScore} : ${computerScore} (computer).`)
    if (playerScore > computerScore) {
        console.log('Congratulations! You won the game.');
    } else {
        console.log('Too bad. You lost the game.');
    }
}

alert('Let\'s play Rock, Paper, Scissors. \nWinner of five rounds wins the game.\nGood luck!');
playGame();

