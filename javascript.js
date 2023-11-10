let player = 0;
let computer = 0;
let tie= ("Tie");

document.getElementById("rock").addEventListener("click", function(){
    gameLogic("rock");
});
document.getElementById("paper").addEventListener("click", function(){
    gameLogic("paper");
});
document.getElementById("scissors").addEventListener("click", function(){
    gameLogic("scissors");
});

const playerScore = document.getElementById("playerscore");
const playerPick= document.getElementById("playerchoice");
const computerScore = document.getElementById("computerscore");
const computerPick= document.getElementById("computerchoice");
const feedBackText = document.getElementById("feedback");





function computerKeuze (){
    const randomPick = ['rock', 'paper', 'scissors'];

    const randomNumber = Math.floor(Math.random()  *3);
    console.log(randomPick[randomNumber])
    return (randomPick[randomNumber]);
}

function gameLogic(input) {
    console.log(input);
    const computerChoice= computerKeuze();
    if(input==computerChoice){
        console.log("Tie");
        
    }   
    else if (input=="rock") {
        if(computerChoice=="paper"){
            console.log("computer wins")
            computer++;
        }
        else{
            console.log("You win!");
            player++;
        }     
    } 
    else if(input=="scissors") {
        if(computerChoice=="paper"){
            console.log("You win!");
            player++;            
        }
        else{
            console.log("computer wins")
            computer++;            
        }
    }
    else if (input=="paper"){
        if(computerChoice=="rock"){
            console.log("You win!");
            player++;            
        }
        else{           
            console.log("computer wins")  
            computer++;
                    
        }

    }
    if (player == 5){
        let feedBack = "You win!";
        feedBackText.innerText = feedBack;
        player = 0;
        computer = 0;
    }
    if (computer == 5){
        let feedBack = "Computer wins!";
        feedBackText.innerText = feedBack;
        player = 0;
        computer = 0;
    }
    computerScore.innerText = computer;
    playerScore.innerText = player;

    if(input==computerChoice){
        let feedBack = "Tie";
        feedBackText.innerText = feedBack;
    }
   
}



    
    