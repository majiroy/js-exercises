// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the item removed
// - remove the item at the specified index

function remove(arr, index) {
  var newArr = arr.slice(0, index - 1);
  var newArr2 = arr.slice(index);
  var newArr3 = newArr.concat(newArr2);
  console.log(newArr3);
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 3);
var newNames = remove(names, 1);
console.log(newNumbers);
console.log(newNames);
/* 
  EXPECTED RESULT
  ---------------
  [1, 2]
  [Irina, Mozafar]
*/
