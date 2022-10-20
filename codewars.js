// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
function validatePIN(pin) {
  let regex = /^([\d]{4}|[\d]{6})$/;
  return regex.test(pin.toString());
}

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
function getSum(a, b) {
  let sum = 0;
  let difference = Math.abs(a - b);
  let startingAddend;
  a < b ? (startingAddend = a) : (startingAddend = b);
  while (difference >= 0) {
    sum += startingAddend;
    startingAddend = startingAddend + 1;
    difference = difference - 1;
  }
  return sum;
}

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
function order(words) {
  // split the string into an array of words
  words = words.split(" ");
  // sort the words in the array by the number value in each string
  let position = 0;
  let objArray = [];

  for (word of words) {
    let i = 0;
    // cycle through characters in word
    while (word[i]) {
      // when I find the number, assign it to a variable
      if (word[i].match(/[1-9]/)) {
        position = word[i];
      }
      i++;
    }
    // construct object with position unchanged word and number value
    objArray.push({
      position,
      word,
    });
  }
  let result = objArray
    .sort((a, b) => a.position - b.position)
    .map((obj) => obj.word)
    .join(" ");

  return result || "";
}

// accept array of minimum four positive integer members --> return sum of two lowest members
function sumTwoSmallestNumbers(numbers) {
  let lowNums = numbers.sort((a, b) => a - b).slice(0, 2);
  return lowNums[0] + lowNums[1];
}

// accept two arrays of integer values --> return array a without any members matching members of array b
function arrayDiff(a, b) {
  let result = a;
  for (position of b) {
    if (a.includes(position)) {
      result = result.filter((item) => item !== position);
    }
  }
  return result;
}
