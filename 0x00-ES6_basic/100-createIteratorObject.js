export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const reportWithIterator = [];
  for (const elem in employees) {
    for (const i of employees[elem]) {
      reportWithIterator.push(i);
    }
  }
  return reportWithIterator;
}
