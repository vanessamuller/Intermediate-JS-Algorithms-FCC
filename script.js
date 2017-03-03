// Sum All Numbers in a Range

function sumAll(arr) {
  var max =Math.max.apply(null, arr);
  var min = Math.min.apply(null,arr);
  var nums = [];
  for(var i=min; i<=max; i++){
    nums.push(i);
  }

  var sum;
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
