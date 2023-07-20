const readline = require('node:readline/promises');
const { stdin, stdout } = require('node:process');

const readLine = async (prompt = '') => {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  const res = await rl.question(prompt);
  rl.close();
  return res;
};

module.exports = readLine;
