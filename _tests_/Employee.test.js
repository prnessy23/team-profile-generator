// creating employee constructor
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Peter, 007, peter.wolfe@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));


});

test('gets employee name', () => {
    const employee = new Employee('Peter, 007, peter.wolfe@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});


test('gets employee id', () => {
    const employee = new Employee('Peter, 007, peter.wolfe@gmail.com');

    expect(employee.getID()).toEqual(expect.any(String));
});


test('gets employee email', () => {
    const employee = new Employee('Peter, 007, peter.wolfe@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});


test('gets role of employee', () => {
    const employee = new Employee('Peter, 007, peter.wolfe@gmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
});






