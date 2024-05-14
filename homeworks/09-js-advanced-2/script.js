class Serializable {
  serialize() {
    const props = Object.getOwnPropertyNames(this);
    for (let i = 0; i < props.length; i++) {
      let propsValue = this[props[i]];
      if (
        propsValue == Infinity ||
        propsValue == -Infinity ||
        propsValue == NaN ||
        propsValue == -0
      ) {
        propsValue = '"' + `${propsValue}` + '"';
      }
    }
    return JSON.stringify(this);
  }
  ckeckDate(data) {
    return new Date(data) !== "Invalid Date" && !isNaN(new Date(data));
  }
  wakeFrom(data) {
    if (data) {
      let item = JSON.parse(data);
      const props = Object.getOwnPropertyNames(this);
      for (let keys in item) {
        let found = false;
        for (let i = 0; i < props.length; i++) {
          let propValue = item[props[i]];
          let itemType = typeof propValue;
          if (
            ![
              "null",
              "object",
              "array",
              "number",
              "string",
              "Date",
              "undefined",
            ].includes(itemType)
          ) {
            throw new Error("wrong type of data");
          }
          if (this.ckeckDate(item[props[i]])) {
            item[props[i]] = new Date(item[props[i]]);
          }
          if (keys == props[i]) {
            found = true;
            break;
          }
        }
        if (!found) {
          throw new Error(
            "the serialized line does not contain data for User class"
          );
        }
      }
      return new this.constructor(item);
    }
  }
}

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth } = {}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
  }

  printInfo() {
    console.log(
      `${this.firstName[0]}. ${this.lastName} - ${
        this.phone
      }, ${this.birth.toISOString()}`
    );
  }
}

let tolik = new UserDTO({
  firstName: "Anatoliy",
  lastName: "Nashovich",
  phone: "2020327",
  birth: new Date("1999-01-02"),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
resurrectedTolik.printInfo(); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({ content, date, author } = {}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

console.log(new Post().wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class
