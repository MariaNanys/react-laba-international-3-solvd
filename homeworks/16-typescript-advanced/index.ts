interface Result {
    value: number,
    error: string
}
interface Calculator {
    add(num1: number, num2: number): Result,
    substract(num1: number, num2: number): Result,
    multiply(num1: number, num2: number): Result,
    divide(num1: number, num2: number): Result,
    power(base: number, exponent: number): Result,
    sqrt(num: number): Result,
}
class BasicCalculator implements Calculator {
    add(num1: number, num2: number): Result {
        return { value: num1 + num2, error: '' };
    }
    substract(num1: number, num2: number): Result {
        return { value: num1 - num2, error: '' };
    }
    multiply(num1: number, num2: number): Result {
        return { value: num1 * num2, error: '' };
    }
    divide(num1: number, num2: number): Result {
        if (num2 === 0) {
            return { value: 0, error: 'Division by zero' };
        }
        return { value: num1 / num2, error: '' };
    }
    power(base: number, exponent: number): Result {
        if (exponent <= 0 || !Number.isInteger(exponent)) {
            return { value: 0, error: "Exponent must be a positive integer" };
        }
        return { value: Math.pow(base, exponent), error: '' };

    }
    sqrt(num: number): Result {
        if (num < 0) {
            return { value: 0, error: "Cannot calculate square root of negative number" };
        }
        return { value: Math.sqrt(num), error: '' };
    }
}

const calculator = new BasicCalculator();
console.log(calculator.add(5, 3));
console.log(calculator.substract(10, 3));
console.log(calculator.multiply(4, 5));
console.log(calculator.divide(10, 2));
console.log(calculator.divide(10, 0));
console.log(calculator.power(2, 3));
console.log(calculator.power(2, -3));
console.log(calculator.sqrt(25));
console.log(calculator.sqrt(-25));