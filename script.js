let computerGuess;
let userGuess = [];
let userAns = document.getElementById("userResult");
let updateNumber = document.getElementById("input-number");

const init = () => {
	computerGuess = Math.floor(Math.random() * 100);
	document.getElementById("newGame").style.display = "none";
	document.getElementById("easy-screen").style.display = "none";
}

init();

const startGame = () => {
	document.getElementById("welcome-screen").style.display = "none";
	document.getElementById("easy-screen").style.display = "block";
}

const easyMode = () => {
	maxGuess = 10;
	startGame();
}

const hardMode = () => {
	maxGuess = 5;
	startGame();
}

const startNewGame = () => {
	document.getElementById("newGame").style.display = "inline";
	updateNumber.setAttribute('disabled', true);
}

const restartGame = () => {
	window.location.reload();
}

const compareGuess = () => {
	let userNumber = Number(document.getElementById("input-number").value);
	userGuess = [...userGuess, userNumber];	// number of data handled by spread operator (...<arrayName>)
	document.getElementById("previousGuesses").innerHTML = userGuess;
	if (userGuess.length < maxGuess) {
		if (userNumber > computerGuess) {
			userAns.innerHTML = "Your guess is High 😲";
			updateNumber.value = "";
		} else if (userNumber < computerGuess) {
			userAns.innerHTML = "Your guess is Low 😟";
			updateNumber.value = "";
		} else {
			userAns.innerHTML = "It's Correct 😁";
			updateNumber.value = "";
			startNewGame();
		}
	} else {
		if (userNumber > computerGuess) {
			userAns.innerHTML = "You loose!! Correct guess is " + computerGuess;
			updateNumber.value = "";
			startNewGame();
		} else if (userNumber < computerGuess) {
			userAns.innerHTML = "You loose!! Correct guess is " + computerGuess;
			updateNumber.value = "";
			startNewGame();
		} else {
			userAns.innerHTML = "It's Correct 😁";
			updateNumber.value = "";
			startNewGame();
		}
	}

	document.getElementById("previousAttempts").innerHTML = userGuess.length;
}
