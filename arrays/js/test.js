// implement splice(array, start, length)

// -> let's think about the case where count is 1 first.
// -> this is essentially a delete operation (at an index).
// -> we need to return the deleted element.

function deleteAtIndex(array, index) {
  if (index >= array.length) { return; }

  var deleted = array[index];

  for (var i = index; i < array.length - 1; i++) {
    array[index] = array[index + 1];
  }

  array.length -= 1;

  return deleted;
}

// now let's generalize to the case where we delete a number of elems.

// -> what if the length of the splice runs beyond the array? that's ok.

function splice(array, index, length) {
  if (index >= array.length) { return; }

  var spliced = 
}



var array = ['a', 'b', 'c'];
console.log(deleteAtIndex(array, 1));
console.log(array);
console.log(deleteAtIndex(array, 1));
console.log(array);
console.log(deleteAtIndex(array, 1));
console.log(array);

var array = ['a'];
console.log(deleteAtIndex(array, 1)); // undefined
console.log(array); // []
