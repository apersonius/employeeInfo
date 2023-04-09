const Intern = require('../lib/intern');
const intern = new Intern('Abigail', '1234', 'personius12@gmail.com', 'PVAMU');

test('test constructor values', () => {
    expect(intern.name).toBe('Abigail');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('personius12@gmail.com');
});

test('test getName()', () => {
    expect(intern.getName()).toBe('Abigail');
});

test('test getId()', () => {
    expect(intern.getId()).toBe('1234');
});

test('test getEmail()', () => {
    expect(intern.getEmail()).toBe('personius12@gmail.com');
});

test('test getSchool()', () => {
    expect(intern.getSchool()).toBe('PVAMU');
});

test('test getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});