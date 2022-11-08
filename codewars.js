// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
  let sum = 0;
  let squares = numbers.map((num) => num * num);
  for (number of squares) {
    sum += number;
  }
  return sum;
}

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
  // your code
  let letterBank = s1 + s2;
  let lettersArray = letterBank.split("").sort();
  let filtered = [...new Set(lettersArray)];
  return filtered.join("");
}

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// String.prototype.toJadenCase = function (string) {
//   return this.split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };

// Refactor the function into a recursive Fibonacci function that using a memoized data structure avoids the deficiencies of tree recursion. Can you make it so the memoization cache is private to this function?
let values = [0, 1, 1];
function fibonacci(n) {
  console.log(`values[n] --> ${values[n]}`);
  if (typeof values[n] === "number") {
    // Value already exists in the cache array
    return values[n];
  } else {
    // Add value to the cache array
    values[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return values[n];
  }
}

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
function towerBuilder(nFloors) {
  let strLength = nFloors === 1 ? 1 : 1 + (nFloors - 1) * 2;
  let centerIndex = nFloors - 1;

  let tower = [];
  let floor = "*";

  if (strLength === 1) {
    tower.push(floor);
    return tower;
  }
  if (strLength > 1) {
    console.log(`Floor length: ${floor.length}`);
    console.log(`String length: ${strLength}`);
    while (floor.length < strLength) {
      floor = " " + floor + " ";
      console.log(`updated floor: ${floor}`);
    }
    tower.push(floor);

    let i = 1;
    let arr = [];
    while (arr[0] !== "*") {
      arr = floor.split("");
      arr.splice(centerIndex + i, 1, "*");
      arr.splice(centerIndex - i, 1, "*");
      floor = arr.join("");
      tower.push(floor);
      i++;
    }
    return tower;
  }
}

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
function humanReadable(seconds) {
  let hrs = seconds / 60 / 60;
  seconds = seconds - Math.floor(hrs) * 3600;

  let hours = "";
  if (hrs < 1) {
    hours = "00";
  } else if (hrs < 10) {
    hours = `0${Math.floor(hrs)}`;
  } else {
    hours = `${Math.floor(hrs)}`;
  }

  let mins = seconds / 60;
  seconds = seconds - Math.floor(mins) * 60;

  let minutes = "";
  if (mins < 1) {
    minutes = "00";
  } else if (mins < 10) {
    minutes = `0${Math.floor(mins)}`;
  } else {
    minutes = `${Math.floor(mins)}`;
  }

  let secs = "";
  if (seconds < 1) {
    secs = "00";
  } else if (seconds < 10) {
    secs = `0${Math.floor(seconds)}`;
  } else {
    secs = `${Math.floor(seconds)}`;
  }

  return `${hours}:${minutes}:${secs}`;
}

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
function duplicateCount(text) {
  let ref = text.toLowerCase().split("");
  let bank = [...new Set(ref)];

  let counter = 0;
  // for each character in the bank
  for (character of bank) {
    let freq = 0;
    // compare back to each char in the reference string
    for (char of ref) {
      if (character === char) {
        freq++;
      }
    }
    if (freq > 1) {
      counter++;
    }
  }
  return counter;
}

// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
// num can be a positive or negative integer
function isPrime(num) {
  if (num <= 1) {
    return false;
  } else if (num === 2 || num === 3) {
    return true;
  } else if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (var i = 5; i <= Math.sqrt(num); i = i + 6) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str) {
  let words = str.split(" ");
  let pigWords = [];
  for (word of words) {
    if (/^([\.,?!]{1})$/.test(word)) {
      pigWords.push(word);
    } else {
      let newWord = word.slice(1);
      newWord += word[0];
      newWord += "ay";
      pigWords.push(newWord);
    }
  }
  return pigWords.join(" ");
}

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
