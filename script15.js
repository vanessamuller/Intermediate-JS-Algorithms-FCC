
//noprotect
function smallestCommons(arr) {
  // create an array to store the range of values
  var range = [];
  // find the start point which is the minimum value of the array
  var start = Math.min(arr[0], arr[1]);
  // find the end point which is the maximum value of the array
  var end = Math.max(arr[0], arr[1]);
  // populate the range array
  for(var i=start; i<=end; i++){
    range.push(i);
  }

  // create a variable to store the lowest commom multiple and set it to true
  var lcm =0, flag= true;

  // while the variable is true keep looping
  while(flag){
    // increment the lcm at each loop
    lcm++;
    // got through each item in the range
  for (var j=start; j<=end; j++ ){
    // if there is a remainder when dividing the current lcm by each value in the range
    if(lcm%j!==0){
      // break the loop and go to the next lcm number
      break;
    }
    // if there is no remainder and j is equal to the last number in the range
    else if(j===end){
      // set the flag equal to false to let the computer know the lcm is the current value of j
      flag=false;
    }
  }

  }
  return lcm;
}


smallestCommons([1,5]);
