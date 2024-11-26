/**
 * Displays the message 'Welcome to Holberton School, what is your name?' (followed by a new line)
 * The user should be able to input their name on a new line
 * The program should display Your name is: INPUT
 * When the user ends the program, it should display 'This important software is now closing' (followed by a new line)
 * @author Tarik Horaichi <https://github.com/math198512>
 */
const process = require('process');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  const name = data.trim();
  console.log(`Your name is: ${name}`);
});
process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});
