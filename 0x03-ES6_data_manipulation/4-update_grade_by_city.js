import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(students = getListStudents(), city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.filter((el) => el.studentId === student.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...student,
        grade,
      };
    });
}
