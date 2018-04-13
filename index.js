#!/usr/bin/env node

const Calculator = require('./app/calc');
const calc = new Calculator();
let args = process.argv[2];
const argArray = calc.parse(args);

while (1 < argArray.length) {
    argArray.forEach((val, ind) => {
        argArray.forEach((val, ind) => {
            if (val === '*') { 
                argArray.splice(ind-1, 3, calc.multiply(Number(argArray[ind-1]), Number(argArray[ind+1])));
            }
            if (val === '/') { 
                argArray.splice(ind-1, 3, calc.divide(Number(argArray[ind-1]), Number(argArray[ind+1])));
            }
        });        
        if (val === '+') { 
            argArray.splice(ind-1, 3, calc.add(Number(argArray[ind-1]), Number(argArray[ind+1])));
        }
        if (val === '-') { 
            argArray.splice(ind-1, 3, calc.subtract(Number(argArray[ind-1]), Number(argArray[ind+1])));
        }
    });
}

console.log(argArray);