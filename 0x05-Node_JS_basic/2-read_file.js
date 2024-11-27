const fs = require('fs');

const countStudents = (path) => {
  const fileLines = fs.readFileSync(`${path}`, 'utf-8').toString().split('\n');
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  return fileLines;
};
module.exports = countStudents;
