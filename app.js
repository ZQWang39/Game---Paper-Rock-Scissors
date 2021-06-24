const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

//Characters
const scoreBoard = {
    You:0,
    AI:0
};

//Start to play
function play(e){
    //console.log(e.target.id);
    //player choice
    const playerChoice = e.target.id;

    //computer choice
    const computerChoice = getComputerChoice();

    //Get winner

    const winner = getWinner(playerChoice, computerChoice);

    //console.log(`You chose ${playerChoice}, AI chose ${computerChoice}, winner is ${winner}`);
    showWinner(winner, computerChoice);
   //Show score

   score.innerHTML = `
   <p>You:${scoreBoard.You}</p>
   <p>AI:${scoreBoard.AI}</p>
   `;
   //Display modal
   
   modal.style.display = "block";

   //Clear modal

   window.addEventListener("click", clearModal);
   
   //Restart Game

   restart.addEventListener('click', restartGame);

}

//player choice function
choices.forEach(function(choice){
    choice.addEventListener('click',play)

})

//computer choice function

function getComputerChoice(){
    const random = Math.random();
    //console.log(random);
    if (random <= 0.33334) {
        return "paper"
    }
    else if (random >0.33334 && random <=0.6666667){
     return "rock"
    }else{
        return "scissors"
    }
}

//Get winner function 

function getWinner(p, c){
    if (p === c){
        return 'Draw'
    }else if (p === "rock"){
        if(c === "paper"){
            return "AI"
        }else{
            return "You"
        }
    }else if (p === "paper"){
        if (c === "scissors"){
            return "AI"
        }else {
            return "You"
        }
    }else if(p === "scissors"){
        if (c === "rock"){
            return "AI"
        }else{
            return "You"
        }
    }
      
}

//display modal

function showWinner(winner, computerChoice){
    
    if (winner === "You"){
        scoreBoard.You++;
        result.innerHTML = `<h1>(*^▽^*) You WIN!!!</h1>
        <i class="far fa-hand-${computerChoice} fa-10x" ></i>
        <p>AI chose ${computerChoice}</p>`
    }else if (winner === "AI"){
        scoreBoard.AI++;
        result.innerHTML = `<h1>o(╥﹏╥)o You LOSE!!!</h1>
        <i class="far fa-hand-${computerChoice} fa-10x" ></i>
        <p>AI chose ${computerChoice}</p>`
    }else{
        result.innerHTML = `<h1>Draw!!!</h1>
        <i class="far fa-hand-${computerChoice} fa-10x" ></i>
        <p>AI chose ${computerChoice}</p>`
    }
}

function clearModal(e){
    if (e.target.className === "modal"){
        modal.style.display = "none"
    }
}

function restartGame(){
    scoreBoard.You = 0;
    scoreBoard.AI = 0;
    score.innerHTML =`
    <p>You:0</p>
    <p>AI:0</p>
    `
}












