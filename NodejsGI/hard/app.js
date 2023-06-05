// HARD: Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.

// Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond with 
// all data on the employees.

// If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.

// If you hit the endpoint with an incorrect employeeID, 
// send back the correct HTTP status code and an error message stating that the employee was not found.

// GET::myendpointname.com/employees = Json with information from all 10 employees.

// GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.

const fs = require('fs');
const express = require("express");
const app = express();

// Read the employees data from the JSON file
const employeesData = JSON.parse(fs.readFileSync('./employees.json')).employees;

// Endpoint to retrieve all employees
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      employees: employeesData
    }
  });
});

// Endpoint to retrieve an employee by ID
app.get('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const employee = employeesData.find((employee) => employee.id === id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: "Employee not found" });
  }
});

const port = 9000;
app.listen(port, () => {
  console.log(`App is running on server ${port}.`);
});


