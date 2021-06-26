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
        this.getRandomPhrase();
        this.activePhrases = this.getRandomPhrase();
        console.log(this.activePhrases);
        this.activePhrases.addPhraseToDisplay();
    }
    getRandomPhrase(){
        const randomNumber=Math.floor(Math.random()*this.phrases.length) ;
        const phrase = new Phrase(this.phrases[randomNumber]);
        return phrase;
    }
    handleInteraction(){

    }
    removeLife(){

    }
    checkForWin(){

    }
    gameOver(){

    }
}