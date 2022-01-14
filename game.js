class Game {
  constructor(){
    this.player1 = new Player("one", "🌈");
    this.player2 = new Player("two", "🍰");
    this.gameboard = [0,1,2,3,4,5,6,7,8];
    this.currentPlayerTurn = 1;
  }

  placePlayerToken(number) {
    if (!this.gameboard.includes(number)){
      return "this spot is taken, pick a new spot!"
      }
    for (var i = 0; i < this.gameboard.length; i++) {
      if (this.currentPlayerTurn === 1 && this.gameboard[i] === number) {
        this.gameboard.splice(i,1,"X");
      }
      if (this.currentPlayerTurn === 2 && this.gameboard[i] === number) {
        this.gameboard.splice(i,1,"O");
      }
    }
      this.updateCurrentPlayerTurn();
  }

//A way to keep track of which player's turn it currently is
  updateCurrentPlayerTurn() {
    if (this.currentPlayerTurn === 1) {
      this.currentPlayerTurn = 2;
    } else {
      this.currentPlayerTurn = 1;
    }
  }

  //A way to check the Game's board data for win conditions
  checkWinConditions() {

  }

  //A way to detect when a game is a draw(no one has won)
  detectDraw() {

  }
  //A way to reset the Game's board to begin a new game
  resetGameboard() {}
  //does not reset wins it only resets the board for a new game to be played

}
