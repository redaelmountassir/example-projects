// Assignment 1
class Expression {
	constructor(a, b, op) {
		this.a = a;
		this.b = b;
		this.op = op;
	}

	evaluate() {
		switch (this.op) {
			case "multiply":
				return this.a * this.b;
				break;
			case "divide":
				return this.a / this.b;
				break;
			case "add":
				return this.a + this.b;
				break;
			case "subract":
				return this.a - this.b;
				break;
		}
	}
}

export default Expression;
