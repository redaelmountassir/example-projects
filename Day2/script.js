'use strict';

// Assignment 1
window.onload = run;

function run() {
    const moves = document.getElementsByClassName("moves");
    const winningMoves = document.getElementById("winning-moves");

    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];

        // Your code
    
        const listElement = document.createElement("li");
        listElement.textContent = /* You code */;
        winningMoves.appendChild(listElement);
    }
}

// Assignment 2
const selectRandom = /* Your code */;
window.setInterval(selectRandom, 2000);