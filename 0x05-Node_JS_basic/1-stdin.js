console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  const name = process.stdin.read();
  console.log(`Your name is: ${name}`);
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
