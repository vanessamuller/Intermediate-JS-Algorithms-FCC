function sumPrimes(num) {
  var primes = [];

  for(var i=2; i<=num; i++) {

    var isPrime = true;

    for (var j=2; j<i; j++){
        if(i%j===0) {
            isPrime = false;
            break;
        }
    }

      if(isPrime){ primes.push(i)};

  }


  var total = 0;
  for(var i=0; i<primes.length; i++){
    total +=primes[i];
  }
return total;
}

sumPrimes(10);
