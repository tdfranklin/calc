function calc(strToCalc){
    return eval(strToCalc);
  }
  
  function calcHard(strToCalc){
    var total = 0;
    const workingArray = strToCalc.split('');
    const numbers = [];
    const operators = [];
    let i = 0;
    var numStr = '';
    var groupedNums = [];
    var groupedOperators = [];
    var groupedNumStr = '';
    while (i <= strToCalc.length){
      if (!isNaN(parseInt(workingArray[i]))){
          if (groupedNums.length > 0){
              groupedNumStr += workingArray[i];
          }
          else {
              numStr += workingArray[i];            
          }
          i++;
          continue;
      }
      else if (workingArray[i] === '('){
          groupedNums.push([]);
          groupedOperators.push([]);
          groupedNumStr = '';
          i++;
          continue;
      }
      else if (workingArray[i] === ')'){
          let gn = groupedNums.pop();
          let go = groupedOperators.pop();
          if (groupedNumStr.length > 0) {
              gn.push(parseInt(groupedNumStr));
          }
          let groupTotal = doCalcTotal(gn, go);
          if (groupedNums.length > 0){
              groupedNums[groupedNums.length-1].push(groupTotal);
          }
          else {
              numbers.push(groupTotal);
          }
          groupedNumStr = '';
          i++;
          continue;
      }
      else {
          if (groupedOperators.length > 0){
              if (groupedNumStr.length > 0){
                  groupedNums[groupedNums.length-1].push(parseInt(groupedNumStr));
              }
              groupedOperators[groupedOperators.length-1].push(workingArray[i]);
              groupedNumStr = '';
            } else {
              if (numStr){
                  numbers.push(parseInt(numStr));
              }
              operators.push(workingArray[i]);
              numStr = '';
            }
            i++;
            continue;
      }
    }
  
    return doCalcTotal(numbers, operators);
  }
  
  function doCalcTotal(numbers, operators) {
      let i = 1;
      let total = numbers[0];
      while (i < numbers.length){
          total = doCalc(total, numbers[i], operators[i-1]);
          i++;
       }
      return total;
  }
  
  function doCalc(numA, numB, operator){
    if (!operator)
      return 0;
    
    if (operator === '+')
      return numA + numB;
    
    return numA - numB;
  }
  
  console.log(calc("600+9-12"));
  console.log(calc("1+2-3+4-5+6-7"));
  console.log(calc("22+(2-4)"));
  console.log(calc("5+16-((9-6)-(4-2))"));
  console.log(calc("5+16-((9-6)+3-2+10+(30+2)+(4-2))"));
  
  console.log(calcHard("600+9-12"));
  console.log(calcHard("1+2-3+4-5+6-7"));
  console.log(calcHard("22+(2-4)"));
  console.log(calcHard("5+16-((9-6)-(4-2))"));
  console.log(calcHard("5+16-((9-6)+3-2+10+(30+2)+(4-2))"));
  
  
  
  
  
  /* 
  Your previous Markdown content is preserved below:
  
  
  
  You are building an educational website and want to create a simple calculator for students to use. The calculator will only allow addition and subtraction of positive integers.
  
  We also want to allow parentheses in our input. Given an expression string using the "+", "-", "(", and ")" operators like "5+(16-2)", write a function to parse the string and evaluate the result.
  
  Sample input:
      expression1 = "5+16-((9-6)-(4-2))"
      expression2 = "22+(2-4)"
   
  Sample output:
      evaluate(expression1) => 20
      evaluate(expression2) => 20
  
  
  
  
   */