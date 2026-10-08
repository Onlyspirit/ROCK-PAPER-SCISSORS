let score = JSON.parse(localStorage.getItem("score")) || {
	wins: 0,
	losses: 0,
	ties: 0,
};
/*
       if(!score){
               score = {
                   wins: 0,
                   losses: 0,
                   ties: 0
               };
           }*/

function playGame(playerMove) {
	const computerMove = pickComputerMove();

	let result = "";
	if (playerMove === "scissors") {
		if (computerMove === "rock") {
			result = "You loose";
		} else if (computerMove === "paper") {
			result = "You Won";
		} else if (computerMove === "scissors") {
			result = "Tie";
		}
	} else if (playerMove === "paper") {
		if (computerMove === "rock") {
			result = "You Won";
		} else if (computerMove === "paper") {
			result = "Tie";
		} else if (computerMove === "scissors") {
			result = "You loose";
		}
	} else if (playerMove === "rock") {
		if (computerMove === "rock") {
			result = "Tie";
		} else if (computerMove === "paper") {
			result = "You loose";
		} else if (computerMove === "scissors") {
			result = "You Won";
		}
	}

	if (result === "You Won") {
		score.wins += 1;
	} else if (result === "You loose") {
		score.losses += 1;
	} else if (result === "Tie") {
		score.ties += 1;
	}

	localStorage.setItem("score", JSON.stringify(score));

	//             alert(`You Picked ${playerMove}, Computer picked ${computerMove}. ${result}
	// Wins : ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)

	updateResultElement();
	updateScoreElement();
	function updateScoreElement() {
		document.querySelector(".js-result").innerHTML = `${result}`;
		document.querySelector(".js-score").innerHTML =
			` Wins : ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} `;
	}
	function updateResultElement() {
		document.querySelector(".js-moves").innerHTML = `You 
        <img class="move-icon" src="images/${playerMove}-emoji.png" alt="">
        <img class="move-icon" src="images/${computerMove}-emoji.png" alt="">
        Computer.`;
	}
}

let computerMove = "";
function pickComputerMove() {
	const randomNumber = Math.random();
	if (randomNumber >= 0 && randomNumber < 1 / 3) {
		computerMove = "rock";
	} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		computerMove = "paper";
	} else if (randomNumber >= 2 / 3 && randomNumber) {
		computerMove = "scissors";
	}

	return computerMove;
}
