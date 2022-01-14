class Game {
  constructor(){
    this.player1 = new Player("one", "🌈");
    this.player2 = new Player("two", "🍰");
    this.gameboard = ['','','','','','','','',''];
    this.currentPlayerTurn = 1;
  }

  placePlayerToken(position) {
    if (this.gameboard[position] != ''){
      return "this spot is taken, pick a new spot!"
      }
      if (this.currentPlayerTurn === 1) {
        this.gameboard[position] = this.player1.token;
      }
      if (this.currentPlayerTurn === 2) {
        this.gameboard[position] = this.player2.token;
      }
      this.checkWinConditions();
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
    if (this.gameboard[0] === this.gameboard[1] && this.gameboard[1] === this.gameboard[2] && this.gameboard[0] !== '') {
      this.win();
    } else if (this.gameboard[3] === this.gameboard[4] && this.gameboard[4] === this.gameboard[5] && this.gameboard[3] !== '') {
      this.win();
    } else if (this.gameboard[6] === this.gameboard[7] && this.gameboard[7] === this.gameboard[8] && this.gameboard[6] !== '') {
      this.win();
    } else if (this.gameboard[0] === this.gameboard[3] && this.gameboard[3] === this.gameboard[6] && this.gameboard[0] !== '') {
      this.win();
    } else if (this.gameboard[1] === this.gameboard[4] && this.gameboard[4] === this.gameboard[7] && this.gameboard[1] !== '') {
      this.win();
    } else if (this.gameboard[2] === this.gameboard[5] && this.gameboard[5] === this.gameboard[8] && this.gameboard[2] !== '') {
      this.win();
    } else if (this.gameboard[6] === this.gameboard[4] && this.gameboard[4] === this.gameboard[2] && this.gameboard[6] !== '') {
      this.win();
    } else if (this.gameboard[0] === this.gameboard[4] && this.gameboard[4] === this.gameboard[8] && this.gameboard[0] !== ''){
      this.win();
    }
  }

  //Add win to player win count
  win() {
    console.log(`${this.currentPlayerTurn} wins!`);
  }

  //A way to detect when a game is a draw(no one has won)
  detectDraw() {

  }
  //A way to reset the Game's board to begin a new game
  resetGameboard() {
    
  }
  //does not reset wins it only resets the board for a new game to be played

}
