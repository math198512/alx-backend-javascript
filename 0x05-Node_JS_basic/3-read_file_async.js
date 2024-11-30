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
    console.log(`Number of students: ${totalStudents}`);

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
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }

    return totalStudents;
  } catch (error) {
    // If file can't be read, throw specific error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
