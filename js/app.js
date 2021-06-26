/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startGameButton = document.getElementById('btn__reset');
const letterButtons = document.getElementsByClassName('key');
console.log(letterButtons);
const game = new Game();




document.addEventListener('keydown',(event)=>{
    //console.log(game.activePhrases.toLowerCase);
const phrase = new Phrase(game.activePhrases.phrase);


    phrase.checkLetter(event.key);
})

startGameButton.addEventListener('click',(e)=>{
    game.startGame();
})
