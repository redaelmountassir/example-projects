'use strict';

class Calculator {
	constructor(btns, eqlBtn, acBtn, cBtn, screen) {
		this.screen = screen;
		// Converts to array
		[...btns].forEach(btn =>
			btn.addEventListener('click', () => this.addChar(btn.textContent))
		);
		eqlBtn.addEventListener('click', this.calc.bind(this));
		acBtn.addEventListener('click', this.clearAll.bind(this));
		cBtn.addEventListener('click', this.clear.bind(this));
	}

	addChar(char) {
		if (this.invalidPopup) return;
		this.screen.textContent += char;
	}

	calc() {
		if (this.invalidPopup) return;
		const expression = this.screen.textContent.trim();
		if (expression === '') return;

		const tokenizer = new Tokenizer();
		const tokens = tokenizer.tokenize(expression);
		if (tokens === undefined) return this.invalidate(expression);

		const parser = new Parser(tokens);
		const ast = parser.parse();
		if (ast === undefined) return this.invalidate(expression);

		const interpreter = new Interpreter();
		const result = interpreter.visit(ast);
		if (Number.isNaN(result)) return this.invalidate(expression);
		this.screen.textContent = this.capNumber(result, 10);
	}

	capNumber(number, maxPlaces) {
		const parts = number.toString().split('.');
		if (!parts[1]) return number.toString();
		const integerPart = parts[0]; //Conserve the integer part no matter what
		const decimalPart = parts[1];
		const maxDecimalPlaces = maxPlaces - integerPart.length - 1;

		if (maxDecimalPlaces <= 0)
			return Math.round(
				parseFloat(`${integerPart}.${decimalPart[0]}`)
			).toString();
		if (maxDecimalPlaces >= decimalPart.length) return number.toString();
		const consideredPart =
			parseFloat(decimalPart.substring(0, maxDecimalPlaces + 1)) / 10;
		return `${integerPart}.${Math.round(consideredPart)}`;
	}

	clearAll() {
		if (this.invalidPopup) return;
		this.screen.textContent = '';
	}

	clear() {
		if (this.invalidPopup) return;
		const string = this.screen.textContent;
		if (string.length == 0) return;
		this.screen.textContent = string.substring(0, string.length - 1);
	}

	invalidate(oldText) {
		this.invalidPopup = true;
		this.screen.textContent = 'Bad Input';
		setTimeout(() => {
			this.screen.textContent = oldText;
			this.invalidPopup = false;
		}, 1500);
	}
}

class Token {
	//Fake Enum
	static Types = {
		NUM: 'NUM',
		ADD: 'ADD',
		SUB: 'SUB',
		MUL: 'MUL',
		DIV: 'DIV',
	};

	constructor(type, val) {
		this.type = type;
		this.val = val;
	}
}

class Tokenizer {
	tokenize(expression) {
		let tokens = [];
		let numBuilder = '';
		for (const char of expression) {
			const isInt = !Number.isNaN(parseInt(char));
			switch (char) {
				//For positive & negative vs addition & subtraction
				case '+':
				case '-':
					if ('+-'.includes(numBuilder)) {
						// Same sign is positive, opposite signs is negative
						numBuilder = numBuilder === char ? '+' : '-';
						continue;
					}
					//Should be at the beginning of a number
					if (numBuilder !== '') break;
					numBuilder = char;
					continue;
				case '.':
					if (numBuilder.includes('.')) return undefined; //Only one decimal point per num
					numBuilder += char;
					continue;
				default:
					if (!isInt) break;
					numBuilder += char;
					continue;
			}

			const num = parseFloat(numBuilder);
			if (numBuilder === '' || Number.isNaN(num)) return undefined;
			numBuilder = '';

			let type;
			switch (char) {
				case '+':
					type = Token.Types.ADD;
					break;
				case '-':
					type = Token.Types.SUB;
					break;
				case '×':
					type = Token.Types.MUL;
					break;
				case '÷':
					type = Token.Types.DIV;
					break;
			}

			tokens.push(new Token(Token.Types.NUM, num), new Token(type, char));
		}

		const num = parseFloat(numBuilder);
		if (numBuilder === '' || Number.isNaN(num)) return undefined;
		else tokens.push(new Token(Token.Types.NUM, parseFloat(numBuilder)));

		return tokens;
	}
}

class Parser {
	constructor(tokens) {
		this.index = 0;
		this.tokens = tokens;
		this.currentToken = this.tokens[this.index];
	}

	advance() {
		this.currentToken = this.tokens[++this.index];
	}

	factor() {
		const token = this.currentToken;
		if (token.type == Token.Types.NUM) {
			this.advance();
			return token;
		}

		throw new Error('Syntax Error');
	}

	term() {
		let result = this.factor();

		while (
			this.currentToken &&
			[Token.Types.MUL, Token.Types.DIV].includes(this.currentToken.type)
		) {
			const type = this.currentToken.type;
			this.advance();
			result = {
				type,
				left: result,
				right: this.factor(),
			};
		}

		return result;
	}

	expression() {
		let result = this.term();

		while (
			this.currentToken &&
			[Token.Types.ADD, Token.Types.SUB].includes(this.currentToken.type)
		) {
			const type = this.currentToken.type;
			this.advance();
			result = {
				type,
				left: result,
				right: this.term(),
			};
		}

		return result;
	}

	parse() {
		if (!this.currentToken) return undefined;

		try {
			const result = this.expression();
			if (this.currentToken !== undefined) throw new Error('Syntax Error');
			return result;
		} catch (err) {
			console.error(err);
			return undefined;
		}
	}
}

class Interpreter {
	visitNUM(node) {
		return node.val;
	}

	visitADD(node) {
		return this.visit(node.left) + this.visit(node.right);
	}

	visitSUB(node) {
		return this.visit(node.left) - this.visit(node.right);
	}

	visitMUL(node) {
		return this.visit(node.left) * this.visit(node.right);
	}

	visitDIV(node) {
		const right = this.visit(node.right);
		if (right === 0) throw new Error('Math Error');
		return this.visit(node.left) / right;
	}

	visit(node) {
		try {
			const method = this[`visit${node.type}`].bind(this);
			return method(node);
		} catch (err) {
			console.error(err);
			return NaN;
		}
	}
}
