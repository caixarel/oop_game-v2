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
        if(letter.disabled== false){
            if(phrase.checkLetter(letter.textContent)){
                letter.classList.add('chosen');
                phrase.showMatchedLetter(letter.textContent);
                letter.disabled = true;
                this.checkForWin();
            } 
            else{
                letter.classList.add('wrong');
                letter.disabled = true;
                this.removeLife();
            }
        }
        
    }
    removeLife(){
        let hasMoreLives= true;
        if(this.missed<4){
            const lives = document.getElementById('scoreboard').firstElementChild;
            lives.children[this.missed].firstElementChild.src = "images/lostHeart.png";
            this.missed++;
        }
        else{
            hasMoreLives=false;
            this.gameOver(hasMoreLives);

        }
        
       
    }
    checkForWin(){
        const phrase =document.getElementById('phrase').firstElementChild.children;
        let hiddenLetters = 0;
        let hasWon =false
        for(let i = 0 ; i<phrase.length;i++){
            if(phrase[i].classList.contains("hide")){
                hiddenLetters++;
            }
        }
        if(hiddenLetters==0){
            hasWon=true;
            this.gameOver(hasWon);
            
        }
    }
    gameOver(state){
        const screenOverlay = document.getElementById('overlay');
        screenOverlay.style.display = "block";
        const gameOverMessage = document.getElementById('game-over-message');
        this.missed= 0;
        if (state){
            gameOverMessage.textContent= 'Congratulations, you guessed the hidden Phrase.'
            screenOverlay.className = "win";
            
        }
        else{
            gameOverMessage.textContent= 'You failed to guess the hidden Phrase.'
            screenOverlay.className = "lose";

        }
    }
}