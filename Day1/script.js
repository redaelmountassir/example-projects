// Assignment 1
// Your code here
console.log("Hello World!");
// Assignment 2
window.onload = run;

function run() {
	const btnA = document.getElementById('a');
	const btnB = document.getElementById('b');
	const btnC = document.getElementById('c');
	const output = document.getElementById('output');

	// Your code
	btnA.addEventListener("click", function(){
		output.textContent = "Option A was clicked!"});
	
	btnB.addEventListener("click", function(){
		output.textContent = "Option B was clicked!"});

	btnC.addEventListener("click", function(){
		output.textContent = "Option C was clicked!"});	


}
