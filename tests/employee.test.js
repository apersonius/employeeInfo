const Employee = require('../lib/employee');
const employee = new Employee('Abigail', '1234', 'personius12@gmail.com');

test('test constructor values passed', () => {
    expect(employee.name).toBe('Abigail');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('personius12@gmail.com');
});

test('test getName()', () => {
    expect(employee.getName()).toBe('Abigail');
});

test('test getId()', () => {
    expect(employee.getId()).toBe('1234');
});

test('test getEmail()', () => {
    expect(employee.getEmail()).toBe('personius12@gmail.com');
});

test('test getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
});