//  task 1 https://www.codewars.com/kata/opposite-number

function opposite(number) {
  return -number;
}

//  task 2 https://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
  let result;
  switch (operation) {
    case "+":
      result = value1 + value2;
      `${value1} + ${value2} = ${result}`;
      return result;
    case "-":
      result = value1 - value2;
      `${value1} - ${value2} = ${result}`;
      return result;
    case "*":
      result = value1 * value2;
      `${value1} * ${value2} = ${result}`;
      return result;
    case "/":
      result = value1 / value2;
      `${value1} / ${value2} = ${result}`;
      return result;
    default:
      return 0;
  }
}

//  task 3 https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array){
    return array.join();
  }

// task 4 