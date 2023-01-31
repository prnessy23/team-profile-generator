const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
  const manager = new Manager();

  expect(typeof(manager)).toBe("object");
});

test('gets officeNumber from constructor', () => {
  const manager = new Manager("Peter","007","peter.wolfe@gmail.com,","23")


  expect(manager.officeNumber).toBe("23");
});


test('gets officeNumber from method', () => {
  const manager = new Manager("Peter","007","peter.wolfe@gmail.com,","23")


  expect(manager.getOfficeNumber()).toBe("23");
});
