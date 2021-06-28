/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startGameButton = document.getElementById('btn__reset');
const letterButtons = document.getElementsByClassName('key');
console.log(letterButtons);
const game = new Game();


for(let i = 0;i< letterButtons.length; i++){
    letterButtons[i].addEventListener('click',(e)=> 
    {
       console.log(e.target.textContent); 
        game.handleInteraction(e.target.textContent);

    })
}

document.addEventListener('keydown',(event)=>{
    //console.log(game.activePhrases.toLowerCase);
    game.handleInteraction(event.key);
})

startGameButton.addEventListener('click',(e)=>{
    game.startGame();
})
