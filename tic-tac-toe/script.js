let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = '✕';
let isGameActive = true;

const createPlayer = (name, marker) => {
  return { name, marker }
}

const cells = document.querySelectorAll('[data-cell]')
const board = document.querySelector('.board')
const statusText = document.getElementById('statusText')
const restartButton = document.getElementById('restartButton')
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

startGame();

function startGame() {
  cells.forEach(cell => cell.addEventListener('click', cellClicked));
  restartButton.addEventListener('click', restartGame);
  statusText.textContent = `Player ${currentPlayer}, make your move.`;

}

function cellClicked() {
  const cell = this;
  const cellIndex = Array.from(cells).indexOf(cell);
  if (isGameActive && gameBoard[cellIndex] === '') {
    gameBoard[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
    checkGameResult();
  }
}
function checkGameResult() {
  let roundWon = false;
  // Check if any win condition is met
  for (const winCondition of winConditions) {
    const [a, b, c] = winCondition;
    const cellA = gameBoard[a];
    const cellB = gameBoard[b];
    const cellC = gameBoard[c];
    // Continue if any cell is empty
    if (!cellA || !cellB || !cellC) {
      continue;
    }
    // Check if all cells have the same player
    if (cellA === cellB && cellB === cellC) {
      roundWon = true;
      break;
    }
  }
  // Update status text based on game result
  if (roundWon) {
    statusText.textContent = `Player ${currentPlayer} wins!`;
    isGameActive = false;
  } else if (!gameBoard.includes('')) {
    statusText.textContent = `It's a tie!`;
  } else {
    switchPlayer();
  }
}

function switchPlayer() {
  currentPlayer = (currentPlayer === '✕') ? 'o' : '✕';
  statusText.textContent = `Player ${currentPlayer}, it's your turn.`;
}

function restartGame() {
  isGameActive = true;
  currentPlayer = '✕';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  statusText.textContent = ''
  cells.forEach(cell => {
    cell.textContent = '';
    cell.addEventListener('click', cellClicked);
    statusText.textContent = `Player ${currentPlayer}, make your move.`;
  });
}