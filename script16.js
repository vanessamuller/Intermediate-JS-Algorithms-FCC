
function findElement(arr, func) {
  // filter the array to go through the function and return an array of all the elements that pass
  var filtered = arr.filter(func);
  // return the first element that passed the function
  return filtered[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
