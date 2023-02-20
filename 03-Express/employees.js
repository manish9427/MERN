const fs = require("fs/promises");
async function getAllEmployees() {
  let employees = await fs.readFile("./employees.json", {
    encoding: "utf-8",
  });
  employees = JSON.parse(employees);
  return employees;
}

async function updateEmployeesFile(employees) {
  employees = JSON.stringify(employees, null, 2);
  await fs.writeFile("./employees.json", employees);
}

async function addEmployee(data) {
  const employees = await getAllEmployees();
  let id = 1;
  for (const employee of employees) {
    if (employee.id >= id) {
      id = employee.id + 1;
    }
  }
  data.id = id;
  employees.push(data);
  await updateEmployeesFile(employees);
  return data;
}

async function updateEmployee(id, data) {
  const employees = await getAllEmployees();
  let index = -1;
}

async function removeEmployee(id) {}

module.exports = {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  removeEmployee,
};
