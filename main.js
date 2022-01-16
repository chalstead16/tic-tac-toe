//############## GLOBAL VARIABLES ##############//
var ticTacToe = new Game;

//############## QUERY SELECTORS ##############//
var gameboard = document.querySelector(".gameboard");
var displayMessage = document.querySelector(".message")

//############## EVENT LISTENERS ##############//
gameboard.addEventListener("click", playerTakeTurn);

//############## DOM MANIPULATION FUNCTIONS ##############//
function playerTakeTurn(event) {
  var gridPosition = document.querySelectorAll(".box")
  for (var i = 0; i < gridPosition.length; i++){
    if (event.target.id === gridPosition[i].id
      && ticTacToe.currentPlayerTurn === 1) {
      gridPosition[i].innerHTML += `
      <h1>${ticTacToe.player1.token}</h1>
      `
    } else if (event.target.id === gridPosition[i].id
       && ticTacToe.currentPlayerTurn === 2) {
      gridPosition[i].innerHTML += `
      <h1>${ticTacToe.player2.token}</h1>
      `
    }
  }
  ticTacToe.placePlayerToken(event.target.id);
  displayCurrentTurn();
  displayWinner();
}

function displayCurrentTurn() {
  if (ticTacToe.currentPlayerTurn === 1) {
    displayMessage.innerText = `${ticTacToe.player1.token}'s turn`
  }
  if (ticTacToe.currentPlayerTurn === 2) {
    displayMessage.innerText = `${ticTacToe.player2.token}'s turn`
  }
}

function displayWinner() {
  if (ticTacToe.winner === ticTacToe.player1) {
    displayMessage.innerText = `${ticTacToe.player1.token} wins!`
    setTimeout(function() {
      resetTicTacToe();
    }, 2000);
  }
  if (ticTacToe.winner === ticTacToe.player2) {
    displayMessage.innerHTML = `${ticTacToe.player2.token} wins!`
    setTimeout(function() {
      resetTicTacToe();
    }, 2000);
  }
}

function resetTicTacToe() {
  var gridPosition = document.querySelectorAll(".box")
  for (var i = 0; i < gridPosition.length; i++) {
       gridPosition[i].innerHTML = ``;
  }
  ticTacToe.winner = '';
    displayMessage.innerHTML = ``;
}
