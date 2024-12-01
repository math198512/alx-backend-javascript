const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const fields = {};

    lines.forEach((line) => {
      const firstname = line.split(',')[0];
      const field = line.split(',')[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    return fields;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default readDatabase;
module.exports = readDatabase;
