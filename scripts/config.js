function openPlayerConfig(event) {
  const selectedPlayerId = event.target.dataset.playerid;
  editedPlayer = selectedPlayerId;
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}
function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  errorParragraphElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}

function saveConfigPlayer(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get('playername').trim();
  if (!enteredPlayerName) {
    errorParragraphElement.textContent = 'Nama Tidak Boleh Kosong';
    errorParragraphElement.style.color = 'red';
    return;
  }
  const updatedPlayerDataElement = document.getElementById(
    'player-' + editedPlayer + '-name'
  );
  updatedPlayerDataElement.textContent = enteredPlayerName;
  player_data[editedPlayer - 1].name = enteredPlayerName;
  closePlayerConfig();
}
