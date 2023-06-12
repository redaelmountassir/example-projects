/*
  Rock Paper Scissors
*/
const totalScore = {computerScore: 0, playerScore: 0}
// getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
    const rpsChoice = ['Rock', 'Paper', 'Scissors']
    const randomC = [math.floorandom() * 3]
    return rpsChoice[randomNumber]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  let score;
  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0
   // All situations where human wins, set `score` to 1 
   } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
   } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1
   } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
            score = 1
    // Otherwise human loses (aka set score to -1)
   }   else {
    score = -1
  }
  //return score
  return score
}  


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!


const resultDiv = document.getElementById('result')
const handsDiv = document.getElementById ('hands')
const playerScore = document.getElementById('player-score')
if (score == -1){
  resultDiv.innerText = 'you lose'
} else if (score ==0) {
  resultDiv.innerText = "its a draw"
} else {
  resultDiv.innerText = 'you won'
}


}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({ playerChoice })
  const computerChoice = getComputerChoice()
  console.log({ computerChoice })
  const score = get getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  console.log({ score })
  console.log(totalScore)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
const rpsButtons = querySelectorAll('.rpsButtons')
rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)

rpsButtons.forEach(rpsButtons => {
rpsButtons.onclick = () => onClickRPS(rpsButton.value)

 

  // Add a click listener to the end game button that runs the endGame() function on click
  
})
}
// ** endGame function clears all the text on the DOM **
function endGame() {
  
}

playGame()