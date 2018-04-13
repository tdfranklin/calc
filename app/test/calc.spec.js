const {expect} = require('chai');
require('mocha');
const Calculator = require('../calc.js');

describe('Calculator', () => {
    const calc = new Calculator();
    describe('add', () => {
        it('should add two numbers together', () => {
            const result = calc.add(2,2);
            expect(result).to.equal(4);
        });

        it('should return a number', () => {
            const result = calc.add(2,2);
            expect(result).to.be.a('number');
        });
    });

    describe('subtract', () => {
        it('should subtract two numbers', () => {
            const result = calc.subtract(4,2);
            expect(result).to.equal(2);
        });

        it('should return a number', () => {
            const result = calc.subtract(4,2);
            expect(result).to.be.a('number');
        });
    });

    describe('multiply', () => {
        it('should multiply two numbers', () => {
            const result = calc.multiply(2,8);
            expect(result).to.equal(16);
        });

        it('should return a number', () => {
            const result = calc.multiply(2,8);
            expect(result).to.be.a('number');
        });
    });

    describe('divide', () => {
        it('should divide two numbers', () => {
            const result = calc.divide(100,10);
            expect(result).to.equal(10);
        });

        it('should return a number', () => {
            const result = calc.divide(100,10);
            expect(result).to.be.a('number');
        });
    });

    describe('parse', () => {
        it('should split string into Math array', () => {
            const result = calc.parse('2+3*100/56');
            expect(result).to.deep.equal([ '2', '+', '3', '*', '100', '/', '56' ]);
        });

        it('should return an array', () => {
            const result = calc.parse('2+3*100/56');
            expect(result).to.be.a('array');
        });
    });
});