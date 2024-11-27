const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs.readFileSync(`${path}`, 'utf-8').toString().split('\n');
  console.log("Number of students:", fileLines.length - 1);
};
module.exports = countStudents;
