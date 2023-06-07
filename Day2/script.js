'use strict';

// Assignment 1
window.onload = run;

function run() {
    const moves = document.getElementsByClassName("moves");
    const winningMoves = document.getElementById("winning-moves");

    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];

        // Your code
        const moveText = move.textContent
        let winningMoveText = '';

        switch (moveText) {
            case "Scissors":
                winningMoveText = "Rock"
                break;
            case "Rock":
                winningMoveText = "Paper"
                break;
            case "Paper":
                winningMoveText = "Scissors"
                break;
            }

    
        const listElement = document.createElement("li");
        listElement.textContent = winningMoveText;
        winningMoves.appendChild(listElement);
    }
}

// Assignment 2
const selectRandom = () => {
    const moves = ["Scissors", "Rock", "Paper"];
    const randomIndex = selectRandom(3);
    const randomMove = moves[randomIndex];
    console.log(randomMove);
};
window.setInterval(selectRandom, 2000);