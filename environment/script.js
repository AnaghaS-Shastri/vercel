// Tic Tac Toe
const board = document.getElementById("board");
const status = document.getElementById("status");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function handleClick(index) {
    if (gameBoard[index] === "" && !checkWinner()) {
        gameBoard[index] = currentPlayer;
        renderBoard();
        if (!checkWinner()) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            status.textContent = `Current Player: ${currentPlayer}`;
        }
    }
}

function renderBoard() {
    board.innerHTML = "";
    for (let i = 0; i < 9; i++) {
        const square = document.createElement("div");
        square.textContent = gameBoard[i];
        square.addEventListener("click", () => handleClick(i));
        board.appendChild(square);
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            status.textContent = `Player ${currentPlayer} wins!`;
            return true;
        }
    }

    if (!gameBoard.includes("")) {
        status.textContent = "It's a draw!";
        return true;
    }

    return false;
}

// Number Guessing Game
const secretNumber = Math.floor(Math.random() * 10) + 1;
const guessInput = document.getElementById("guessInput");
const guessResult = document.getElementById("guessResult");

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        guessResult.textContent = "Please enter a valid number between 1 and 10.";
    } else if (userGuess === secretNumber) {
        guessResult.textContent = "Congratulations! You guessed the correct number!";
    } else {
        guessResult.textContent = `Sorry, the correct number is ${secretNumber}. Try again!`;
    }
}
