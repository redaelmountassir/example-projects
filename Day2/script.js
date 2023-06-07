'use strict';

// Assignment 1
window.onload = run;

function run() { 
    const moves = document.getElementsByClassName("move");
    const winningMoves = document.getElementById("winning-moves");

    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];

        // Your code
        const moveText = move.textContent
        let winningMoveText = '';
        
        console.log(moveText);

        switch (moveText) {
            case "Scissors":
                winningMoveText = "Rock"
                console.log(winningMoveText)
                break;
            case "Rock":
                winningMoveText = "Paper"
                console.log(winningMoveText)
                break;
            case "Paper":
                winningMoveText = "Scissors"
                console.log(winningMoveText)
                break;
            }

    
        const listElement = document.createElement("li");
        listElement.textContent = winningMoveText;
        winningMoves.appendChild(listElement);
    }
}

// Assignment 2
function selectRandom() {
    const moves = ["Scissors", "Rock", "Paper"];
    const randomIndex = Math.floor(Math.random() * 3);
    const randomMove = moves[randomIndex];
    console.log(randomMove);
    console.log(moves[0]);
};
window.setInterval(selectRandom, 2000);

selectRandom();
