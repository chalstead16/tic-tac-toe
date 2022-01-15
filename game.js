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

  updateCurrentPlayerTurn() {
    if (this.currentPlayerTurn === 1) {
      this.currentPlayerTurn = 2;
    } else {
      this.currentPlayerTurn = 1;
    }
  }

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
    this.detectDraw();
  }

  win() {
    console.log(`${this.currentPlayerTurn} wins!`);
    if (this.currentPlayerTurn === 1) {
      this.player1.wins ++;
    }
    if (this.currentPlayerTurn === 2) {
      this.player2.wins ++;
    }
    this.resetGameboard();
  }

  detectDraw() {
    if (!this.gameboard.includes('')){
      console.log('draw')
      this.resetGameboard();
    }
  }
  //A way to reset the Game's board to begin a new game
  resetGameboard() {
    this.gameboard = ['','','','','','','','',''];
  }
}
