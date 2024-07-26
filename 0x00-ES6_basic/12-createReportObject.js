export default function createReportObject(employeesList) {
  const emplyeesObj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return emplyeesObj;
}
