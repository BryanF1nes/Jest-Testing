const { capitalize, reverseString, newCalculator } = require('./capitalize');

test('Returns a word that is capitalized at the first character', () => {
    expect(capitalize('word')).toBe('Word');
})

test('Returns a reversed string', () => {
    expect(reverseString('double')).toBe('elbuod')
})

test('Add 2 + 2 = 4', () => {
    expect(newCalculator.add(2, 2)).toBe(4);
})

test('Subtract 5 - 1 = 4', () => {
    expect(newCalculator.sub(5, 1)).toBe(4);
})

test('Multiply 4 * 4 = 16', () => {
    expect(newCalculator.multiply(4, 4)).toBe(16);
})

test('divide 8 / 2 = 4', () => {
    expect(newCalculator.divide(8, 2)).toBe(4);
})