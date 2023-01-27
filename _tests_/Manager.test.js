const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
  const manager = new Manager
  ();

  expect(typeof Manager).toBe("object");
});

test('gets officeNumber from constructor', () => {
  const manager = new Manager("Peter","007","peter.wolfe@gmail.com,","23")


  expect(manager.officeNumber).toBe("23");
});
