// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
const stringToArray = (string) => {
  return string.split(" ");
};

//    https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

const min = (arr, toReturn) => {
  return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
};

//  Поглиблені задачки (робити за бажанням):

// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
warnTheSheep = (queue) => {
  const indexWolfReverse = queue.reverse().indexOf("wolf");
  return indexWolfReverse === 0
    ? "Pls go away and stop eating my sheep"
    : "Oi! Sheep number " +
        indexWolfReverse +
        "! You are about to be eaten by a wolf!";
};
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x) {
  let i = 0;
  const newX = [];
  while (x[i]) {
    newX[i] = x[i] * 2;
    i++;
  }
  return newX;
}
// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
  let currentValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - currentValue > 1) {
      return arr[i];
    }
    currentValue++;
  }
  return null;
}

// Додаткові задачки по JS, кому мало, якщо маєте час і бажання 🙂

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function century(year) {
  // Finish this 🙂
  return Math.ceil(year / 100);
}

// https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
const multiply = (multiplier, multiplicand) => multiplier * multiplicand;
