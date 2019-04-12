function computerPlay (){
    x = Math.floor(3 * Math.random())
    switch (x){
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissors'
        }
    }
    


function playRound (player, computer){
    console.log('Computer: ' + computer);
    let outcome = '';
    if (player == computer) {
        outcome = "It's a tie, try again."
    }
    else if (player == 'rock' && computer == 'scissors'){
        outcome = 'You win!'
    }
    else if (player == 'rock' && computer == 'paper'){
        outcome = 'You lose!'
    }
    else if (player == 'scissors' && computer == 'rock'){
        outcome = 'You lose!'
    }
    else if (player == 'scissors' && computer == 'paper'){
        outcome = 'You win!'
    }
    else if (player == 'paper' && computer == 'scissors'){
        outcome = 'You lose!'
    }
    else if (player == 'paper' && computer == 'rock'){
        outcome = 'You win!'
    }
    console.log(outcome)
    return outcome
}

function keepScore(outcome, playerScore, computerScore){

}

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(button.id);
    computerChoice = computerPlay();
    outcome = playRound(button.id, computerChoice);
    displayOutcome (computerChoice, outcome)
  });
});

function displayOutcome (computerChoice, outcome){
    let string = 'Computer choses ' + computerChoice + '. ' + outcome
    document.getElementById(1).innerHTML = string;

    switch (true){
        case (outcome == 'You win!'):
            playerScore += 1;
            break;
        case (outcome == 'You lose!'):
            computerScore += 1;
            break;
        case (outcome == "It's a tie, try again."):
            roundNumber -= 1;
    }
    roundNumber += 1;

    document.getElementById(2).innerHTML = playerScore;
    document.getElementById(3).innerHTML = roundNumber;
    document.getElementById(4).innerHTML = computerScore;
    
    if (playerScore > 5){
        if(confirm('Game over, you win! Play again?')){
            window.location.reload();  
        }
    }
    else if (computerScore > 5){
        if(confirm('Game over, you lose :( Play again?')){
            window.location.reload();  
        }
    }
    return playerScore, computerScore, roundNumber;
}