// Missing Letters


function fearNotLetter(str) {

  // set a variable to undefined in case there are no missing letters
  var letter = undefined;
  // for loop to go theourgh heach letter in the str
  for(i =0; i<str.length; i++){
    // if the unicode character at the second postion minus the unicode character
    // at the first position is greate than one that means there is a letter missing
    if(str.charCodeAt(i+1)-str.charCodeAt(i)>1){
      // return the letter corresponding to the unicode character of the missing letter
      // which is the character at position i + 1
      letter = String.fromCharCode(str.charCodeAt(i)+1);
    }
  }
  return letter;
}

fearNotLetter("abce");
