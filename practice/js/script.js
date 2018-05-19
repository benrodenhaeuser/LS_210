// find the index at which a given substring of a given string starts

function substring(string, length, index) {
  var substring = "";

  for (var i = index; i < (index + length); i ++) {
    if (!string[i]) { break; }
    substring += string[i];
  }

  return substring;
}

function indexOf(queriedString, queryString) {
  for (var i = 0; i <= queriedString.length - queryString.length; i++) {
    if (substring(queriedString, queryString.length, i) === queryString) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(queriedString, queryString) {
  for (var i = queriedString.length - queryString.length; i >= 0; i--) {
    if (substring(queriedString, queryString.length, i) === queryString) {
      return i;
    }
  }

  return -1;
}

// console.log(indexOf('Some strings', 's'));                      // 5
// console.log(indexOf('Blue Whale', 'Whale'));                    // 5
// console.log(indexOf('Blue Whale', 'Blute'));                    // -1
// console.log(indexOf('Blue Whale', 'leB'));                      // -1
// console.log(lastIndexOf('Some strings', 's'));                 // 11
// console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale')); // 19
// console.log(lastIndexOf('Blue Whale, Killer Whale', 'all')); // -1

// trim a string by removing leading and trailing whitespace.

function substringFrom(string, index) {
  var substr = '';
  for (var i = index; i < string.length; i++) {
    substr += string[i];
  }
  return substr;
}

function leftTrim(string) {
  var index = 0;
  while (string[index] === " ") {
    index += 1;
  }
  return substringFrom(string, index);
}

function reverse(string) {
  var reversed = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

function trim(string) {
  return leftTrim(reverse(leftTrim(reverse(string))));
}

// console.log(trim(" ben ")); // ben

// split a string at a delimiter in the sense of logging the split "components"

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    return console.log("ERROR: No delimiter");
  }

  var substring = "";

  for (var i = 0; i < string.length; i++) {
    if (delimiter === "") {
      console.log(string[i]);
    } else if (string[i] === delimiter) {
      console.log(substring);
      substring = '';
    } else {
      substring += string[i];
    }
  }

  if (substring !== "") {
    console.log(substring);
  }
}

// splitString('abc,123,hello world', ',');
// // abc
// // 123
// // hello world
//
// splitString('hello', '');
// // h
// // ...
// // o
//
// splitString('hello');
// // ERROR: no delimiter
//
// splitString('hello', ';');
// // hello
//
// splitString(';hello;', ';');
// //
// // hello


// repeating strings

// Implement a function that takes a string and a number `times` as arguments.

// - The function should return the string repeated `times` number of times.
// - If `times` is not a number, return undefined.
// - If it is a negative number, return undefined also.
// - If times is 0, return an empty string.
// - You may ignore the possibility that times is a number but not an integer.


function repeat(string, times) {
  var repeated;
  var i;

  if (times < 0 || !(Number(times) === Number)) {
    return undefined;
  }

  repeated = '';
  for (i = 1; i <= times; i++) {
    repeated += string;
  }
  return repeated;
}

// console.log(repeat('abc', 'a'));

// Implement a function that determines whether a string begins with another string. If it does, the function should return true, or false otherwise.

function substring(string, length, index) {
  var substring = "";

  for (var i = index; i < (index + length); i ++) {
    if (!string[i]) { break; }
    substring += string[i];
  }

  return substring;
}


function startsWith(string, searchString) {
  if (substring(string, searchString.length, 0) === searchString) {
    return true;
  }
  return false;
}

// console.log(startsWith('benjamin', 'ben'));

// var str = 'We put comprehension and mastery above all else';
// console.log(startsWith(str, 'We'));              // true
// console.log(startsWith(str, 'We put'));          // true
// console.log(startsWith(str, ''));                // true
// console.log(startsWith(str, 'put'));             // false

// convert a string to lower case


function convertCharToLower(char) {
  var CONVERSION_OFFSET = 32;
  return String.fromCharCode(char.charCodeAt(0) + CONVERSION_OFFSET);
}

function toLowerCase(string) {
  var lowerCaseString;
  var currentChar;
  var i;

  lowerCaseString = '';

  for (i = 0; i < string.length; i++) {
    currentChar = string[i];

    if (currentChar.charCodeAt(0) >= 65 && currentChar.charCodeAt(0) <= 90) {
      lowerCaseString += convertCharToLower(currentChar)
    } else {
      lowerCaseString += currentChar;
    }
  }

  return lowerCaseString;
}


// console.log(toLowerCase('ALPHABET'));


// function substr(string, start, length)
// return the substring of `string` that begins at index `start` and has length `length`
// if given `start` is negative, use it as offset from the right.

function substr(string, start, length) {
  var substring;
  var index;

  substring = "";
  index = (start < 0 ? string.length + start : start);

  for (var i = index; i < (index + length); i ++) {
    if (!string[i]) { break; }
    substring += string[i];
  }

  return substring;
}

// var string = 'hello world';
// console.log(substr(string, 2, 4));      // "llo "
// console.log(substr(string, -3, 2));     // "rl"
// console.log(substr(string, 8, 20));     // "rld"
// console.log(substr(string, 0, -20));    // ""
// console.log(substr(string, 0, 0));      // ""


// now we are given a string, a `start` and an `end` index, and a number of rules

// two missing rules:
// -- If either start or end is less than 0 or NaN, treat it as 0.
// -- If either start or end is greater than the length of the string, treat it as equal to the string length.

function substring(string, start, end) {
  var substr;
  var startIndex;
  var endIndex;
  var i;

  substr = '';

  if (start > end) {
    startIndex = end;
    endIndex = start;
  } else {
    startIndex = start;
    endIndex = end;
  }

  if (endIndex === undefined) {
    endIndex = string.length;
  }

  if (startIndex < 0 || isNaN(startIndex)) {
    startIndex = 0;
  }

  if (endIndex < 0 || isNaN(endIndex)) {
    endIndex = 0;
  }

  for (var i = startIndex; i < endIndex && i < string.length; i++) {
    substr += string[i];
  }

  return substr;
}

var string = 'hello world';
console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 2)); // "llo world"
console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
