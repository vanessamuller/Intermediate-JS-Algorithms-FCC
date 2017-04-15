// Sorted Union
function uniteUnique(arr) {
  // Create an empty array to store all the unique values
  var array = [];
  // Loop through the arguments passed
  for (var i=0; i<arguments.length; i++){
    // create a variable to loop thgourhg each array argument
    var args = arguments[i];
    // loop through each array argument
    for (var j =0; j<args.length; j++){
      // if the index of the current item is less than o, it means that the item
      // is not in the current array, if is it not
      if (array.indexOf(args[j])<0){
        // push it into the final array
       array.push(args[j]);
      }

    }
  }
  return array;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
