// Creating engineer constructor
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer("Peter", "007", "peter.wolfe@gmail", "wolfie23");

    expect(typeof github).toBe("object");

});
test('gets github from constructor', () => {
    const engineer= new Engineer("Peter", "007", "peter.wolfe@gmail.com", "wolfie23");

    expect(engineer.name).toBe("wolfie23");
});
test ('gets role of employee',() => {
    const engineer =new Engineer("Peter", "007",
    "peter.wolfe@gmail.com","wolfie23");
    expect(engineer.getRole()).toBe("Engineer");

});