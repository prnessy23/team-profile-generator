// Creating engineer constructor
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer ();

    expect(typeof(engineer)).toBe("object");

});
test('gets githubName from constructor', () => {
    const engineer= new Engineer("Peter", "007", "peter.wolfe@gmail.com", "wolfie23");

    expect(engineer.github).toBe("wolfie23");
});

test('gets githubName from method', () => {
    const engineer= new Engineer("Peter", "007", "peter.wolfe@gmail.com", "wolfie23");

    expect(engineer.getGithub()).toBe("wolfie23");
});

test ('gets role of employee',() => {
    const engineer =new Engineer("Peter", "007",
    "peter.wolfe@gmail.com","wolfie23");
    expect(engineer.getRole()).toBe("Engineer");

});