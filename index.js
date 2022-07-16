// task-1

function showThreeTimes(a) {
  return [a, a, a];
}

console.log(showThreeTimes(null));
console.log(showThreeTimes(1));
console.log(showThreeTimes("m"));

//task - 2
function showFiveTimes(b) {
  return b + b + b + b + b;
}

console.log(showFiveTimes("Cat"));

//task -3

function repeatStr(num, str) {
  return str.repeat(num);
}

console.log(repeatStr(3, "Woah"));

//task -4

function findMaxValue(arr) {
  return Math.max.apply(null, arr);
}

const testarray = [1, 6, 83, 91, 0, -4, 1337, 5];
const result4 = findMaxValue(testarray);
console.log("4.max value is:", result4);

//task - 5 A

const divisibleByTen = (x) =>
  x % 10 === 0
    ? console.log(`q5. true,${x} divisible by 10`)
    : console.log(`q5.false.${x} not divisible`);
divisibleByTen(1);
divisibleByTen(2);
divisibleByTen(32);
divisibleByTen(10);
divisibleByTen(30);
divisibleByTen(900000);

//task -5 B

for (let i = 1; i < 126; i++) {
  const result5b = divisibleByTen(i);
}
console.log(divisibleByTen());

//task -6

const findMaximum = (a, b, c, d, e) => Math.max((a, b, c, d, e));

const result6 = findMaximum(6, 8, 17, 58, -11);
console.log("6.max value is:", result6);

//task - 7

function IsAString(input7) {
  if (typeof input7 === "string") {
    return true;
  } else {
    return false;
  }

  return "";
}
console.log("7.if the input is string or not", IsAString(""));
console.log("7.if the input is string or not", IsAString(1));
console.log("7.if the input is string or not", IsAString(null));
console.log("7.if the input is string or not", IsAString("undefined"));

//task - 8

const checkIfAString = (val1, val2) =>
  typeof val1 === "string" && typeof val2 === "string" ? true : false;

console.log(
  "8.check using arrow function if both inputs are string or not",
  checkIfAString(1, null)
);

console.log(
  "8.check using arrow function if both inputs are string or not",
  checkIfAString("", "hello")
);

console.log(
  "8.check using arrow function if both inputs are string or not",
  checkIfAString("", NaN)
);

//task -9

const getFirstWord = (inputstr1) => inputstr1.split(" ")[0];

console.log(getFirstWord("Internetting is hard"));
console.log(getFirstWord("Hello World"));
console.log(getFirstWord("Hello"));

//task -10

const wordRepeater = (string) => {
  let result = "";
  const words = string.split(" ");
  let lengthstr = words.length;

  for (let i = 0; i < lengthstr; i++)
    for (let j = 1; j <= lengthstr; j++) {
      result += words[i] + " ";
    }

  return result;
};

console.log(wordRepeater("bunny"));
console.log(wordRepeater("Cat food"));
console.log(wordRepeater("I am groot"));
console.log(wordRepeater("O M G ?"));

//task - 11
const firstLetter = (data) => data[0];

console.log(firstLetter("cat"));
console.log(firstLetter("quylthulg"));

//task - 12

function firstLetters(str) {
  let array1 = str.split(" ");
  let newarray1 = [];

  for (let x = 0; x < array1.length; x++) {
    newarray1 += array1[x][0];
  }
  return newarray1;
}

console.log(firstLetters("cat cat"));
console.log(firstLetters("What the fruit"));
console.log(firstLetters("MongoDB Express Node React"));

//task -13

const IsStringorArray = (val13) =>
  typeof val13 === "string"
    ? val13.length
    : Array.isArray(val13) === true
    ? val13.length
    : null;

console.log(IsStringorArray("what the fruit"));
console.log(IsStringorArray(5464653));
console.log(IsStringorArray(["m", "12", "l", 57]));

//task -14
const explode = (val14) => (typeof val14 === "string" ? val14.split("") : null);
console.log(explode("Cat"));
console.log(explode(41));
console.log(explode(""));
console.log(explode("R & D"));

//task -15
const foo = (val15) => (val15.includes("o") === true ? true : false);

console.log(foo(""));
console.log(foo("a"));
console.log(foo("o"));
console.log(foo("Cat"));
console.log(foo("Tomato"));
console.log(foo("Potato"));
console.log(foo("Blanket"));
console.log(foo("1"));

//task -16
const bar = (input15, replaceWith) => replaceWith + input15.substring(2);
console.log(bar("", "Cat"));
console.log(bar("x", "Cat"));
console.log(bar("cat", "Cat"));
console.log(bar("foobar", "Cat"));
console.log(bar("potato", "Cat"));
console.log(bar("tomato", "Cat"));
console.log(bar("International Space Station", "Cat"));
