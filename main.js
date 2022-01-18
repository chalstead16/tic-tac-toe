//############## GLOBAL VARIABLES ##############//
var ticTacToe = new Game;

//############## QUERY SELECTORS ##############//
var game = document.querySelector(".gameboard");
var displayMessage = document.querySelector(".message");
var player1Scoreboard = document.querySelector(".p1-scoreboard-container");
var player2Scoreboard = document.querySelector(".p2-scoreboard-container");

//############## EVENT LISTENERS ##############//
game.addEventListener("click", playerTakeTurn);

//############## DOM MANIPULATION FUNCTIONS ##############//
function playerTakeTurn(event) {
  var gridPosition = document.querySelectorAll(".box")
  for (var i = 0; i < gridPosition.length; i++){
    if (event.target.id === gridPosition[i].id
      && ticTacToe.currentPlayer === ticTacToe.player1 && gridPosition[i].innerHTML === '') {
      gridPosition[i].innerHTML = `
      <h1>${ticTacToe.player1.token}</h1>
      `
    } else if (event.target.id === gridPosition[i].id
       && ticTacToe.currentPlayer === ticTacToe.player2 && gridPosition[i].innerHTML === '') {
      gridPosition[i].innerHTML = `
      <h1>${ticTacToe.player2.token}</h1>
      `
    }
  }
  ticTacToe.placePlayerToken(event.target.id);
  displayCurrentTurn();
  displayWinner();
  displayDraw();
}

function displayCurrentTurn() {
  if (ticTacToe.currentPlayer === ticTacToe.player1) {
    displayMessage.innerText = `${ticTacToe.player1.token}'s turn`
  }
  if (ticTacToe.currentPlayer === ticTacToe.player2) {
    displayMessage.innerText = `${ticTacToe.player2.token}'s turn`
  }
}

function displayWinner() {
  if (ticTacToe.winner === ticTacToe.player1) {
    displayMessage.innerText = `${ticTacToe.player1.token} wins!`;
    player1Scoreboard.innerHTML = `
    <h1>${ticTacToe.player1.wins}</h1>
    <h2>wins</h2>
    `
    game.removeEventListener('click', playerTakeTurn);
    timer();
  }
  if (ticTacToe.winner === ticTacToe.player2) {
    displayMessage.innerText = `${ticTacToe.player2.token} wins!`;
    player2Scoreboard.innerHTML = `
    <h1>${ticTacToe.player2.wins}</h1>
    <h2>wins</h2>
    `
    game.removeEventListener('click', playerTakeTurn);
    timer();
  }
}

function displayDraw() {
  if (ticTacToe.winner === "Draw") {
    displayMessage.innerText = "Draw! Play again!";
    timer();
  }
}

function resetTicTacToe() {
  var gridPosition = document.querySelectorAll(".box")
  for (var i = 0; i < gridPosition.length; i++) {
       gridPosition[i].innerHTML = ``;
  }
  ticTacToe.winner = '';
  displayMessage.innerHTML = `${ticTacToe.currentPlayer.token}'s turn!`;
  game.addEventListener("click", playerTakeTurn);
}

function timer() {
  setTimeout(function() {
    resetTicTacToe();
  }, 2000);
}
