
// Creating Intern constructor
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Peter', 007, 'peter.wolfe@gmail', "Boston College");

    expect(intern.school).toEqual(expect.any(String));

});
test('gets employee school', () => {
    const (intern)= new Intern('Peter', 007, 'peter.wolfe@gmail.com', "Boston College");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
test ('gets role from getRole',() => {
    const intern =new Intern('Peter', 007,'peter.wolfe@gmail.com',"Boston College");
    expect(intern.getRole()).toEqual("Intern");

});