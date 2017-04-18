
function steamrollArray(arr) {
  // I'm a steamroller, baby
  // create a variable to store the new array numbers in
  var flat = [];

  // loop thorugh each array variable
  for(var i=0; i<arr.length; i++){
    // if the item is an array, run the function again
    if(Array.isArray(arr[i])){
      // concatenate the results of the multiple times the function is ran to the flat srray
      flat = flat.concat(steamrollArray(arr[i]));
    }
    else{
      // if the item is not an array, push the item to the flat array
      flat.push(arr[i]);
    }
  }
  return flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
