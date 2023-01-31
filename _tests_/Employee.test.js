// creating employee constructor
const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee();

  expect(typeof(employee)).toBe("object");
});

test("gets employee name from constructor", () => {
  const employee = new Employee("Peter", "007", "peter.wolfe@gmail.com");

  expect(employee.name).toBe("Peter");
});

test("gets employee id", () => {
  const employee = new Employee("Peter", "007", "peter.wolfe@gmail.com");

  expect(employee.id).toBe("007");
});

test("gets employee email", () => {
  const employee = new Employee("Peter", "007", "peter.wolfe@gmail.com");

  expect(employee.email).toBe("peter.wolfe@gmail.com");
});

test("gets employee name from method", () => {
  const employee = new Employee("Peter", "007", "peter.wolfe@gmail.com");

  expect(employee.getName()).toBe("Peter");
});

test("gets employee name from method", () => {
  const employee = new Employee("Peter", "007", "peter.wolfe@gmail.com");

  expect(employee.getId()).toBe("007");
});

test("gets employee name from method", () => {
  const employee = new Employee("Peter", "007", "peter.wolfe@gmail.com");

  expect(employee.getEmail()).toBe("peter.wolfe@gmail.com");
});

test("gets role of employee", () => {
  const employee = new Employee("Peter", "007", "peter.wolfe@gmail.com");

  expect(employee.getRole()).toBe("Employee");
});
