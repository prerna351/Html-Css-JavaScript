let randomNum = parseInt(Math.random()*100+1);
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#guessSubmit');
const msg = document.querySelector('.displayMsg');
const remainingGuesses = document.querySelector('.lastResult');
const previous_guesses = document.querySelector('.guesses');
const startOver = document.querySelector('.result');
const p = document.createElement('p');

let playGame = true;
let prev_guesses =[];
let numOfGuesses = 1;

if(playGame){
    
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const input = parseInt(userInput.value);
        validateGuess(input);
    })
}
//validate the input
function validateGuess(input){
    if(isNaN(input)){
        alert('Enter a valid number')
    } else if(input<1  ){
        alert('Enter a number between 1 to 100')
    }else if(input>100){
        alert('Enter a number between 1 to 100')
        // compareInput(input)
    }else{
        prev_guesses.push(input);
        if(numOfGuesses===10){
            updateGuesses(input)
            displayMessage(`Game Over. Random number was ${randomNum}`);
            endGame();
        }
        else {
            updateGuesses(input);
            compareInput(input);
          }
    }
}
//compare the input with random number
function compareInput(input){
    if(input === randomNum){
        displayMessage('You have guessed it right')
        
        endGame();
        
    }else if(input < randomNum){
        displayMessage('Number is low');
        
    }else{
        displayMessage('Number is high');
        
    }
}
//display messages
function displayMessage(message){
    msg.innerHTML = `<h2>${message}</h2>`;
}

//update previous guesses and remaining guesses
function updateGuesses(input){
    previous_guesses.innerHTML +=`${input}   `;
    numOfGuesses++;
    remainingGuesses.innerHTML = `${11-numOfGuesses}`
}

function endGame(){
    userInput.value ='';//clean the field
    userInput.setAttribute('disabled', '');//the user cannot use the input field after the game ends
    p.classList.add('button');
    p.innerHTML= '<h3 id ="new_game">Start New Game</h3>'
    p.style.cursor = 'pointer';
    startOver.appendChild(p);
    playGame = false;
    newGame();
    
}
//function to start new game
function newGame(){
    const newGameButton = document.querySelector('#new_game');
    newGameButton.addEventListener('click',function(e){
        randomNum = parseInt(Math.random()*100+1);
        prev_guesses = [];
        numOfGuesses = 1;
        previous_guesses.innerHTML = '';
        remainingGuesses.innerHTML = `${11-numOfGuesses}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
}