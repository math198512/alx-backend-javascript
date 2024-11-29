const fs = require('fs');

function countStudents (databasePath) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(databasePath, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Remove the header row
    const studentLines = lines.slice(1);

    // Count total number of students
    const studentCount = studentLines.length;
    console.log(`Number of students: ${studentCount}`);

    // Group students by field
    const fieldGroups = {};

    // Process each student line
    studentLines.forEach(line => {
      // Split the line into columns
      const firstname = line.split(',')[0];
      const field = line.split(',')[3];

      // Skip lines that don't have enough data
      if (!firstname || !field) return;

      // Initialize the field group if not exists
      if (!fieldGroups[field]) {
        fieldGroups[field] = [];
      }

      // Add student to the corresponding field group
      fieldGroups[field].push(firstname);
    });

    // Log students in each field
    for (const [field, students] of Object.entries(fieldGroups)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    // Throw error if database cannot be loaded
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
