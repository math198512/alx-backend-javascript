import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(students = getListStudents()) {
  const initialValue = 0;
  const sum = students.reduce(
    (accumulator, student) => accumulator + student.id,
    initialValue,
  );
  return sum;
}
