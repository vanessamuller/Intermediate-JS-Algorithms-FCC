
function addTogether(x,y) {

  // check if the type of the two arguments are numbers
  if(typeof x==='number'&& typeof y=="number"){
    // if they are, return the sum of the two
    return x+y;
  }

  // check if the number of arguments is 1 and the argument passed is a number
  else if(arguments.length==1 && typeof x ==='number'){
    // return a function that expects a second argument
    return function(z){
      // if the second argument is not a number
      if(typeof z!=='number'){
        // return undefined
        return undefined;
      }
      // if the second argument is a number, return the sum of the two numbers
      else{return x+z;}
    };
  }

  // check if both arguments are numbers and if they are not, return undefined
   else if(typeof x!=='number' || typeof y!=='number'){
    return undefined;
  }





}

addTogether((2),[3]);
