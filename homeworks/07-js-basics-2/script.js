//  task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

//  task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(ar) {
  let counter = 0;
  let n = 2;
  const size = Math.ceil(ar.length / n);
  let temp = Array.from({ length: size }, (v, i) => ar.slice(i * n, i * n + n));
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].length > 1 && Math.abs(temp[i][0] - temp[i][1]) == 1) {
      counter++;
    }
  }
  return counter;
}

//  task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {
  for (let i = bound; i > 0; i--) {
    if (i % divisor == 0) {
      return i;
    }
  }
}

//  task 4 https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((e) => e % 2 == 0);
}

//  task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr) {
  let numbers = [];
  arr.sort((a, b) => b - a);
  let length = arr.length;
  for (let i = 0; i < length / 2; i++) {
    let firstEl = arr.shift();
    numbers.push(firstEl);
    firstEl = 0;
    let lastEl = arr.pop();
    if (lastEl) {
      numbers.push(lastEl);
    }
  }
  return numbers;
}

//  task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c

function evenChars(string) {
  let arr = Array.from(string);
  let length = arr.length;
  if (100 > length && length > 2) {
    return arr.filter((_, i) => {
      return i % 2 == 1;
    });
  }
  return "invalid string";
}

//  task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(triplet) {
  let min = Math.min(...triplet);
  let max = Math.max(...triplet);
  let midNumber = (element) => min < element && element < max;
  return triplet.findIndex(midNumber);
}

//  task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = (arr) => {
  let str = arr.join("");
  return parseInt(str, 2);
};
9;

//  task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  let str = arr[0];
  let x = arr.filter((e) => {
    return e != str;
  });
  if (x.length === 1) {
    return x[0];
  }
  return str;
}

//  task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr[i];
    let number = tempArr.match(/\d+/g);
    let str = "";
    str = String.fromCharCode(number[0]);
    if (tempArr.length !== 1) {
      tempArr = tempArr.replace(tempArr.match(/\d+/g)[0], "");
      let second = tempArr.length > 0 ? tempArr[0] : "";
      let last = tempArr.length > 0 ? tempArr[tempArr.length - 1] : "";
      str += last;
      if (tempArr.length >= 2) {
        str += tempArr.substring(1, tempArr.length - 1);
      }
      if (tempArr.length != 1 && second) {
        str += second;
      }
    }
    arr[i] = [];
    arr[i] = str;
  }
  str = arr.join(" ");
  return str;
}

//  task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  let arr = array.filter((e, i) => e % 2 != 0).sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      array[i] = arr.shift();
    }
  }
  return array;
}

//  ADVANCED

//  task 1 https://www.codewars.com/kata/515bb423de843ea99400000a

class PaginationHelper {
  collection = null;
  itemsPerPage = 0;
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
  }
  itemCount() {
    return this.collection.length;
    // returns the number of items within the entire collection
  }
  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
    // returns the number of pages
  }
  pageItemCount(pageIndex) {
    if (pageIndex >= this.pageCount() || pageIndex < 0) {
      return -1;
    }
    let newPageIndex = pageIndex + 1;
    if (newPageIndex >= this.pageCount()) {
      return this.itemCount() % this.itemsPerPage == 0
        ? this.itemsPerPage
        : this.itemCount() % this.itemsPerPage;
    }
    return this.itemsPerPage;

    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
  }
  pageIndex(itemIndex) {
    if (itemIndex >= this.itemCount() || itemIndex < 0) {
      return -1;
    }
    if (itemIndex >= 1) {
      return Math.floor(itemIndex / this.itemsPerPage);
    } else {
      return 0;
    }
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
  }
}

//  task 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  return arr.filter((e) => e !== 0).concat(arr.filter((e) => e === 0));
}

//  task 3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

function findUniq(arr) {
  let temp = arr.map((e) => {
    let tA = [...new Set(e.toLowerCase())];
    return tA.sort().join("");
  });
  let uniqueIndex = temp.findIndex(
    (element) => temp.indexOf(element) === temp.lastIndexOf(element)
  );

  return arr[uniqueIndex];
}

//  task 4 https://www.codewars.com/kata/5296bc77afba8baa690002d7
