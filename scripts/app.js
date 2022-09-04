const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const cancelOverlayElement = document.getElementById('cancel-overlay');

const editPlayer1BtnElement = document.getElementById('edit-player1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player2-btn');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
cancelOverlayElement.addEventListener('click', cancelPlayerConfig);
backdropElement.addEventListener('click', cancelPlayerConfig);
