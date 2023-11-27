let player = 0;
let computer=0;
const rock = document.querySelector('#rock');
rock.addEventListener("click", function(){
    playRound("rock");    
});
const paper = document.querySelector('#paper');
paper.addEventListener("click", function(){
    playRound("paper");
});
const scissors = document.querySelector('#scis');
scissors.addEventListener("click", function(){
    playRound("scissors");
    
});
function playRound(playerChoice) {
    const computerChoice = computerKeuze();
    console.log(playerChoice);

    document.getElementById("feedback").innerHTML = playerChoice;
    gamelogic(playerChoice, computerChoice);
}
function computerKeuze (){
    const randomPick = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    const computerChoice = randomPick[randomNumber];
    console.log(randomPick[randomNumber]);
    document.getElementById("feedbackpc").innerHTML = computerChoice;
    return computerChoice;   
}
function gamelogic(playerChoice, computerKeuze) {
    if (playerChoice === computerKeuze) {
        console.log("Draw");
        document.getElementById("result").innerHTML = ("Draw!");
    } else if ((playerChoice === 'rock' && computerKeuze === 'scissors') ||
               (playerChoice === 'paper' && computerKeuze === 'rock') ||
               (playerChoice === 'scissors' && computerKeuze === 'paper')) {
        console.log("You win!");
        document.getElementById("result").innerHTML = ("You Win!");
        player++;
    } else {
        console.log("You lose!");
        document.getElementById("result").innerHTML = ("You Lose!");
        computer++;
    }
    document.getElementById("Playerscore").innerHTML = player;
    document.getElementById("Computerscore").innerHTML = computer;
    
    if (player === 5 || computer === 5) {
        endGame();
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}
function endGame() {
    if (player === 5) {
        document.getElementById("result").innerHTML=("You win!");
        document.getElementById("result").style.color="red";
        document.getElementById("result").style.fontSize="x-large";
    } else {
        document.getElementById("result").innerHTML = ("Computers wins!");
        document.getElementById("result").style.color="red";
        document.getElementById("result").style.fontSize="x-large";
    }
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true; 
}

const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', function() {
    restartGame();
});

function restartGame() {
    player = 0;
    computer = 0;
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("feedbackpc").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("Playerscore").innerHTML = player;
    document.getElementById("Computerscore").innerHTML = computer;
    document.getElementById("result").style.color="green";
    document.getElementById("result").style.fontSize="large";
    
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false; 
}
