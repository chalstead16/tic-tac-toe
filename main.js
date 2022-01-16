//############## GLOBAL VARIABLES ##############//
var ticTacToe = new Game;

//############## QUERY SELECTORS ##############//
var gameboard = document.querySelector(".gameboard");

//############## EVENT LISTENERS ##############//
gameboard.addEventListener("click", playerTakeTurn);

//############## DOM MANIPULATION FUNCTIONS ##############//
function playerTakeTurn(event) {
  var gridPosition = document.querySelectorAll(".box")
  for (var i = 0; i < gridPosition.length; i++){
    if (event.target.id === gridPosition[i].id && ticTacToe.currentPlayerTurn === 1) {
      gridPosition[i].innerHTML += `
      <h1>${ticTacToe.player1.token}</h1>
      `
    } else if (event.target.id === gridPosition[i].id && ticTacToe.currentPlayerTurn === 2) {
      gridPosition[i].innerHTML += `
      <h1>${ticTacToe.player2.token}</h1>
      `
    }
  }
  ticTacToe.placePlayerToken(event.target.id)
}
