const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Peter', 007, 'peter.wolfe@gmail', 23);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});
    test ('gets role of employee',() => {
        const manager =new Manager('Peter', 007,'peter.wolfe@gmail.com',);

        expect(manager.getRole()).toEqual("Manager");
    
    });