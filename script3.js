
function convertToRoman(num) {

 var romanized = "";

 var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
 var numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];


  for(i=0; i<numbers.length; i++){
    while(num>=numbers[i]){
      romanized += romanNumeral[i];
      num -= numbers[i];
    }
  }

 return romanized;
}

convertToRoman(36);
