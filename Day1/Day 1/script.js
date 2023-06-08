
//Print 
console.log("Hello World");


//second part

window.onload = run

function run () {
const buttonA = document.getElementById('a');
const buttonB = document.getElementById('b');
const buttonC = document.getElementById('c');
const output =  document.getElementById('output');

buttonA.addEventListener('click', function() {
    output.textContent = "A for Apple was Chosen"});

buttonB.addEventListener('click', function(){
    output.textContent = "B for Bananna was Chosen!"});

    buttonC.addEventListener('click', function(){
        output.textContent = "C for Cat was Chosen!"});
}



