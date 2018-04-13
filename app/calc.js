class Calculator {

    add(a,b) {
        return a + b;
    }

    subtract(a,b) {
        return a - b;
    }

    multiply(a,b) {
        return a * b;
    }

    divide(a,b) {
        return a/b;
    }

    parse(string) {
        let expression = string;
        let copy = string;
        let numbers, operators;
        let result = [];

        expression = expression.replace(/[0-9]+/g, '#');
        numbers = copy.split(/[^0-9\.]+/);
        operators = expression.split('#').filter(op => op);

        for(let i = 0; i < numbers.length; i++) {
            result.push(numbers[i]);
            if (i < operators.length) result.push(operators[i]);
        }
        return result;
    }
}

module.exports = Calculator;