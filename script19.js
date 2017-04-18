
function binaryAgent(str) {
  // split the binary string into an array
  arr = str.split(' ');
  newArr=[];
  // loop thorugh the array
  for(var i=0; i<arr.length; i++){
    // parseInt converts the binary into a number, then fromCharCode converts the number into a letter,
    // that new letter is going to be pushed into the new array
    newArr.push(String.fromCharCode(parseInt(arr[i],2)));
  }





  // we are going to join together the new array to get back a string 
  return newArr.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
