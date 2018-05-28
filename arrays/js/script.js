// arrays

// write a function that returns the last element of an array

function lastElement(array) {
  return array[array.length - 1];
}

// console.log(lastElement([1, 2, 3]));

// write a function rollCall that logs the names in an array one by one

function rollCall(listOfNames) {
  for (var i = 0; i < listOfNames.length; i++) {
    console.log(listOfNames[i]);
  }
}

// rollCall(['Ben', 'Julia', 'Lotte']);

// write a function that reverses an array

function reverse(array) {
  var reversed = [];

  for (var i = array.length - 1; i >= 0; i--) {
    reversed += array[i];
  }

  return reversed;
}

// console.log(reverse(['Ben', 'Julia', 'Lotte']));

// write a function that returns the first index of a given value in an array

function firstIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

// console.log(firstIndex(['Ben', 'Julia', 'Lotte'], 'Lotte'));

// alternatively:

function firstIndex(array, value) {
  var index = -1;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
      break;
    }
  }
  return index;
}

// console.log(firstIndex(['Ben', 'Julia', 'Lotte'], 'Lotte'));

// write a function that collapses a given array to a string value.

function stringify(array) {
  var string;
  var i;

  string = '';

  for (i = 0; i < array.length; i++) {
    string += String(array[i]);
  }

  return string;
}

// console.log(stringify(['ju', 'lo', 'be']));

// implement the push operation

function push(array, elem) {
  array[array.length] = elem;
  return array.length;
}

// var array = [0, 1, 2];
// var elem = 3;
// console.log(push(array, elem));
// console.log(array);

// implement the pop operation

function pop(array) {
  var last = array[array.length - 1];
  array.length -= 1;
  return last;
}

// var array = [0, 1, 2];
// console.log(pop(array));

// implement the unshift operation that inserts an elem at the beginning of the array.

function unshift(array, elem) {
  for (var i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = elem;
  return array.length;
}

// var array = [0, 1, 2];
// console.log(unshift(array, -1));
// console.log(array);

// implement the shift operation that removes the 0-indexed element from an array

function shift(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array.length -= 1;
  return array;
}

// var array = [1, 2, 3];
// console.log(shift(array));

// write a function indexOf. It takes an array and a value. It returns the first index i such that array[i] === value. It returns -1 if the value is not to be found in the array.

function indexOf(array, elem) {
  var index = -1;
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i] === elem) {
      index = i;
      break;
    }
  }
  return index;
}

// var array = [0, 1, 2, 3];
// console.log(indexOf(array, 2));

// write a function lastIndexOf.

function indexOf(array, elem) {
  var index = -1;
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i] === elem) {
      index = i;
    }
  }
  return index;
}

// var array = [0, 1, 2, 3, 2];
// console.log(indexOf(array, 2));

// alternative: start from the end.

function indexOf(array, elem) {
  var index = -1;
  var i;
  for (i = array.length - 1; i >= 0; i--) {
    if (array[i] === elem) {
      index = i;
      break;
    }
  }
  return index;
}

// var array = [0, 1, 2, 3, 2];
// console.log(indexOf(array, 2));

// implement a slice operation.
// params: array, start, end
// return new array containing elems between (including) start and (not including) end

function slice(array, start, end) {
  var sliced = [];
  var i;

  for (var i = start; i < end && i < array.length; i++) {
    sliced[sliced.length] = array[i];
  }

  return sliced;
}

// var array = [0, 1, 2, 3, 2];
// console.log(slice(array, 1, 3));
//
// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]
//
// var array = [0, 1, 2];
// console.log(array.slice(0, 10)); // [0, 1, 2]

function slice(array, begin, end) {
  var newArray = [];
  var i;
  for (i = begin; i < end && i < array.length; i += 1) {
    push(newArray, array[i]);
  }

  return newArray;
}

// var array = [0, 1, 2];
// console.log(slice(array, 0, 10));

// implement splice(array, index, count)
// remove `count` elems starting from `index` from `array`

function splice(array, index, count) {
  if (index >= array.length) { return; }

  var spliced = slice(array, index, index + count);

  for (i = index; i + count < array.length; i++) {
    array[i] = array[i + count];
  }

  array.length -= spliced.length;

  return spliced;
}

// var array = ['a', 'b', 'c', 'd'];
// console.log(splice(array, 1, 2)); // ['b', 'c'] -- fine
// console.log(array); // ['a', 'd'] -- fine
//
// var array = ['a', 'b', 'c', 'd'];
// console.log(splice(array, 1, 4)); // ['b', 'c', 'd'] -- fine
// console.log(array); // ['a'] -- fine
//
// var array = ['a', 'b', 'c', 'd'];
// console.log(splice(array, 0, 0)); // [] -- fine
// console.log(array); // ["a", "b", "c", "d"] -- fine

// concat (glue two given arrays together in a new array)
function concat(array1, array2) {
  var concatenated = [];

  for (var i = 0; i < array1.length; i++) {
    concatenated[concatenated.length] = array1[i];
  }

  for (var i = 0; i < array2.length; i++) {
    concatenated[concatenated.length] = array2[i];
  }

  return concatenated;
}

// join (combine array elems to string inserting separator)
function join(array, separator) {
  var joined = String(array[0]) || '';
  var i;

  for (i = 1; i < array.length; i++) {
    joined += separator;
    joined += String(array[i]);
  }

  return joined;
}

// console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
// console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
// console.log(join([], '')); // ''
// console.log(join(['whatever'], '')); // 'whatever'

// arraysEqual

function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) { return false};

  var i;
  var length = array1.length;

  for (i = 0; i < length; i++) {
    if (array1[i] !== array2[i]) { return false; }
  }

  return true;
}

// console.log(arraysEqual([1], [1]));                               // true
// console.log(arraysEqual([1], [2]));                               // false
// console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
// console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false

// Write a function that returns the first element of an array passed in as an argument.

function firstElementOf(array) {
  return array[0];
}

// console.log(firstElementOf(['U', 'S', 'A']));  // returns "U"

// Write a function that returns the last element of an array passed in as an argument.

function lastElementOf(array) {
  return array[array.length - 1];
}

// console.log(lastElementOf(['U', 'S', 'A']));  // returns "A"

// Write a function that accepts two arguments, an array and an integer index position, and returns the element at the given index. What happens if the index is greater than the length of the array? (undefined) What happens if it is a negative integer? (count backwards from the end, -1 is the last element)

function nthElementOf(arr, index) {
  var i;

  if (index < 0) {
    i = arr.length + index;
  } else {
    i = index;
  }

  return arr[i];
}

var digits = [4, 8, 15, 16, 23, 42];

// console.log(nthElementOf(digits, 3));   // 16
// console.log(nthElementOf(digits, 8));   // undefined
// console.log(nthElementOf(digits, -1));  // 42

// Write a function that accepts an array as the first argument and an integer value, count, as the second. It should return a new array that contains the first count elements of the array.

function firstNOf(arr, count) {
  var i;
  var prefix = [];

  for (i = 0; i < arr.length && i < count; i++) {
    prefix[prefix.length] = arr[i];
  }

  return prefix;
}

var digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

// similar to above, but return last N elements.

function lastNOf(arr, count) {
  if (count > arr.length) { count = arr.length };

  return arr.slice(arr.length - count);
}

var digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 9));

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

// console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]

// oddElementsOf() should return the elements at odd indices

function oddElementsOf(arr) {
  var oddArray = [];

  for (var i = 1; i < arr.length; i += 2) {
    oddArray.push(arr[i]);
  }

  return oddArray;
}

var digits = [4, 8, 15, 16, 23, 42];

// console.log(oddElementsOf(digits));    // returns [8, 16, 42]

// Write a function that takes two arrays and returns a new array whose even positions come from the first array, and whose odd positions come from the second array. Assume that both arrays have equal length.

function combinedArray(ary1, ary2) {
  var combined = [];
  var i;

  for (i = 0; i < ary1.length; i++) {
      combined.push(ary1[i]);
      combined.push(ary2[i]);
  }

  return combined;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

// console.log(combinedArray(digits, letters));  // logs [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]

// Write a function that takes an array argument and returns a new array that contains all the argument's elements in their original order followed by all the argument's elements in reverse order.

// algorithm:
// concatenate a copy of ary with a reverse copy of ary

function reverseConcat(ary) {
  var reversed = [];
  var copy = [];
  var i;

  for (i = ary.length - 1; i >= 0; i--) {
    reversed.push(ary[i]);
  }

  for (i = 0; i < ary.length; i++) {
    copy.push(ary[i]);
  }

  return copy.concat(reversed);
}

var letters = ['B', 'E', 'N'];
// console.log(reverseConcat(letters));

// concise solution:

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

// concat is non-destructive.
// reverse is destructive, but slice makes a copy first.

var digits = [4, 8, 15, 16, 23, 42];
// mirroredArray(digits);  // returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]

// Use the array sort method to create a function that takes an array of numbers and returns a new array of the numbers sorted in descending order. Do not alter the original array.

function sortDescending(arr) {
  return arr.slice().sort(function(a, b) { return b - a; });
}

// the return value of the compare function determines the sort order:
// - if return value > 0, b will come first.
// - if return value < 0, a will come first.
// - else the order between a and b is as it was before the sort.
// this is like the spaceship operator in ruby

var array = [23, 4, 16, 42, 8, 15];
var result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// Write a function that takes an array of arrays as an argument, and returns a new array that contains the sums of each of the sub-arrays.

function sum(array) {
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

function matrixSums(ary) {
  var aryOfSums = [];

  for (var i = 0; i < ary.length; i++) {
    aryOfSums.push(sum(ary[i]));
  }

  return aryOfSums;
}

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

// Write a function that takes an array, and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  var unique = [];

  for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

// console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // logs [1, 2, 4, 3, 5]

// Write a function that takes a *sorted* array of integers as an argument, and returns an array that includes all the missing integers (in order) between the first and last elements of the argument.

function missing(ary) {
  var numbers = [];

  for (var i = ary[0] + 1; i < ary[ary.length - 1]; i++)
    if (ary.indexOf(i) === -1) {
      numbers.push(i);
    }

  return numbers;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
