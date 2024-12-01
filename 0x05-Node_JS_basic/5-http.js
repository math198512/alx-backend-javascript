const http = require('http');
const fs = require('fs').promises;

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
    let responseText = `Number of students: ${totalStudents}\n`;

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
    for (const [field, students] of Object.entries(fieldStudents)) {
      responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }
    return responseText;
  } catch (error) {
    // If file can't be read, throw specific error
    throw new Error('Cannot load the database');
  }
}

// Create an HTTP server that responds to all requests with the same message
const app = http.createServer((req, res) => {
  // Set the response header to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    // Send the response body
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Show the list of students
    const fileName = process.argv[2];
    countStudents(fileName).then(
      (responseText) => {
        res.statusCode = 200;
        res.end(Buffer.from(responseText));
      },
    ).catch((err) => {
      console.error(err);
    });
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server running on port 1245');
});

// Export the app for potential use in other modules
module.exports = app;
