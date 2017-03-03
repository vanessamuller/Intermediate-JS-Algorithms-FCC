
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

  for(var i=0; i<arr1.length;i++){
    if(arr2.indexOf(arr1[i])===-1){
      newArr.push(arr1[i]);
    }
  }




  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
