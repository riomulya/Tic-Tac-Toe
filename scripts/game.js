function startNewGame() {
  if (!player_data[0].name || !player_data[1].name) {
    alert('Nama Kedua Player Harus Diisi!!!');
    return;
  }
  gameArea.style.display = 'block';
  activePlayerName.textContent = player_data[switchPlayer].name;
}

function switchPlayers() {
  if (switchPlayer === 0) {
    switchPlayer = 1;
  } else {
    switchPlayer = 0;
  }
}

function selectGameField(event) {
  if (event.target.tagName !== 'LI' || gameOver) {
    return;
  }
  const selectedField = event.target;

  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;
  if (gameFieldData[selectedRow][selectedColumn] > 0) {
    return;
  }

  selectedField.classList.add('disabled');
  selectedField.textContent = player_data[switchPlayer].symbol;
  activePlayerName.textContent = player_data[switchPlayer].name;
  gameFieldData[selectedRow][selectedColumn] = switchPlayer + 1;

  const winnerId = checkForGameOver();
  console.log(winnerId);
  if (winnerId !== 0) {
    endgame(winnerId);
    startNewGameElement.addEventListener('click', resetGameStatus);
  }
  currentRound++;
  switchPlayers();
}

function checkForGameOver() {
  //cek untuk baris
  for (let i = 0; i < 3; i++) {
    if (
      gameFieldData[i][0] > 0 &&
      gameFieldData[i][0] === gameFieldData[i][1] &&
      gameFieldData[i][1] === gameFieldData[i][2]
    ) {
      return gameFieldData[i][0];
    }
  }
  //cek untuk kolom
  for (let i = 0; i < 3; i++) {
    if (
      gameFieldData[0][i] > 0 &&
      gameFieldData[0][i] === gameFieldData[1][i] &&
      gameFieldData[1][i] === gameFieldData[2][i]
    ) {
      return gameFieldData[0][i];
    }
  }

  //cek untuk diagonal
  //atas kiri ke bawah kanan
  if (
    gameFieldData[0][0] > 0 &&
    gameFieldData[0][0] === gameFieldData[1][1] &&
    gameFieldData[1][1] === gameFieldData[2][2]
  ) {
    return gameFieldData[0][0];
  }
  //bawah kiri ke atas kanan
  if (
    gameFieldData[2][0] > 0 &&
    gameFieldData[2][0] === gameFieldData[1][1] &&
    gameFieldData[1][1] === gameFieldData[0][2]
  ) {
    return gameFieldData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endgame(winnerId) {
  gameOver = true;
  if (winnerId === 1 || winnerId === 2) {
    gameOverElement.style.display = 'block';
    winnerNameElement.textContent = player_data[switchPlayer].name;
    gameBoardElement.previousElementSibling.style.display = 'none';
  } else {
    gameOverElement.style.display = 'block';
    gameBoardElement.previousElementSibling.style.display = 'none';
    gameOverElement.firstElementChild.textContent = 'Draw';
    winnerNameElement.textContent = '';
  }
}

function resetGameStatus() {
  editedPlayer = 0;
  switchPlayer = 0;
  currentRound = 1;
  let index = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameFieldData[i][j] = 0;
      gameBoardElement.children[index].textContent = '';
      gameBoardElement.children[index].classList.remove('disabled');
      index++;
    }
  }
  gameOverElement.style.display = 'none';
  gameOver = false;
}
