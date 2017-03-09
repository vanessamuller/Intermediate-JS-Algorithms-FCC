//Pig Latin

function translatePigLatin(str) {
  if(str.charAt(0)==="a"||str.charAt(0)==="e"||str.charAt(0)==="i"||str.charAt(0)==="o"||str.charAt(0)==="u"){
    return str+ "way";
  }
  else{
    var letter1 = str.charAt(0);
    var letter2 = str.charAt(1);

 if(str.charAt(1)==="a"||str.charAt(1)==="e"||str.charAt(1)==="i"||str.charAt(1)==="o"||str.charAt(1)==="u"){
    return str.substring(1)+letter1+"ay";
  }

    return str.substring(2)+ letter1 +letter2+"ay";
  }

}

translatePigLatin("consonant");
