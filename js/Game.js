/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(){
        this.missed =0;
        this.phrases = ['Ola tudo bem',
        'I love dogs', 
        'Walk on the snow',
        'I like computers',
        'We watch football'];
        this.activePhrases = null;
    }
    startGame(){
        const screenOverlay = document.getElementById('overlay');
        screenOverlay.style.display = "none";
        this.activePhrases = this.getRandomPhrase();
        this.activePhrases.addPhraseToDisplay();
    }
    getRandomPhrase(){
        const randomNumber=Math.floor(Math.random()*this.phrases.length) ;
        const phrase = new Phrase(this.phrases[randomNumber]);
        console.log(this.phrases[randomNumber]);
        return phrase;
    }
    handleInteraction(letter){
        const phrase = new Phrase(game.activePhrases.phrase);
        phrase.checkLetter(letter);
        console.log('eeeeee')
    }
    removeLife(){

    }
    checkForWin(){

    }
    gameOver(){

    }
}