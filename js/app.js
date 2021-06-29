/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startGameButton = document.getElementById('btn__reset');
const letterButtons = document.getElementsByClassName('key');
let game ;
//If the user is on the Menus the game interactions should be disabled
let canPlay=false;

//Iteration over all the letter buttons
    for(let i = 0;i< letterButtons.length; i++){
        //If the mouse is hovering a button a new style will be added to that button
        letterButtons[i].addEventListener('mouseover',(event)=>{
            canPlay && event.target.classList.add('hovering');
        })
        //If the mouse is not hovering a button it's style will be as ion the start of the game
        letterButtons[i].addEventListener('mouseout',(event)=>{
            canPlay &&  event.target.classList.remove('hovering');
        })
        //When one button is pressed the game interaction will be triggered
        letterButtons[i].addEventListener('click',(e)=> 
        {
            canPlay &&  e.target.classList.remove('hovering');
            canPlay &&  game.handleInteraction(e.target);
        })
    }


//If insted of using the letter buttons the user uses his beyboard
//the game interaction will still be triggered
document.addEventListener('keydown',(event)=>{
    for(let j = 0;j<letterButtons.length;j++){
        if(event.key===letterButtons[j].textContent && canPlay){
            game.handleInteraction(letterButtons[j]);
        }
    }
})
//When the Start Game button is click a new game will start
startGameButton.addEventListener('click',(e)=>{   
    game = new Game();
    const ul = document.getElementById('phrase').firstElementChild;
    ul.innerHTML= "";
    const lives = document.getElementById('scoreboard').firstElementChild;
    //resets the buttons to their initial state
    for(let i = 0;i< letterButtons.length; i++){
        letterButtons[i].className = 'key';
        letterButtons[i].disabled = false;
    }
    //resets the number of lives
    for(let j = 0 ; j<lives.children.length ; j++){
        lives.children[j].firstElementChild.src = "images/liveHeart.png";
    }
    //enables the game interaction
    canPlay=true;
    game.startGame();
})
