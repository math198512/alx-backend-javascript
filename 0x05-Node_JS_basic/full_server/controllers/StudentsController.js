import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(_, res) {
    try {
      const filePath = process.argv[2];
      const students = await readDatabase(filePath);
      let responseText = 'This is the list of our students\n';
      const fields = Object.keys(students).sort(
        (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
      );

      fields.forEach((field) => {
        const studentNames = students[field].join(', ');
        responseText += `Number of students in ${field}: ${students[field].length}. List: ${studentNames}\n`;
      });

      res.status(200).send(responseText);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const filePath = process.argv[2];
      const students = await readDatabase(filePath);
      const studentNames = students[major].join(', ');
      res.status(200).send(`List: ${studentNames}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
