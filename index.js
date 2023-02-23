var homeEl = document.getElementById("score-home")
var guessEl = document.getElementById("score-guess")

let scoreHome = 0
let scoreGuess = 0

//HOME SCORE
function homeone(){
    scoreHome += 1
    homeEl.textContent = scoreHome
}
function hometwo(){
    scoreHome += 2
    homeEl.textContent = scoreHome
}
function homethree(){
    scoreHome += 3
    homeEl.textContent = scoreHome
}

//GUESS SCORE
function guessone(){
    scoreGuess += 1
    guessEl.textContent = scoreGuess
}
function guesstwo(){
    scoreGuess += 2
    guessEl.textContent = scoreGuess
}
function guessthree(){
    scoreGuess += 3
    guessEl.textContent = scoreGuess
}