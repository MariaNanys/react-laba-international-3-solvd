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

function printArray(array) {
  return array.join();
}

//  task 4 https://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  let result = d * 40;
  if (d >= 7) {
    return result - 50;
  } else if (d >= 3) {
    return result - 20;
  }
  return result;
}

// task 5 https://www.codewars.com/kata/calculating-with-functions

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
  return function (prev) {
    return prev + value;
  };
}
function minus(value) {
  return function (prev) {
    return prev - value;
  };
}
function times(value) {
  return function (prev) {
    return prev * value;
  };
}
function dividedBy(value) {
  return function (prev) {
    return prev / value;
  };
}

//  task 6 https://www.codewars.com/kata/get-the-middle-character

function getMiddle(s) {
  if (s.length % 2 == 0) {
    return s.substring(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    return s.substring(s.length / 2, s.length / 2 + 1);
  }
}

//  task 7 https://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
    let even = items.filter(a=>pred(a));
    let odd = items.filter(a=>!pred(a));
    items.length = 0; 
    items.push(...odd, ...even);
    return even.length;
  }

//  task 8  ------------------------------------

//  task 9 https://www.codewars.com/kata/find-the-odd-int/

function findOdd(A) {
  let arr = [];
  for (let i = 0; i < A.length; i++) {
    let elIndex = arr.findIndex((e) => e.numb == A[i]);
    if (elIndex != -1) {
      arr[elIndex].counter++;
    } else {
      arr.push({ numb: A[i], counter: 1 });
    }
  }
  for (let i = 0; i < A.length; i++) {
    let counter = arr.find((e) => e.numb == A[i]).counter;
    if (counter % 2 !== 0) {
      return A[i];
    }
  }
  return 0;
}

//  task 10 https://www.codewars.com/kata/find-the-parity-outlier

function findOutlier(integers) {
  let numb1 = integers[0] % 2 === 0;
  let numb2 = integers[1] % 2 === 0;
  let numb3 = integers[2] % 2 === 0;
  if ((numb1 && numb2) || (numb2 && numb3) || (numb1 && numb3)) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 !== 0) {
        return integers[i];
      }
    }
  } else {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        return integers[i];
      }
    }
  }
}

//  task 11 https://www.codewars.com/kata/zipwith

function zipWith(fn, a0, a1) {
  let arr = [];
  let numb = Math.min(a0.length, a1.length);
  for (let i = 0; i < numb; i++) {
    arr.push(fn(a0[i], a1[i]));
  }
  return arr;
}

//  task 12 https://www.codewars.com/kata/filter-the-number

var filterString = function (value) {
  let regex = /\d+/g;
  return parseInt(value.match(regex).join(""));
};

//  task 13 https://www.codewars.com/kata/n-th-fibonacci

function nthFibo(n) {
  return n <= 1 ? 0 : n <= 2 ? 1 : nthFibo(n - 1) + nthFibo(n - 2);
}

//  task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/

//  task 15 https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word) {
  let arr = [];
  let str = "";
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    let elIndex = arr.findIndex((e) => e.letter == word[i]);
    if (elIndex != -1) {
      arr[elIndex].counter++;
    } else {
      arr.push({ letter: word[i], counter: 1 });
    }
  }
  for (let i = 0; i < word.length; i++) {
    let counter = arr.find((e) => e.letter == word[i]).counter;
    if (counter > 1) {
      str += ")";
    } else {
      str += "(";
    }
  }
  return str;
}

//  task 16 https://www.codewars.com/kata/5693239fb761dc8670000001

//  task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  return [...Array(nFloors)].map(
    (_, i) =>
      " ".repeat(nFloors - 1 - i) +
      "*".repeat(i * 2 + 1) +
      " ".repeat(nFloors - 1 - i)
  );
}

//  task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
  let array = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      array.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    } else {
      continue;
    }
  }
  return array;
}

//  task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031

function stringBreakers(n, string) {
  let str = string.replace(/\s/g, "");
  let enter = "\n";
  let a = "";
  for (let i = 0; i < str.length; i += n) {
    let chunk = str.substring(i, i + n);
    a += chunk;
    if (chunk.length === n) {
      a += enter;
    }
  }
  return a;
}

//  task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
  url = url.replace("https://", "").replace("http://", "").replace("www.", "");
  return url.split(".")[0];
}
