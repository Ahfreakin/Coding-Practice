const readLine = require('./lib/readLine');
const clear = require('./lib/clear');
const random = require('./lib/random');

const game = async () => {
  let p1 = '-';
  let p2 = '-';
  let p3 = '-';
  let p4 = '-';
  let p5 = '-';
  let p6 = '-';
  let p7 = '-';
  let p8 = '-';
  let p9 = '-';
  let playerOne = 'X'
  let playerTwo = 'O'
  let currentPlayer = playerOne;
  let errorMessage = '';

  while (true) {
    clear();
    console.log(`[ ${p1} , ${p2} , ${p3} ]`);
    console.log(`[ ${p4} , ${p5} , ${p6} ]`);
    console.log(`[ ${p7} , ${p8} , ${p9} ]`);
    console.log(`it is ${currentPlayer}'s turn`);
    if (errorMessage.length > 0){
      console.log(errorMessage);
      errorMessage = '';
    }
    
    let turn = await readLine(`Where would you like to play player ${currentPlayer}?`);

    let positionFilled = false;

    if (turn === '1') {
      if (p1 === '-') {
        p1 = currentPlayer;
        positionFilled = true;
      } else {
        errorMessage = 'This position is already filled.';
      }
    }
    else if (turn === '2') {
      if (p2 === '-') {
        p2 = currentPlayer;
        positionFilled = true;
      } else {
        errorMessage = 'This position is already filled.';
      }
    }
    else if (turn === '3') {
      if (p3 === '-') {
        p3 = currentPlayer;
        positionFilled = true;
      } else {
        errorMessage = 'This position is already filled.';
      }
    } else {
     errorMessage = 'Invalid Input'
    }

   if (positionFilled === true) {
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }
   }
  }
};

module.exports = game;
