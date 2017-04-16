
function sumFibs(num) {
  var previousNum = 0;
  var currentNum = 1;
  var total =0;

  while(currentNum<=num){
    if(currentNum%2 !==0){
      total +=currentNum;
    }

    currentNum = currentNum+previousNum;
    previousNum = currentNum - previousNum;
  }




  return total;
}

sumFibs(4);
