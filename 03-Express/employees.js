const fs = require("fs/promises");
async function getAllEmployees() {
  let employees = await fs.readFile("./employees.json", {
    encoding: "utf-8",
  });
  employees = JSON.parse(employees);
  return employees;
}

function addEmployee(data) {}

function updateEmployee(id, data) {}

function removeEmployee(id) {}

module.exports = {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  removeEmployee,
};
