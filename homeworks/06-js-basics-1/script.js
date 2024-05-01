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

// task 4 https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

function zero(func) {
    return func ? func(0) : 0;
     }
   function one(func) {
     return func ? func(1) : 1;
   }
   function two(func) {
     return func ? func(2) : 2;
   }
   function three(func) {
     return func ? func(3) : 3;
   }
   function four(func) {
     return func ? func(4) : 4;
   }
   function five(func) {
     return func ? func(5) : 5;
   }
   function six(func) {
     return func ? func(6) : 6;
   }
   function seven(func) {
     return func ? func(7) : 7;
   }
   function eight(func) {
    return func ? func(8) : 8;
   }
   function nine(func) {
     return func ? func(9) : 9;
   }
   function plus(value) {
     return function(prev) {
       return prev + value;
     };
   }
   function minus(value) {
     return function(prev) {
       return prev - value;
     };
   }
   function times(value) {
     return function(prev) {
       return prev * value;
     };
   }
   function dividedBy(value) {
     return function(prev) {
       return prev / value;
     };
   }