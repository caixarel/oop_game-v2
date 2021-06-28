/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        const ul = document.getElementById('phrase').firstElementChild;
        for(let i = 0 ; i<this.phrase.length;i++ ){
            const char = this.phrase.charAt(i);
            const spaceLi= '<li class="space"> </li>';
            const letterLi = `<li class="hide letter ${char}">${char}</li>`;
            if(char == " "){
                ul.insertAdjacentHTML("beforeend",spaceLi);
            }
            else{
                ul.insertAdjacentHTML("beforeend",letterLi);
            }
        }
    }
    
    checkLetter(letter){
        let hasLetter = false;
        console.log(this.phrase);
        for(let i= 0;i<this.phrase.length;i++){
            if(letter == this.phrase[i]){
               hasLetter=true;
            }
        }
        if(hasLetter){
            this.showMatchedLetter(letter);
        }
    }
    showMatchedLetter(letter){
        const correctletters =document.getElementsByClassName(`letter ${letter}`);
        for(let i = 0 ; i<correctletters.length;i++){
            correctletters[i].className =  `show letter ${letter}`;
        }
    }
}