const readline = require('node:readline');
const { stdout } = require('node:process');

const clear = () => {
   readline.cursorTo(stdout, 0, 0);
   readline.clearScreenDown(stdout);
};

module.exports = clear;
