let words = "is2 Thi1s T4est 3a";
let wordsArray = words.split(" ");
let position = 0;
let objArray = [];

for (word of wordsArray) {
  let i = 0;
  // cycle through characters in word
  while (word[i]) {
    // when I find the number, assign it to a variable
    if (word[i].match(/[1-9]/)) {
      position = word[i];
    }
    i++;
  }
  // construct object with unchanged word and number value
  objArray.push({
    position,
    word,
  });
}

console.log(objArray);

let sort = wordsArray;
// console.log(sort);
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
function order(words) {
  // split the string into an array of words
  words = words.split(" ");
  // sort the words in the array by the number value in each string
  words.map((word) => {});
  // return reordered array or empty string
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
