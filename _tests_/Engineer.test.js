// Creating engineer constructor
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Peter', '007', 'peter.wolfe@gmail', "wolfie23");

    expect(engineer.github).toEqual(expect.any(String));

});
test('gets engineer github value', () => {
    const engineer= new Engineer('Peter', 007, 'peter.wolfe@gmail.com', "wolfie23");

    expect(engineer.getGithud()).toEqual(expect.stringContaining(engineer.github.toString()));
});
test ('gets role of employee',() => {
    const engineer =new Engineer('Peter', 007,
    "peter.wolfe@gmail.com",'wolfie23');
    expect(engineer.getRole()).toEqual("Engineer");

});