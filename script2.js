// Diff Two Arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

// go through our first array
  for(var i=0; i<arr1.length;i++){
    // if the elemnt in the n index on the first array is different from the elemtn in the n index of the second array
    if(arr2.indexOf(arr1[i])===-1){
      // add the different element to the newArr array
      newArr.push(arr1[i]);
    }
  }
  
// go through our second array
  for( var j=0; j<arr2.length; j++){
    // if the elemnt in the n index on the first array is different from the elemtn in the n index of the second array
    if(arr1.indexOf(arr2[j])===-1){
      // add the different element to the newArr array
      newArr.push(arr2[j]);
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
