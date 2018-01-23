const sort = require('./sort');

test("sort 'abcdefg' to equal 'gfedcba'", () => {
    expect(sort('abcdefg')).toBe('gfedcba');
});

test("sort 'ABCDabcd' to equal 'dcbaDCBA'", () => {
    expect(sort('ABCDabcd')).toBe('dcbaDCBA');
});

test("sort '12345' to equal '54321'", () => {
    expect(sort('12345')).toBe('54321');
});

test("sort 'a1b2c3d4' to equal 'dcba4321'", () => {
    expect(sort('a1b2c3d4')).toBe('dcba4321');
});

test("sort '!@#$%^' to equal '^@%$#!'", () => {
    expect(sort('!@#$%^')).toBe('^@%$#!');
});