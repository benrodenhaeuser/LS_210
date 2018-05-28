function objectHasProperty(object, property) {
  return object[property] !== undefined;
}

// or is this too simplistic?

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

function incrementProperty(object, property) {
  if (objectHasProperty(object, property)) {
    object[property] += 1;
  } else {
    object[property] = 1;
  }
  return object[property];
}

var wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
// console.log(wins);                  // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
// console.log(wins);                  // { steve: 3, susie: 5, lucy: 1 }

// Write a function named copyProperties that takes two Objects as arguments. The function should copy all properties from the first object to the second. The function should return the number of properties copied.

function copyProperties(obj1, obj2) {
  var count = 0;

  for (var prop in obj1) {
    obj2[prop] = obj1[prop]; // cannot use dot notation ... why?
    count += 1;
  }
  return count;
}


var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);

// Write a function named wordCount that takes a single String as an argument.
// - The function should return an Object that contains the counts of each word that appears in the provided String.
// - In the returned Object, you should use the words as keys, and the counts as values.

function wordCount(string) {
  var counts = {};
  words = string.split(" ");
  for (var i = 0; i < words.length; i++) {
    if (objectHasProperty(counts, words[i])) {
      counts[words[i]] += 1;
    } else {
      counts[words[i]] = 1;
    }
  }
  return counts;
}

// console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }

// write a function that converts radians in degress

function convertToDegrees(radians) {
  return radians * 180 / Math.PI;
}

// log the absolute value of a variable.

var value = -180;
// console.log(Math.abs(180));

// find the square root of 16777216

sqrt = Math.sqrt(16777216);
// console.log(sqrt);

// compute and log the value of 16 to the 6th power
// i.e., 16 * 16* 16* 16* 16* 16

// Math.Pow takes a base and an exponent argument

// console.log(Math.pow(16, 6));

// round the values to 50 using appropriate Math functions

var a = 50.72;
var b = 49.2;
var c = 49.86;

a = Math.floor(a);
b = Math.ceil(a);
c = Math.round(a);

// console.log(a);
// console.log(b);
// console.log(c);


// Math.random returns a random floating-point number between 0 and 1, excluding the exact value of 1.
// This isn't helpful on its own, since you usually want a random integer between two other integer values.
// Create a function that takes two arguments, a minimum and a maximum value, and returns a random integer between those numbers (including both of the numbers).
// Your solution should handle the scenario that the user inadvertently swaps the positions of the min and max values or the scenario that the min and max values are equal.
// You may assume that the user always provides the min and max values.

function randomBetween(min, max) {
  if (min === max) { return min; }
  if (min > max) {
    var tmp = min;
    min = max;
    max = tmp;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

// if min and max are possibly floating points, we could turn them into integers first with floor/ceil.


// JS Fundamentals — Array 01

// var myArray = [1, 2, 3, 4];
// var myOtherArray = myArray;

// At this point of the program, both the variable myArray and the variable
// myOtherArray reference the same object, an array with values [1, 2, 3, 4].

// myArray.pop();

// The pop operation is destructive, that is, it mutates the array object on which it is called, removing the last element. Since, as we have observed above, myArray and myOtherArray both point to the same array object, both variables now reference the mutated array [1, 2, 3].
// Hence:

// console.log(myOtherArray); // [1, 2, 3]

// myArray = [1, 2];

// myArray has now been reassigned to point to another object, the array [1, 2]. This does not, however, affect the value of myOtherArray, which still points to the array [1, 2, 3]. Hence:

// console.log(myOtherArray); // [1, 2, 3]

// LS description:

// The value logged for myOtherArray at line 5 is the same value (i.e., the same array object) as the value of myArray. **This is because the value stored in the variable myArray is a reference to the location of the value and not the value itself.** Therefore, when the program pops a value from myArray, myOtherArray mirrors the change.

// For line 8, the value of myOtherArray did not change because the value of the reference stored in myArray on line 7 is now a different array object. Performing a reassignment operation changes the value stored to a reference of a value in a different location. As a result of line 7, myArray and myOtherArray now have different (reference) values stored, so any future mutations of myArray will no longer affect myOtherArray and vice versa.

// Now let's implement an operation that copies the values, but not the reference.

// OPTION 1.

var myArray = [1, 2, 3, 4];
var myOtherArray = [];

for (var i = 0; i <= 3; i++) {
  myOtherArray[i] = myArray[i];
}

myArray.pop();
// console.log(myOtherArray); // [1, 2, 3, 4]

// OPTION 2.

var myArray = [1, 2, 3, 4];
var myOtherArray = myArray.slice();

myArray.pop();
// console.log(myOtherArray); // [1, 2, 3, 4]


// concat

// -- The first argument will always be an array.
// -- The second argument can be either an array or another value.
// -- The function should return a new array.
// -- The elements in the new array should be in the same order as they appear
//    in the arguments.
// -- The function should copy any object references from the arguments into
//    the new array — i.e., if you make a change to a reference object from one
//    of the arguments after calling concat, those changes should show up in
//    the output array as well.
// -- The function should copy the values of primitives (e.g., strings,
//    numbers, and booleans).

function concatTwo(array, value) {
  var concatenated = [];
  var i;

  for (i = 0; i < array.length; i++) {
    concatenated.push(array[i]);
  }

  if (Array.isArray(value)) {
    for (i = 0; i < value.length; i++) {
      concatenated.push(value[i]);
    }
  } else {
    concatenated.push(value);
  }

  return concatenated;
}

// The concat function from the previous exercise could only concatenate a maximum of two arrays. For this exercise, you are going to extend that functionality. Refactor the concat function to allow for the concatenation of two or more arrays or values.

// javascript function with undetermined number of arguments?
// -> arguments parameter

function concat(array, value) {
  var concatenated = concatTwo(array, value);

  for (var i = 2; i < arguments.length; i++) {
   concatenated = concatTwo(concatenated, arguments[2]);
  }

  return concatenated;
}

// concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
// concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]

// let's move everything in a single function.

function concat() {
  var concatenated = [];
  var i;
  var j;
  var currentValue;

  for (i = 0; i < arguments.length; i++) {
    currentValue = arguments[i];

    if (Array.isArray(currentValue)) {
      for (j = 0; j < currentValue.length; j++) {
        concatenated.push(currentValue[j]);
      }
    } else {
      concatenated.push(currentValue);
    }
  }

  return concatenated;
}

// console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
// console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]


// implement pop and push, i.e., write functions pop(array) and push(array)

// -- The pop method removes the last element from an array and returns that
//    element.
// -- If pop is called on an empty array, it returns undefined.
// -- The push method, on the other hand, adds one or more elements to the end
//    of an array and returns the new length of the array.

function pop(array) {
  if (array.length === 0) { return undefined; }

  var length = array.length;
  var last = array[length - 1];
  array.length -= 1;
  return last;
}

// var array = [0, 1, 2];
// console.log(pop(array));
// console.log(array);
//
// var array = [];
// console.log(pop(array));
// console.log(array);
//
// var array = [1, 2, 3];
// pop(array);                        // 3
// console.log(array);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

function push(array) {
  for (var i = 1; i < arguments.length; i++) {
    array[array.length] = arguments[i];
  }
  return array.length;
}

// var array = [1, 2, 3];
// push(array, 4, 5, 6);              // 6
// console.log(array);                // [1, 2, 3, 4, 5, 6]
// console.log(push([1, 2], ['a', 'b']));          // 3
// console.log(push([], 1));                       // 1
// console.log(push([]));                          // 0


// reverse a string or an array, non-destructively

// idea: if it is a string, split and combine in the end.

function reverse(sequence) {
  var reversed_array = [];
  var array;

  if (typeof sequence === 'string') {
    array = sequence.split('');
  } else {
    array = sequence;
  }

  for (var i = array.length - 1; i >= 0; i--) {
    reversed_array.push(array[i]);
  }

  if (typeof sequence === 'string') {
    return reversed_array.join('');
  } else {
    return reversed_array;
  }
}

// console.log(reverse('Hello'));           // "olleH"
// console.log(reverse('a'));               // "a"
// console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
// console.log(reverse([]));                // []
//
// var array = [1, 2, 3];
// console.log(reverse(array));             // [3, 2, 1]
// console.log(array);                      // [1, 2, 3]

// implement shift and unshift

function shift(array) {
  if (array.length === 0) { return undefined; }

  var first = array[0];

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.length -= 1;

  return first;
}

function unshift(array) {
  // make room for the new values
  for (var i = (array.length - 1) + (arguments.length - 1); i >= 0; i--) {
    array[i] = array[i - (arguments.length - 1)];
  }

  // insert the new values
  for (var i = 0; i < arguments.length - 1; i++) {
    array[i] = arguments[i + 1];
  }

  return array.length;
}

// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]
//
// var array = [1, 2, 3];
// console.log(unshift(array, 5, 6));        // 5
// console.log(array);
// console.log(unshift([1, 2, 3]));              // 3
// console.log(unshift([4, 5], [1, 2, 3]));      // 3
//
// var testArray = [1, 2, 3];
// console.log(shift(testArray));                // 1
// console.log(testArray);                       // [2, 3]
// console.log(unshift(testArray, 5));           // 3
// console.log(testArray);                       // [5, 2, 3]

// LS solution:

function shift(array) {
  var result;

  if (array.length !== 0) {
    result = array.splice(0, 1).pop();
  }

  return result;
}

function unshift(array) {
  var i;
  for (i = 1; i < arguments.length; i += 1) {
    array.splice(i - 1, 0, arguments[i]);
  }

  return array.length;
}


// implement slice and splice

// The slice function takes three arguments: an array, and two integers representing a begin and an end index.

// The function returns a new array containing the extracted elements starting from begin up to but not including end.

// The values of begin and end will always be integers greater than or equal to 0.

// If the value of begin or end is greater than the length of the array, set it to equal the length.

function slice(array, begin, end) {
  var theSlice = [];

  if (begin > array.length) { begin = array.length; }
  if (end > array.length) { end = array.length; }

  for (var i = begin; i < end; i++) {
    theSlice.push(array[i]);
  }

  return theSlice;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]
//
// var arr = [1, 2, 3];
// console.log(slice(arr, 1, 3));                     // [2, 3]
// console.log(arr);                                  // [1, 2, 3]

// SPLICE

// -- The splice function changes the contents of an array by deleting existing
//    elements and/or adding new elements.
//
// -- The function takes the following arguments: an array, a start index, a
//    deleteCount, and zero or more elements to be added.
//
// -- The function removes deleteCount number of elements from the array,
//    beginning at the start index.
//
// -- If any optional element arguments are provided, splice inserts them into
//    the array beginning at the start index.
//
// -- The function returns a new array containing the deleted elements, or an
//    empty array if no elements are deleted.
//
// -- The values of start and deleteCount will always be integers greater than
//    or equal to 0.
//
// -- If the value of start is greater than the length of the array, set it to
//    equal the length.
//
// -- If the value of deleteCount is greater than the number of elements from
//    start up to the end of the array, set deleteCount to the difference
//    between the array's length and start.
//
// -- Takes optional arguments for elements to add to the array; denoted by the
//    parameters element1 up to elementN. If no elements to add are provided,
//    splice only removes elements from the array.

function remove(array, start, deleteCount) {
  var removed = [];

  for (var i = start; i < array.length; i++) {
    if (i < start + deleteCount) { removed.push(array[i]); }
    array[i] = array[i + deleteCount];
  }

  array.length -= deleteCount;
  return removed;
}

function insert(array, index, toInsert) {
  for (var i = array.length + toInsert.length - 1; i >= index; i--) {
    array[i] = array[i - toInsert.length];
  }

  for (var i = index; i < index + toInsert.length; i++) {
    array[i] = toInsert[i - index];
  }
}

function splice(array, start, count) {
  var toInsert;
  var removed;

  if (start > array.length) { start = array.length; }
  if (count > array.length - start) { count = array.length - start; }

  var args = Array.prototype.slice.call(arguments);
  toInsert = args.slice(3);
  removed = remove(array, start, count);

  if (toInsert.length > 0) { insert(array, start, toInsert); }

  return removed;
}

// var array = [1, 2, 3];
// console.log(splice(array, 1, 2)); // [2, 3]
// console.log(array); // [1]
//
// var array = [1, 2, 3];
// console.log(splice(array, 1, 3)); // [2, 3]
// console.log(array); // [1]
//
// var array = [1, 2, 3];
// console.log(splice(array, 1, 0)); // []
// console.log(array); // [1, 2, 3]
//
// var array = [1, 2, 3];
// console.log(splice(array, 0, 1)); // [1]
// console.log(array); // [2, 3]
//
// var array = [1, 2, 3];
// console.log(splice(array, 1, 0, 'a'));  // []
// console.log(array); // [1, 'a', 2, 3]
//
// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 1, 'two'));             // [2]
// console.log(arr);                                  // [1, "two", 3]
//
// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
// console.log(arr);                                  // [1, "two", "three"]
//
// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 0));                    // []
// console.log(splice(arr, 1, 0, 'a'));               // []
// console.log(arr);                                  // [1, "a", 2, 3]
//
// var arr = [1, 2, 3];
// console.log(splice(arr, 0, 0, 'a'));               // []
// console.log(arr);                                  // ["a", 1, 2, 3]


var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

// { prop1: '123', prop2: '456', 'prop 3': '345', '456': '678' }

// console.log(myObject);
// console.log(myObject[prop2]); // '678'
// console.log(myObject.prop2); // '456'

var myOtherObject = {
  123: 'some value'
}

// console.log(myOtherObject['123']); // 'some value'


//

var myArray = ['a', 'b', 'c'];

// console.log(myArray[0]); // 'a'
// console.log(myArray[-1]); // undefined

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

// console.log(myArray[-1]); // 'd'
// console.log(myArray['e']); // 5
// console.log(myArray); // ['a', 'b', 'c', 'f', -1: 'd', e: 5]

//

var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function sum(array) {
  var theSum = 0;
  for (var i = 0; i < array.length; i++) {
    theSum += array[i];
  }
  return theSum;
}

function average(array) {
  var summands = [];
  var i;

  for (i = -2; i < array.length; i += 1) {
    summands.push(array[i]);
  }

  return sum(summands) / summands.length;
}

// console.log(average(myArray));

// penultimate

function penultimate(string) {
  // var asArray = string.split(' ');
  // return asArray[asArray.length - 2];
  return string.split(' ').slice(-2, -1)[0];
}

// console.log(penultimate('what a treat'));                    // expected: "last"
// console.log(penultimate('Launch School is great!'));      // expected: "is"

// -2 does not access the second-to-last element of the array.
// rather, it accesses the array property '-2'

// the solution will return 'undefined' if the string has less than two words.

(false && undefined); // false
(false || undefined); // undefined
((false && undefined) || (false || undefined)); // undefined
((false || undefined) || (false && undefined)); // false
((false && undefined) && (false || undefined)); // false
((false || undefined) && (false && undefined)); // undefined
('a' || (false && undefined) || ''); // 'a'
((false && undefined) || 'a' || ''); // 'a'
('a' && (false || undefined) && ''); // undefined
((false || undefined) && 'a' && ''); // undefined

// want to log multiples of 3

// var i = 0;
// while (i < 10) {
//   if (i % 3 === 0) {
//     console.log(i);
//   } else {
//     i += 1;
//   }
// }

// however, what happens is: we log 00000000 ... ad infinitum

// want to log a multiplication table

var row;
var i;
var j;

function padLeft(number) {
  var stringNumber = String(number);

  switch (stringNumber.length) {
    case 1:
      return '  ' + stringNumber;
    case 2:
      return ' ' + stringNumber;
    default:
      return stringNumber;
  }
}

// for (i = 1; i <= 10; i += 1) {
//   row = '';
//   for (j = 1; j <= 10; j += 1) {
//     row += padLeft(i * j) + ' ';
//   }
//
  // console.log(row + '\n');
// }

// extract cols

function getSelectedColumns(numbers, cols) {
  var result = [];

  for (let i = 0, length = numbers.length; i < length; i += 1) {
    for (let j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// the two for loops do not have separate scopes. so once we enter the second loop, length references the number of columns.
// after hoisting, we actually only have one declaration of the length variable!

// solution 1: change the variable name for second length.
// solution 2: in es6, use let for scoping to the block.

// given the following arrays of number arrays
var array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

// console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
// console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
// console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 4]]; expected: [[2, 2, 2], [3, 3, 3]]


// what will the following snippets log?

// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + String(counter * rate));
//
// function counter(count) {
//   // ...
// }
//
// // after hoisting:
//
// function counter(count) {
//   // ...
// }
//
// var counter;
// var rate;
//
// counter = 5;
// rate = 3;
// console.log('The total value is ' + String(counter * rate));

// logs 15

//

// function counter(count) {
//   // ...
// }
//
// console.log('The total value is ' + String(counter * rate));
//
// var counter = 5;
// var rate = 3;

// after hoisting:

// function counter(count) {
//   // ...
// }
//
// var counter;
// var rate;
//
//
// console.log('The total value is ' + String(counter * rate));

// undefined * undefined ==> NaN
// String(NaN) ==> 'NaN'

// counter = 5;
// rate = 3;

// logs NaN

// Snippet 1 logs "total value is 15"
// Snippe 2 logs "total value is NaN"

// function counter(count) {
//   // ...
// }

// var counter = 5;
// var rate = 3;

// console.log('The total value is ' + String(counter * rate));

// Snippet 3 logs "total value is 15"

function invoiceTotal() {
  var total = 0;

  for (i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

// convert a string to a number

// examples:

stringToInteger('4321');      // 4321
stringToInteger('570');       // 570

function convertDigit(string) {
  var digits = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
  }

  return digits[string];
}

function stringToInteger(string) {
  var digits = string.split('');
  var length = digits.length;
  var number = 0;

  for (var i = 0; i < length; i++) {
    number += convertDigit(digits[i]) * Math.pow(10, (length - (i + 1)));
  }

  return number;
}

// function stringToSignedInteger(string) {
//   var sign;
//   if (string[0] === '-' || string[0] === '+') {
//     sign = string[0];
//   } else {
//     sign = '+';
//   }
//
//   var unsignedNumber = stringToInteger(string.slice(1));
//
//   var number;
//   if (sign === '-') {
//     number = unsignedNumber * -1;
//   } else {
//     number = unsignedNumber;
//   }
//   console.log(number);
// }

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100


function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-':
      return -stringToInteger(string.slice(1));
    case '+':
      return stringToInteger(string.slice(1));
    default:
      return stringToInteger(string);
  }
}
