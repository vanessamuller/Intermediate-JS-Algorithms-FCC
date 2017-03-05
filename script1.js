// Sum All Numbers in a Range

function sumAll(arr) {
  // Find the largest value in the array
  var max =Math.max.apply(null, arr);
  // Find the smallest number in the array
  var min = Math.min.apply(null,arr);
  var nums = [];
  // create an array with all the numbers from the minimum to the max
  for(var i=min; i<=max; i++){
    nums.push(i);
  }

  var sum;
  // sum all numbers in the array and add them to the sum variable
  nums.reduce(
    function (
      accumulator,
      currentValue,
      currentIndex,
      array
    ) {
      sum = accumulator + currentValue;
      return sum;
    }
  );
  return sum;
}


sumAll([1, 4]);
