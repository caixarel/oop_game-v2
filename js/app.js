/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startGameButton = document.getElementById('btn__reset');


const game = new Game();





document.addEventListener('keydown',(event)=>{
    phrase.checkLetter(event.key);
})

startGameButton.addEventListener('click',(e)=>{
    game.startGame();
})
