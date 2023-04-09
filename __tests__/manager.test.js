const Manager = require('../lib/manager');
const manager = new Manager('Abigail', '1234', 'personius12@gmail.com', '5678');

test('Test if constructor values are passed to manager data', () => {
    expect(manager.name).toBe('Abigail');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('personius12@gmail.com');
});

test('Test getName()', () => {
    expect(manager.getName()).toBe('Abigail');
});

test('Test getID()', () => {
    expect(manager.getId()).toBe('1234');
});

test('Test getEmail()', () => {
    expect(manager.getEmail()).toBe('personius12@gmail.com');
});

test('Test getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('5678');
});

test('Test getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});
