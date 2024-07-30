export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    if ((typeof newName !== 'string') && !(newName instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(newLength) {
    if ((typeof newLength !== 'number') && !(newLength instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  set students(students) {
    if (!(students instanceof Array) || !students.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
