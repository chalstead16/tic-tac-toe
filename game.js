class Game {
  constructor(){
    this.player1 = new Player("player1", "🌈");
    this.player2 = new Player("player2", "🍰");
    this.gameboard = ['','','','','','','','',''];
    this.startingPlayer = this.player1;
    this.currentPlayerTurn = this.startingPlayer;
    this.winner = '';
  }

  placePlayerToken(position) {
    if (this.gameboard[position] != ''){
      return "this spot is taken, pick a new spot!"
      }
      if (this.currentPlayerTurn === this.player1) {
        this.gameboard[position] = this.player1.token;
      }
      if (this.currentPlayerTurn === this.player2) {
        this.gameboard[position] = this.player2.token;
      }
      this.checkWinConditions();
      this.updateCurrentPlayerTurn();
  }

  updateCurrentPlayerTurn() {
    if (this.currentPlayerTurn === this.player1) {
      this.currentPlayerTurn = this.player2;
    } else {
      this.currentPlayerTurn = this.player1;
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
    if (this.currentPlayerTurn === this.player1) {
      this.winner = this.player1;
      this.player1.wins ++;
    }
    if (this.currentPlayerTurn === this.player2) {
      this.winner = this.player2;
      this.player2.wins ++;
    }
    this.resetGameboard();
  }

  detectDraw() {
    if (!this.gameboard.includes('')){
      this.winner = "Draw";
      this.resetGameboard();
    }
  }

  resetGameboard() {
    this.gameboard = ['','','','','','','','',''];
    this.currentPlayerTurn = this.startingPlayer;
    this.setStartingPlayer();
  }

  setStartingPlayer() {
    if (this.startingPlayer === this.player1) {
      this.startingPlayer = this.player2;
    } else {
      this.startingPlayer = this.player1;
    }
  }
}
