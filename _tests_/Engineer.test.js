// Creating engineer constructor
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer ();

    expect(typeof Engineer).toBe("object");

});
test('gets githubName from constructor', () => {
    const engineer= new github("Peter", "007", "peter.wolfe@gmail.com", "wolfie23");

    expect(engineer.githubName).toBe("wolfie23");
});
test ('gets role of employee',() => {
    const engineer =new Engineer("Peter", "007",
    "peter.wolfe@gmail.com","wolfie23");
    expect(engineer.getRole()).toBe("Engineer");

});