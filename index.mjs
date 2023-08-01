import Schema from "./employees_pb.js";
import fs from "fs";

const kunal = new Schema.Employee;
kunal.setId(1);
kunal.setName("Kunal Singh");
kunal.setSalary(1000);

const anmol = new Schema.Employee;
anmol.setId(2);
anmol.setName("Anmol Singh");
anmol.setSalary(2000);

const x = new Schema.Employee;
x.setId(3);
x.setName("X Singh");
x.setSalary(3000);

const employees = new Schema.Employees();
employees.addEmployees(kunal);
employees.addEmployees(anmol);
employees.addEmployees(x);

// console.log(employees.serializeBinary());

fs.writeFileSync("data.bin", employees.serializeBinary());

const bytesBuffer = fs.readFileSync("data.bin");
// const bytes = Uint8Array.from(bytesBuffer); // Binary Data


const employeesNew = Schema.Employees.deserializeBinary(bytesBuffer); // Can give buffer and bytes

const employeeList = employeesNew.getEmployeesList();

// Step 2: Access individual employee data
employeeList.forEach((employee) => {
  const id = employee.getId();
  const name = employee.getName();
  const salary = employee.getSalary();

  console.log(`Employee ID: ${id}`);
  console.log(`Employee Name: ${name}`);
  console.log(`Employee Salary: ${salary}`);
  console.log("------------");
});