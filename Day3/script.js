//Assignment 2
import Expression from './module.js';
window.onload = run;

function run() {
	const num1 = document.getElementById('number-1');
	const ops = document.getElementById('operations');
	const num2 = document.getElementById('number-2');
	const eqlBtn = document.getElementById('equals');
	const output = document.getElementById('output');

	eqlBtn.addEventListener('click', () => {
		const valueA = parseInt(num1.value);
		const valueB = parseInt(num2.value);
		const operater = ops.value;

		const expression = new Expression(valueA, valueB, operater);
		const result = expression.evaluate();
		output.textContent = `Result: ${result}`;
	});
}
