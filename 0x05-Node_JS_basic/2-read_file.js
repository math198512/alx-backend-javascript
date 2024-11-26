const fs = require('fs');

const countStudents = (path) => {
  fs.readFile(`${path}`, 'utf8', (err, f) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    console.log(f);
    return
  });
};

module.exports = countStudents;
