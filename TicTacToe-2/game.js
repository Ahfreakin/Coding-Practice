const readLine = require('./lib/readLine');
const clear = require('./lib/clear');

const game = async () => {
  // let p1 = '-';
  // let p2 = '-';
  // let p3 = '-';
  // let p4 = '-';
  // let p5 = '-';
  // let p6 = '-';
  // let p7 = '-';
  // let p8 = '-';
  // let p9 = '-';
  let positions = Array(9).fill('-');
 // let myarray = [9];
  let playerOne = 'X'
  let playerTwo = 'O'
  let currentPlayer = playerOne;
  let errorMessage = '';
  let gameOver = false;
  let gameOverTie = false;
  let winningPlayer;
  // let gameOverWin = false;
  let winningCombinations = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]

  
  while (gameOver === false) {
    clear();
    for (let row = 0; row <= 2; row++) {
    console.log(`[ ${positions[row*3 + 0]} , ${positions[row*3 + 1]} , ${positions[row*3 + 2]} ]`);
    //console.log(`${row} [ ${row*3 + 0} , ${row*3 + 1} , ${row*3 + 2} ]`);
    }
    console.log(`it is ${currentPlayer}'s turn`);

    if (errorMessage.length > 0){
      console.log(errorMessage);
      errorMessage = '';
    }
    
    let turn = await readLine(`Where would you like to play player ${currentPlayer}?`);

    let positionFilled = false;

    if ( turn !== '1' && turn !== '2' && turn !== '3' && turn !== '4' && turn !== '5' && turn !== '6' && turn !== '7' && turn !== '8' && turn !== '9') {
      errorMessage = 'Invalid input';
      continue;
    } 
    if (positions[turn - 1] !== '-') {
      errorMessage = 'This position is already filled';
      continue;
    } 
    // fill board with X or O
    positions[turn - 1] = currentPlayer;


    // implement logic of win
     for (let i = 0; i < 8; i++) {
      let wc = winningCombinations[i];
      // i =1 , wc = [3,4,5]
      if (positions[wc[0]] !== '-' && positions[wc[0]] === positions[wc[1]] && positions[wc[1]] === positions[wc[2]]) {
        gameOver = true;
        // gameOverWin = true;
        winningPlayer = currentPlayer;
        continue;
      }
     }
      // switch player
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }
     // check if all cells are filled
     let freeSpace = false;
     for (let i = 0; i < 9; i++) {
      if (positions[i] === '-') {
        freeSpace = true;
        break;
      }
     }
     if (freeSpace === false) {
      gameOver = true;
      gameOverTie = true;
     }
  }
  clear();
  for (let row = 0; row <= 2; row++) {
    console.log(`[ ${positions[row*3 + 0]} , ${positions[row*3 + 1]} , ${positions[row*3 + 2]} ]`);
    }
  if (gameOverTie === true) {
    console.log('This game has ended in a draw.')
   } else {
    console.log(`Player ${winningPlayer} wins.`)
   }
};

module.exports = game;
