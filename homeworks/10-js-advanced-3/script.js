// task 1 - https://www.codewars.com/kata/55e7650c8d894146be000095

function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError("Message is null!");
  }

  if (typeof msg !== "string") {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`
    );
  }

  if (msg.length === 0 || msg.length > 255) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  const regex = /<[^>]*>/g;

  if (regex.test(msg)) {
    return false;
  }

  return true;
}

// task 2 - https://www.codewars.com/kata/5a353a478f27f244a1000076

async function sayJoke(apiUrl, jokeId) {
  if (apiUrl != "http://great.jokes/christmas") {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }
  const address = await fetch(apiUrl);
  const jokes = await address.json();

  const joke = jokes.jokes.find((j) => j.id === jokeId);

  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }
  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  };
}

// task 3 - setTimeout/setInterval

let i = 0;
let interval = setInterval(function counter() {
  i++;
  console.log(`Elapsed time: ${i} sec`);
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000);

// task 6 - Digit or not

function checkString(str) {
    let regex = '^[0-9].*';
    if (str.match(regex)) {
        return true;
    } return false;
}

//task 7 - Check phone number

function checkPhone (numb) {
    const regex = /^\+48\s\d{3}-\d{3}-\d{3}$/;
    if (numb.match(regex)) {
        return true;
    }
    return false;
}