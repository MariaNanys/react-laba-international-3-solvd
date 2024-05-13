//task 1 - Pluck - Create a function to access the properties of an object.

function pluck(item, path) {
  let words = path.split(".");
  return words.reduce((e, key) => {
    if (e) {
      return e[key];
    }
    return null;
  }, item);
}

// task 2 - Deep Clone - Create custom deep clone function.

function clone(item) {
  return JSON.parse(JSON.stringify(item));
}

// task 3 - "A long time ago" - Create a function that returns how long ago a certain day was.

function offset(time) {
  return moment(time).fromNow();
}

// task 4 - Random dates - Create a function that generate a random date between to dates

function randomDate(datef, dates) {
  let temp1 = moment(dates).valueOf();
  let temp2 = moment(datef).valueOf();
  return moment(Math.floor(Math.random() * (temp2 - temp1) + temp1));
}

// task 5 - https://www.codewars.com/kata/merged-objects

function objConcat(o) {
  let obj = {};
  for (let i = 0; i < o.length; i++) {
    obj = Object.assign(obj, o[i]);
  }
  return obj;
}

// task 6 - https://www.codewars.com/kata/547f1a8d4a437abdf800055c

class NamedOne {
  constructor(first, last) {
    this._firstName = first;
    this._lastName = last;
    this._fullName = this.firstName + " " + this.lastName;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get fullName() {
    return this._fullName;
  }
  set firstName(newName) {
    this._firstName = newName;
    this._fullName = newName + " " + this.lastName;
  }
  set lastName(newLName) {
    this._lastName = newLName;
    this._fullName = this.firstName + " " + newLName;
  }
  set fullName(newFName) {
    const [first, last] = newFName.split(" ");
    if (!last) return;
    this._firstName = first;
    this._lastName = last;
    this._fullName = newFName;
  }
}

// task 7 ------------------------

// ADVANCED

// task 8 - https://www.codewars.com/kata/54834b3559e638b39d0009a2

class OnceNamedOne {
  constructor(first, last) {
    this._firstName = first;
    this._lastName = last;
    this._fullName = first + " " + last;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get fullName() {
    return this._fullName;
  }
}

// task 9 - https://www.codewars.com/kata/partial-keys

function partialKeys(obj) {
  let arr = [];
  let newObj = {};
  let arrKeys = [];
  for (let key in obj) {
    arrKeys.push(key);
  }
  arrKeys.sort();
  for (let j = 0; j < arrKeys.length; j++) {
    let temp = "";
    let key = arrKeys[j];
    for (let i = 0; i < key.length; i++) {
      temp += key[i];
      if (!arr.some((obj) => obj.hasOwnProperty(temp))) {
        let objv = {};
        objv[temp] = obj[key];
        arr.push(objv);
        newObj = Object.assign({}, ...arr);
      }
    }
  }
  return newObj;
}

// task 10 - https://www.codewars.com/kata/human-readable-time

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  let secs = seconds - hours * 3600 - minutes * 60;
  let time =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    secs.toString().padStart(2, "0");
  return time;
}
