let add7 = (x) => console.log(Number(x) + 7);
let chosen_number = prompt("Pick a number: ");

add7(chosen_number);

let multiply = (x, y) => console.log(Number(x) * Number(y));
let x = prompt("Write first number: ");
let y = prompt("write second number: ");

multiply(x, y);

let capitalize = (word) => {
  let lowerCasePart = word.toLowerCase();
  lowerCasePart = lowerCasePart.slice(1);
  let upperCasePart = word.toUpperCase();
  upperCasePart = upperCasePart.slice(0, 1);

  capitalizedWord = upperCasePart + lowerCasePart;
  console.log(capitalizedWord);
};

capitalize("zEbRa");

let lastWord = (myString) => {
  let lastLetter = myString.slice(-1);
  console.log(lastLetter);
};

lastWord("This is amazing");
