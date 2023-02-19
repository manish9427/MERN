const express = require("express"); //import express
const {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  removeEmployee,
} = require("./employees");

const app = express();

app.get("/employee/all", async (req, res) => {
  const employees = await getAllEmployees();
  res.send({
    data: employees,
  });
});
app.post("/employee/", (req, res) => {
  res.send("");
});
app.patch("/employee/:id", (req, res) => {
  res.send("");
});
app.delete("/employee/:id", (req, res) => {
  res.send("");
});
app.listen(3000, () => {
  console.log("htpp://localhost:3000");
});
