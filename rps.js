function computerPlay() {
	let moves = ['Rock', 'Paper', 'Scissors'];
	let index = Math.floor(Math.random()*3);
	return moves[index];
}

function formatInput(string) {
	if (typeof string == 'string') {
		string = string.toLowerCase();
		return string.replace(string[0], string[0].toUpperCase());
	} else {
		console.log("Gimme a fucking string")
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelection = formatInput(playerSelection);
	computerSelection = formatInput(computerSelection);
	let win = false;
	if (playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors") {
		if (playerSelection == computerSelection) {
			return `It's a tie! You both chose ${playerSelection}`;
		} else if (playerSelection == "Rock") {
			if ( computerSelection == "Scissors") {
				win = true;
			}
		} else if (playerSelection == "Scissors") {
			if (computerSelection == "Paper") {
				win = true;
			}
		} else if (playerSelection == "Paper") {
			if (computerSelection == "Rock") {
				win = true;
			}
		}

		if (win) {
			return (`You Win! ${playerSelection} beats ${computerSelection}`);
		} else {
			return (`You Lose! ${computerSelection} beats ${playerSelection}`);
		}
	} else {
		return "it's rock paper scissors bro come on";
	}
}

function setScore(string) {
	if (string.includes('Win')) {
		playerDisplay.textContent = parseInt(playerDisplay.textContent) + 1;
	} else if (string.includes('Lose')) {
		computerDisplay.textContent = parseInt(computerDisplay.textContent) + 1;
	}
}



const startButton = document.querySelector('#start');
const playButtons = document.querySelectorAll('.playing');
const display = document.querySelector('.display');
const playerDisplay = document.querySelector('#player');
const computerDisplay = document.querySelector('#computer');

startButton.addEventListener('click', game);



function showButtons() {
	playButtons.forEach(button => button.style.display = "block");
}

function hideButtons() {
	playButtons.forEach(button => button.style.display = "none");
}

function setBoard() {
  console.log('playing');
  showButtons();
  startButton.style.display = "none";
  startButton.textContent = "NEW GAME"
  playerDisplay.textContent = "0";
  computerDisplay.textContent = "0";
  let playerScore = 0;
  let computerScore = 0;
}


function game() {
  setBoard()
  playButtons.forEach(button => button.addEventListener('click', function(e) {
	roundResult = playRound(this.id, computerPlay());
	display.textContent = roundResult;
	setScore(roundResult);
	playerScore = parseInt(playerDisplay.textContent);
	computerScore = parseInt(computerDisplay.textContent);

	console.log(`playerScore = ${playerScore}`);
	console.log(`computerScore = ${computerScore}`);
	if (playerScore == 5) {
	  	console.log('You Win!');
	  	display.textContent = "You have defeated the machines";
	  	hideButtons()
	  	startButton.style.display = "block";
	} else if (computerScore == 5) {
		console.log('You Lose!')
		display.textContent = "The machines have one";
		hideButtons()
	  	startButton.style.display = "block";
	}
  }));
};










































