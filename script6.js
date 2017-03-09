//Pig Latin

function translatePigLatin(str) {
  //check if the first letter is a vowel
  if(str.charAt(0)==="a"||str.charAt(0)==="e"||str.charAt(0)==="i"||str.charAt(0)==="o"||str.charAt(0)==="u"){
    //if it is, return the string and add "way to the end"
    return str+ "way";
  }
  else{
    var letter1 = str.charAt(0);
    var letter2 = str.charAt(1);
//check if the second letter is a vowel
 if(str.charAt(1)==="a"||str.charAt(1)==="e"||str.charAt(1)==="i"||str.charAt(1)==="o"||str.charAt(1)==="u"){
   //if it is, remove the first letter of the string, add it to the end and add "ay"
    return str.substring(1)+letter1+"ay";
  }
    //if not, remove the first two letters of the string, add them to the end and add "ay"
    return str.substring(2)+ letter1 +letter2+"ay";
  }

}

translatePigLatin("consonant");
