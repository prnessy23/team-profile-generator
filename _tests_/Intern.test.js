
// Creating Intern constructor
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern();

    expect(typeof Intern).toBe("object");

});
test('gets employee school from constructor', () => {
    const intern= new Intern("Peter", "007", "peter.wolfe@gmail.com", "Boston College");

    expect(intern.schoolName).toBe("Boston College");
});
test ('gets role from getRole',() => {
    const intern =new Intern("Peter", "007","peter.wolfe@gmail.com","Boston College");
    expect(intern.getRole()).toBe("Intern");

});