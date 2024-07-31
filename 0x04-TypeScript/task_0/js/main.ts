interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const [student1, student2] = [
    {
        firstName: "Gon",
        lastName: "Freecs",
        age: 12,
        location: "New-York"
    },
    {
        firstName: "Suzan",
        lastName: "Storm",
        age: 30,
        location: "Amsterdam"
    }
]

const studentsList: Array<Student> = [student1, student2];