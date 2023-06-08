const moves = ["Scissors", "Rock", "Paper"];
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");

rockButton.addEventListener("click", function () {
    handleChoice("Rock");
});

paperButton.addEventListener("click", function () {
    handleChoice("Paper");
});

scissorButton.addEventListener("click", function () {
    handleChoice("Scissors");
});

function generateBotChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex]
}

function Result(userChoice, botChoice) {
    switch (userChoice) {
        case "Rock":
            if (botChoice === "Scissors") {
                return "Bot chose Scissors, You Win!";
            } else if (botChoice === "Paper") {
                return "Bot chose Paper, You Lost!";
            } else {
                return "Bot chose Rock, it's a tie."
            }
        case "Paper":
            if (botChoice === "Rock") {
                return "Bot chose Rock, You Win!";
            } else if (botChoice === "Scissors") {
                return "Bot chose Scissors, You Lost!";
            } else {
                return "Bot chose Paper, it's a tie."
            }
        case "Scissors":
            if (botChoice === "Paper") {
                return "Bot chose Paper, You Win!";
            } else if (botChoice === "Rock") {
                return "Bot chose Rock, You Lost!";
            } else {
                return "Bot chose Scissors, it's a tie."
            }
        }
}
function handleChoice(userChoice) {
    const botChoice = generateBotChoice();
    const winner = Result(userChoice, botChoice);
    const resultElement = document.getElementById("result");
    resultElement.textContent = winner;
}