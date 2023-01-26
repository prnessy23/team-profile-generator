
// Creating Intern constructor
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern("Peter", "007", "peter.wolfe@gmail", "Boston College");

    expect(intern.school).toBe("object");

});
test('gets employee school from constructor', () => {
    const intern= new Intern("Peter", "007", "peter.wolfe@gmail.com", "Boston College");

    expect(intern.school)
    .toBe("object");
});
test ('gets role from getRole',() => {
    const intern =new Intern("Peter", "007","peter.wolfe@gmail.com","Boston College");
    expect(intern.getRole()).toBe("Intern");

});