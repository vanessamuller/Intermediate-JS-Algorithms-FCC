// Roman Numeral Converter
function convertToRoman(num) {

 var romanized = "";

 var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
 var numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];

// go through the numbers array
  for(i=0; i<numbers.length; i++){
    // if our number is greater than the greatest number is the numbers array
    while(num>=numbers[i]){
      // add the equivalent romanNumeral of the greatest number of the numbers array to our romanized array
      romanized += romanNumeral[i];
      // subtract the greatest number of our numbers array from our number and go thorugh the loop again
      num -= numbers[i];
    }
  }

 return romanized;
}

convertToRoman(36);
