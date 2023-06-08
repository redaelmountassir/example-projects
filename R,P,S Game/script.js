window.onload = run;

function run() {
const btnA = document.getElementById('a');
const btnB = document.getElementById('b');
const btnC = document.getElementById('c');
const output = document.getElementById('output');

random();
	
btnA.addEventListener("click", function(){
    random();
    const player2result = document.getElementById("player2");
    let player2 = player2result.textContent;
    let player1 = "Paper";
    whowins(player1,player2);
	output.textContent = "Paper was clicked!"});
    
	
btnB.addEventListener("click", function(){
    random();
    const player2result = document.getElementById("player2");
    let player2 = player2result.textContent;
    let player1 = "Scissors";
    whowins(player1,player2);
	output.textContent = "Scissors was clicked!"});

btnC.addEventListener("click", function(){
    random();
    const player2result = document.getElementById("player2");
    let player2 = player2result.textContent;
    let player1 = "Rock";
    whowins(player1,player2);
	output.textContent = "Rock was clicked!"});	
}

function random(){
    const list = ["Rock", "Paper", "Scissors"];
    let selectRandom =  Math.floor((Math.random() * 3));
    window.setInterval(selectRandom, 2000);
    let result = list[selectRandom];
    const player2 = document.getElementById("player2");
    player2.textContent = result;
}

function whowins(player1result,player2result){
    let player1 = player1result;
    let player2 = player2result;
    console.log(player1,player2);
   
   let outcome=""; 
    switch(player1){
        case "Rock":
            if (player2result === "Scissors"){
                 outcome = "You win!";
            } else if (player2result === "Paper"){
                outcome = "You lose!";
            } else{
                outcome = "It's a draw, you suck!";
            }
            break;
        case "Paper":
            if (player2result === "Rock"){
                outcome = "You win!";
           } else if (player2result === "Scissors"){
               outcome = "You lose, you suck!";
           } else{
               outcome = "It's a draw, you suck!";
           }
            break;
        case "Scissors":
            if (player2result === "Paper"){
                outcome = "You win!";
           } else if (player2result === "Rock"){
               outcome = "You lose!";
           } else{
               outcome = "It's a draw, you suck!";
           }
            break;
}
            let resulttext = document.getElementById("whowins");
            resulttext.textContent = outcome;
}


