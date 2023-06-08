'use strict';

// Assignment 1
window.onload = run;

function run() {
    const moves = document.getElementsByClassName("move");
    const winningMoves = document.getElementById("winning-moves");

    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];

        // Your code
    let text = move.textContent;
    let win = "";    
    switch(text){
        case "Rock":
            win = "Paper";
            console.log("Winning move", win);  
            break;
        case "Paper":
            win = "Scissors";
            console.log("Winning move", win);
            break;
        case "Scissors":
            win = "Rock";
            console.log("Winning move", win); 
            break;


    }       
    
        const listElement = document.createElement("li");
        listElement.textContent = win;
        winningMoves.appendChild(listElement);
    }
}

//Assignment 2
const list = ["Rock", "Paper", "Scissors"];
let selectRandom =  Math.floor((Math.random() * 3));
window.setInterval(selectRandom, 2000);
console.log(list[selectRandom]," - ", selectRandom);