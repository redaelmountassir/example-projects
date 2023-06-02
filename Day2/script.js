'use strict';

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