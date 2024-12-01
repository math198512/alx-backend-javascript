const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;

async function countStudents(path) {
  try {
    // Attempt to read the file asynchronously
    const data = await fs.readFile(path, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header row
    const studentLines = lines.slice(1);

    // Validate that we have students
    if (studentLines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Total number of students
    const totalStudents = studentLines.length;
    let responseText = `This is the list of our students\nNumber of students: ${totalStudents}\n`;

    // Process students by field
    const fieldStudents = {};

    // Parse each student line
    studentLines.forEach((line) => {
      const firstname = line.split(',')[0];
      const field = line.split(',')[3];

      // Initialize field array if not exists
      if (!fieldStudents[field]) {
        fieldStudents[field] = [];
      }

      // Add firstname to field
      fieldStudents[field].push(firstname);
    });

    // Log students in each field
    let counter = 0;
    for (const [field, students] of Object.entries(fieldStudents)) {
      responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
      if (counter < Object.entries(fieldStudents).length - 1) {
        responseText += '\n';
      }
      counter += 1;
    }
    return responseText;
  } catch (error) {
    // If file can't be read, throw specific error
    const responseText = 'This is the list of our students\nCannot load the database';
    return responseText;
  }
}

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  // Set the response header to plain text
  const fileName = process.argv[2];
  countStudents(fileName).then(
    (responseText) => {
      res.statusCode = 200;
      res.send(responseText);
    },
  ).catch((responseText) => {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 500;
    res.send(responseText);
  });
});

// Make the server listen on port 1245
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the app for potential use in other modules
module.exports = app;
