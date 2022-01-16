class Game {
  constructor(){
    this.player1 = new Player("one", "🌈");
    this.player2 = new Player("two", "🍰");
    this.gameboard = ['','','','','','','','',''];
    this.startingPlayer = 1;
    this.currentPlayerTurn = this.startingPlayer;
    this.currentWinner = [];
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
      this.currentWinner = this.player1;
      this.player1.wins ++;
    }
    if (this.currentPlayerTurn === 2) {
      this.currentWinner = this.player2;
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

  resetGameboard() {
    this.gameboard = ['','','','','','','','',''];
    this.currentPlayerTurn = this.startingPlayer;
    this.setStartingPlayer();
  }

  // resetWinner() {
  //   this.winner = '';
  // }

  setStartingPlayer() {
    if (this.startingPlayer === 1) {
      this.startingPlayer = 2;
    } else {
      this.startingPlayer = 1;
    }
  }
}
