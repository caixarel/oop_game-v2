/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startGameButton = document.getElementById('btn__reset');
const letterButtons = document.getElementsByClassName('key');
console.log(letterButtons);
const game = new Game();


for(let i = 0;i< letterButtons.length; i++){
    
    letterButtons[i].addEventListener('mouseover',(event)=>{
        event.target.classList.add('hovering');
    })

    letterButtons[i].addEventListener('mouseout',(event)=>{
        event.target.classList.remove('hovering');

    })
    letterButtons[i].addEventListener('click',(e)=> 
    {
        event.target.classList.remove('hovering');
        game.handleInteraction(e.target);
    })
}

document.addEventListener('keydown',(event)=>{
    for(let j = 0;j<letterButtons.length;j++){
        if(event.key===letterButtons[j].textContent){
            game.handleInteraction(letterButtons[j]);
        }
    }
})

startGameButton.addEventListener('click',(e)=>{
    const ul = document.getElementById('phrase').firstElementChild;
    ul.innerHTML= "";
    const lives = document.getElementById('scoreboard').firstElementChild;

    for(let i = 0;i< letterButtons.length; i++){
        letterButtons[i].className = 'key';
        letterButtons[i].disabled = false;
    }
    for(let j = 0 ; j<lives.children.length ; j++){
        lives.children[j].firstElementChild.src = "images/liveHeart.png";

    }

    game.startGame();
})
