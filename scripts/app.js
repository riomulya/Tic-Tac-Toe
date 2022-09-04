let editedPlayer = 0;
let switchPlayer = 0;
let currentRound = 1;
let gameOver = false;

const gameFieldData = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const player_data = [
  {
    name: '',
    symbol: 'X',
  },
  {
    name: '',
    symbol: 'O',
  },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const cancelOverlayElement = document.getElementById('cancel-overlay');
const formElement = document.querySelector('form');
const errorParragraphElement = document.querySelector('.config-error');
const gameArea = document.getElementById('active-game');
const gameBoardElement = document.getElementById('game-board');
const activePlayerName = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');
const winnerNameElement = document.getElementById('winner-name');

const editPlayer1BtnElement = document.getElementById('edit-player1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player2-btn');
const startNewGameElement = document.getElementById('start-game-btn');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
cancelOverlayElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', saveConfigPlayer);
startNewGameElement.addEventListener('click', startNewGame);
gameBoardElement.addEventListener('click', selectGameField);
