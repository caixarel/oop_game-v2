/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    //The frase to be displayed will be created
    addPhraseToDisplay(){
        const ul = document.getElementById('phrase').firstElementChild;
        //iteration over the phrase to create a HTML list for each character
        for(let i = 0 ; i<this.phrase.length;i++ ){
            const char = this.phrase.charAt(i);
            //list format for each space
            const spaceLi= '<li class="space"> </li>';
            //list format used for each letter
            const letterLi = `<li class="hide letter ${char}">${char}</li>`;
            
            if(char == " "){
                ul.insertAdjacentHTML("beforeend",spaceLi);
            }
            else{
                ul.insertAdjacentHTML("beforeend",letterLi);
            }
        }
    }
    //function that receives the letter chosen by the user and checks 
    //to see if it is part to the active phrase
    checkLetter(letter){
        let hasLetter = false;
        //iteration over all the characters of the active phrase
        for(let i= 0;i<this.phrase.length;i++){
            //if the active phrase contains the letter chosen by the user
            //the function returns true, otherwise returns false
            if(letter == this.phrase[i]){
               hasLetter=true;
            }
        }
        return hasLetter
        
    }
    //Function that display the correct letters chosen by the user
    showMatchedLetter(letter){
        const correctletters =document.getElementsByClassName(`letter ${letter}`);
        for(let i = 0 ; i<correctletters.length;i++){
            correctletters[i].className =  `show letter ${letter}`;
        }
    }
}