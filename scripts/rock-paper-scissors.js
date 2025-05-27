let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

Uscore();


/*
if(!score){
score = {
  wins: 0,
  loses: 0,
  ties: 0
};
}
*/

document.querySelector('.js-auto-button').addEventListener('click', () => {
  autoPlay();

})

document.querySelector('.js-score-button').addEventListener('click', () =>{

  document.querySelector('.js-confirmation').innerHTML = `Are you sure you want to reset the score 
  <button class ="yes-button">YES</button> <button class = "no-button">NO</button>`

  document.querySelector('.yes-button').addEventListener('click', () =>{
    score.loses = 0;
    score.wins = 0;
    score.ties = 0;
    
    localStorage.removeItem('score');
    
    Uscore();

    document.querySelector('.js-confirmation').innerHTML =''

})

  document.querySelector('.no-button').addEventListener('click', () =>{

    document.querySelector('.js-confirmation').innerHTML =''

  })

})



let isAutoPlaying = false;
let intervalId;

function autoPlay(){

  autoButton = document.querySelector('.js-auto-button');
  

  
if (!isAutoPlaying){

  autoButton.innerHTML = 'STOP'
 intervalId = setInterval(() => {
  
    const playerMove = pickComputerMove();


    playGame(playerMove);

  }, 1000);
  isAutoPlaying = true;
  

}
else{

  autoButton.innerHTML = 'AUTO PLAY'

clearInterval(intervalId);

isAutoPlaying = false;

}

}


document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
})

document.querySelector('.js-paper-button').addEventListener('click', () =>{
  playGame('paper');
})

document.querySelector('.js-scissors-button').addEventListener('click', () =>{
  playGame('scissors')
})

document.body.addEventListener('keydown', (event) =>{

if (event.key === 'r'){

  playGame('rock');

} else if (event.key === 'p' ){

playGame('paper');

} else if (event.key === 's'){

playGame('scissors')

} else if (event.key === 'a'){

  autoPlay()

} else if (event.key === 'Backspace'){

document.querySelector('.js-confirmation').innerHTML = `
  Are you sure you want to reset the score?  
  <button class="yes-button">YES</button>
  <button class="no-button">NO</button>
`;

  document.querySelector('.yes-button').addEventListener('click', () =>{
    score.loses = 0;
    score.wins = 0;
    score.ties = 0;
    
    localStorage.removeItem('score');
    
    Uscore();

    document.querySelector('.js-confirmation').innerHTML = '';

  })

  
  document.querySelector('.no-button').addEventListener('click', () =>{

    document.querySelector('.js-confirmation').innerHTML =''

  })


}

})




function playGame(playerMove){

const computerMove = pickComputerMove(playerMove);
result = '';

if (playerMove === 'scissors'){
 
  if (computerMove === 'rock'){
  result = 'You lose :C';
  
} else if (computerMove === 'paper'){
  result = 'You win!';

} else if (computerMove === 'scissors'){
  result = 'Its a Tie';
}


} else if(playerMove === 'paper'){

if (computerMove === 'rock'){
  result = 'You win!';
  
} else if (computerMove === 'paper'){
  result = 'Its a Tie';

} else if (computerMove === 'scissors'){
  result = 'You lose :C';
}


} else if(playerMove === 'rock'){

  if (computerMove === 'rock'){
    result = 'Its a Tie';
    
  } else if (computerMove === 'paper'){
    result = 'You lose :C';

  } else if (computerMove === 'scissors'){
    result = 'You win!';
  }

}

if (result === 'You lose :C'){
  score.loses = score.loses + 1;
  document.querySelector('.js-result').style.color = 'red'
    document.querySelector('.js-result').style.textShadow = '2px 2px 5px orange';

} else if(result === 'You win!'){
  document.querySelector('.js-result').style.color = 'lightgreen'
  document.querySelector('.js-result').style.textShadow = '2px 2px 5px violet';
  score.wins = score.wins + 1;
} else if (result === 'Its a Tie'){
  score.ties = score.ties + 1;  
  document.querySelector('.js-result').style.color = 'white'
    document.querySelector('.js-result').style.textShadow = '2px 2px 5px grey';

} 


localStorage.setItem('score', JSON.stringify(score));

Uscore();

document.querySelector('.js-result')
.innerHTML=`${result}` 

document.querySelector('.js-move')
  .innerHTML=`YOU PICKED
<img class="move-icon" src = "images/${playerMove}-emoji.png">
<img  class ="move-icon" src = "images/${computerMove}-emoji.png">
COMPUTER PICKED` 



}


function Uscore(){
document.querySelector('.js-score')
  .innerHTML= `WINS: ${score.wins}. LOSSES: ${score.loses}. TIES: ${score.ties}.`;

}




function pickComputerMove(){
let computerMove = '';

const randomNumber = Math.random();

if(randomNumber >= 0 && randomNumber < 1/3){
computerMove = 'rock';

} else if(randomNumber > 1/3 && randomNumber < 2/3){
computerMove = 'paper';

} else if (randomNumber > 2/3 && randomNumber < 1){

computerMove = 'scissors';
}

return computerMove;


}

// Some for the CSS

const teclaR =  document.querySelector('.tecla-r');
const teclaP = document.querySelector('.tecla-p');
const teclaS = document.querySelector('.tecla-s');
const teclaA = document.querySelector('.tecla-a')
const teclaBackspace = document.querySelector('.tecla-backspace')

document.querySelector('.js-rock-button').addEventListener('mouseenter', ()=>{
  teclaR.style.opacity = '1';
})

document.querySelector('.js-rock-button').addEventListener('mouseleave', ()=>{
  teclaR.style.opacity = '0';
})

document.querySelector('.js-paper-button').addEventListener('mouseenter', ()=>{
  teclaP.style.opacity = '1';
})

document.querySelector('.js-paper-button').addEventListener('mouseleave', ()=>{
  teclaP.style.opacity = '0';
})

document.querySelector('.js-scissors-button').addEventListener('mouseenter', ()=>{
  teclaS.style.opacity = '1';
})

document.querySelector('.js-scissors-button').addEventListener('mouseleave', ()=>{
  teclaS.style.opacity = '0';
})

document.querySelector('.js-auto-button').addEventListener('mouseenter', () =>{
  teclaA.style.opacity = '1';
})

document.querySelector('.js-auto-button').addEventListener('mouseleave', () =>{
  teclaA.style.opacity = '0';
})

if (!document.querySelector('.js-auto-button').innerHTML === 'STOP'){

}


document.querySelector('.js-score-button').addEventListener('mouseenter', () =>{
  teclaBackspace.style.opacity = '1';
})

document.querySelector('.js-score-button').addEventListener('mouseleave', () =>{
  teclaBackspace.style.opacity = '0';
})


