
function truthCheck(collection, pre) {
  // Is everyone being true?
  // use the every method to check the condition in each item of the array
  // the every method takes a function and the funciton a parameter
  return collection.every(function(obj){
    // the test to check in the function
    return obj[pre];
  });
}



truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
