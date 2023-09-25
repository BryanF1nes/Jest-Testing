const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const reverseString = (string) => {
    return string.split('').reverse().join('');
}

const calculator = () => {
    const add = (a, b) => {
        return a + b;
    }

    const sub = (a, b) => {
        return a - b;
    }

    const multiply = (a, b) => {
        return a * b;
    }

    const divide = (a, b) => {
        return a / b;
    }

    return { add, sub, multiply, divide }
}

const newCalculator = calculator();

module.exports = { capitalize, reverseString, newCalculator };