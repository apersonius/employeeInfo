const Engineer = require('../lib/engineer');
const engineer = new Engineer('Abigail', '1234', 'personius12@gmail.com', 'apersonius');

test('test constructor values', () => {
    expect(engineer.name).toBe('Abigail');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('personius12@gmail.com');
});

test('test getName()', () => {
    expect(engineer.getName()).toBe('Abigail');
});

test('test getId()', () => {
    expect(engineer.getId()).toBe('1234');
});

test('test getEmail()', () => {
    expect(engineer.getEmail()).toBe('personius12@gmail.com');
});

test('test getGithub()', () => {
    expect(engineer.getGithub()).toBe('apersonius');
});

test('test getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});