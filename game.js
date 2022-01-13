class Game {
  constructor(){
    this.player1 = new Player("one", "🌈");
    this.player2 = new Player("two", "🍰");
    this.gameboard = [0,0,0,0,0,0,0,0,0];
    this.playerTurn = 1;
  }

//A way to keep track of the data for the game board
  makeGameboard() {
// update the index to value of the player that clicks
// each index needs a name to be able to
//if (playerTurn === 1 && event.target.id === id) {
  //update
}

  }

//A way to keep track of which player's turn it currently is
  updatePlayerTurns() {

  }

  //A way to check the Game's board data for win conditions
  checkWinConditions() {
  //indicies 0,1,2,3,4,5,6,7,8
  //
  }

  //A way to detect when a game is a draw(no one has won)
  detectDraw() {

  }
  //A way to reset the Game's board to begin a new game
  resetGameboard() {}
  //does not reset wins it only resets the board for a new game to be played

}
