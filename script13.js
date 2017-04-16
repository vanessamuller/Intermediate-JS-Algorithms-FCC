
function sumFibs(num) {
  // start setting the first number
  var previousNum = 0;
  // now set thr second number
  var currentNum = 1;
  // the total is the first number until you start adding currentNum
  var total =0;
  // while the current num os smaller or equal to num, we keep the addition
  while(currentNum<=num){
    // if the current number is odd
    if(currentNum%2 !==0){
      // add the current number to the total
      total +=currentNum;
    }
    // the newc urrent number is the sum of the current number plus the previous one
    currentNum = currentNum+previousNum;
    // the new previous number is the new current number minus the old previous number
    previousNum = currentNum - previousNum;
  }




  return total;
}

sumFibs(4);
