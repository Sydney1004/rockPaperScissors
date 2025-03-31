document.addEventListener('DOMContentLoaded', () => {
    const scissorsBtn = document.getElementById('scissors_button');
    const paperBtn = document.getElementById('paper_button');
    const rockBtn = document.getElementById('rock_button');
    scissorsBtn.addEventListener('click', () => handleClick('scissors'));
    paperBtn.addEventListener('click', () => handleClick('paper'));
    rockBtn.addEventListener('click', () => handleClick('rock'));
});

function handleClick(userChoice){
    const computerChoice = getComputerChoice();
    updateScore(userChoice, computerChoice);
}

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function updateScore(userChoice, computerChoice){
    updateSign(userChoice, computerChoice);
    if (userChoice === computerChoice) {
        document.getElementById('info').textContent = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        const player_score = document.getElementById('player_score');
        const currentText = player_score.textContent;
        var currentScore = parseInt(currentText.split(':')[1].trim());
        currentScore++;
        document.getElementById('player_score').textContent = `Player: ${currentScore}`;
        document.getElementById('info').textContent = "You win!";
    } else {
        const computer_score = document.getElementById('computer_score');
        const currentText = computer_score.textContent;
        var currentScore = parseInt(currentText.split(':')[1].trim());
        currentScore++;
        document.getElementById('computer_score').textContent = `Computer: ${currentScore}`;
        document.getElementById('info').textContent = "You lose!";
    }
}

function updateSign(userChoice, computerChoice){
    switch (userChoice) {
        case 'rock':
            document.getElementById('player_choice').src = '/img/rock.png';
            break;
        case 'paper':
            document.getElementById('player_choice').src = '/img/paper.png';
            break;
        case 'scissors':
            document.getElementById('player_choice').src = '/img/scissors.png';
            break;
    }
    switch (computerChoice) {
        case 'rock':
            document.getElementById('computer_choice').src = '/img/rock.png';
            break;
        case 'paper':
            document.getElementById('computer_choice').src = '/img/paper.png';
            break;
        case 'scissors':
            document.getElementById('computer_choice').src = '/img/scissors.png';
            break;
    }
}
