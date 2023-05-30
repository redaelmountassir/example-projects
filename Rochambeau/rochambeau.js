const OPTIONS = {
	Rock: '🪨',
	Paper: '📄',
	Scissors: '✂️',
};

const WIN_MESSAGE = 'Congrats! You Won!';
const LOSE_MESSAGE = 'You Lost... Better Luck Next Time.';
const DRAW_MESSAGE = "It's a draw. Try again?";

function StartGame(
	rockBtn,
	paperBtn,
	scissorsBtn,
	selectionPage,
	loadingPage,
	resultsPage,
	resultsMessage,
	yourChoice,
	botChoice
) {
	selectionPage.classList.remove('disabled');

	rockBtn.addEventListener('click', () => select(OPTIONS.Rock));
	paperBtn.addEventListener('click', () => select(OPTIONS.Paper));
	scissorsBtn.addEventListener('click', () => select(OPTIONS.Scissors));
	function select(selected) {
		const botSelection = randomProperty(OPTIONS);
		const selection = selected;
		let message = DRAW_MESSAGE;

		switch (selection) {
			case OPTIONS.Rock:
				if (botSelection === OPTIONS.Scissors) message = WIN_MESSAGE;
				else if (botSelection === OPTIONS.Paper) message = LOSE_MESSAGE;
				break;
			case OPTIONS.Paper:
				if (botSelection === OPTIONS.Rock) message = WIN_MESSAGE;
				else if (botSelection === OPTIONS.Scissors) message = LOSE_MESSAGE;
				break;
			case OPTIONS.Scissors:
				if (botSelection === OPTIONS.Paper) message = WIN_MESSAGE;
				else if (botSelection === OPTIONS.Rock) message = LOSE_MESSAGE;
				break;
		}

		selectionPage.classList.add('disabled');
		console.log(loadingPage);
		setTimeout(() => {
			loadingPage.classList.remove('disabled');
			console.log(loadingPage);
		}, 1000);
		setTimeout(() => {
			resultsMessage.textContent = message;
			yourChoice.textContent = selection;
			botChoice.textContent = botSelection;
			loadingPage.classList.add('disabled');
			resultsPage.classList.remove('disabled');
		}, 3250);
	}
}

randomProperty = obj => {
	const keys = Object.keys(obj);
	return obj[keys[(keys.length * Math.random()) << 0]];
};
