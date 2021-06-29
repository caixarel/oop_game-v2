/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(){
        this.missed =0;
        this.phrases = [new Phrase('Ola tudo bem'),
        new Phrase('I love dogs'), 
        new Phrase('Walk on the snow'), 
        new Phrase('I like computers'), 
        new Phrase('We watch football'), 
        ];
        this.activePhrases = null;
    }
    
    //Function that will begin a new game
    startGame(){
        //The starting screen will not displayed anymore
        const screenOverlay = document.getElementById('overlay');
        screenOverlay.style.display = "none";
        //The new screen with the letter buttons and the secret phrase are shown
        this.activePhrases = this.getRandomPhrase();
        this.activePhrases.addPhraseToDisplay();
    }

    //A reandom phrase will be chosen from the phrases array defined on the constructor
    getRandomPhrase(){
        const randomNumber=Math.floor(Math.random()*this.phrases.length) ;
        return this.phrases[randomNumber];
    }

    //The game's interaction will be handled in this function
    handleInteraction(letter){
        const phrase = new Phrase(game.activePhrases.phrase);
        //conditional created to prevent the user from using his keyboard to select a
        // letter to wich is button is disabled
        if(letter.disabled== false){
            //Condition that uses the boolean result from the checkletter function
            if(phrase.checkLetter(letter.textContent)){
                //The color of the letter button will change
                letter.classList.add('chosen');
                //The letters guessed correctly willbe will be shown
                phrase.showMatchedLetter(letter.textContent);
                //The letter button becomes disabled to prevent the user from repeating the same letters
                letter.disabled = true;
                this.checkForWin();
            } 
            else{
                //Different color and animation will be added to the letter button
                if(this.missed<4){
                    letter.classList.add('wrong');
                    letter.disabled = true;
                }
                this.removeLife();
            }
        }
    }

    //When the user misses a letter he loses 1 life
    removeLife(){
        let hasMoreLives= true;
        //If the user still has lives we will lose 1
        if(this.missed<4){
            const lives = document.getElementById('scoreboard').firstElementChild;
            lives.children[this.missed].firstElementChild.src = "images/lostHeart.png";
            this.missed++;
        }
        //when the user has no more lives is gameOver
        else{
            hasMoreLives=false;
            this.gameOver(hasMoreLives);
        }
    
    }

    //Function that verifies if the user has won
    checkForWin(){
        const phrase =document.getElementById('phrase').firstElementChild.children;
        let hiddenLetters = 0;
        let hasWon =false
        //Checks how many letters are still hidden
        for(let i = 0 ; i<phrase.length;i++){
            if(phrase[i].classList.contains("hide")){
                hiddenLetters++;
            }
        }
        //If no more letters are hidden then the user has won
        if(hiddenLetters==0){
            hasWon=true;
            this.gameOver(hasWon);
        }
    }

    //function that will display the gameOver screens
    gameOver(state){
        const screenOverlay = document.getElementById('overlay');
        const gameOverMessage = document.getElementById('game-over-message');
        screenOverlay.style.display = "block";
        this.missed= 0;
        if (state){
            gameOverMessage.textContent= 'Congratulations, you guessed the hidden Phrase.'
            screenOverlay.className = "win";
        }
        else{
            gameOverMessage.textContent= `You failed to guess the hidden Phrase.` ;
            screenOverlay.className = "lose";
        }
        //When the gameOver menu is being displayed the user will not trigger the game's interation function
        canPlay =false;
    }
}