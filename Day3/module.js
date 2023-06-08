// Assignment 1
class Expression {
	constructor(a, b, op) {
		this.a = a
		this.b = b
		this.op = op
	}

	evaluate() {
		switch (this.op) {
			case 'add':
				return this.a + this.b;
			case 'subtract':
				return this.a - this.b;
			case 'multiply':
				return this.a * this.b;
			case 'divide':
				return this.a / this.b;
		}
	}
}

export default Expression;
