const express = require("express"); //import express
const app = express();
app.use(express.json());
const {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  removeEmployee,
} = require("./employees");

app.get("/", async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.send({
      data: employees,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: "something went wrong" });
  }
});
app.post("/employee", async (req, res) => {
  try {
    const data = req.body;
    let employee = await addEmployee(data);
    res.send({
      data: employee,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: "something went wrong" });
  }
});
app.patch("/employee/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    let employee = await addEmployee(id, data);
    res.send({
      data: employee,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: "something went wrong" });
  }
});
app.delete("/employee/:id", (req, res) => {
  res.send("");
});
app.listen(3000, () => {
  console.log("htpp://localhost:3000");
});
