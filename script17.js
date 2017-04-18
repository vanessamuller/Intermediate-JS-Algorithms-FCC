
function dropElements(arr, func) {
  // Drop them elements.
  // while the function is false on the arr[0]
  while(!func(arr[0])){
    // drop the first item in the array
    arr.shift();
  }
  // when the function is tru, the loop is over and you return the remaining array
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
