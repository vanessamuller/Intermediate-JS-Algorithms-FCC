//Search and Replace

function myReplace(str, before, after) {


  //check if the first letter of the before string is upper case
  if(before.charAt(0) === before.charAt(0).toUpperCase()){
    //if upper case, replace the before string with the after string, change the frst character to upper case nd add the rest of the string
    return str.replace(before, after.charAt(0).toUpperCase()+after.slice(1));
  }
  //if the first letter is lower case
  else{
    //replace the before string with the after string in lower case
    return str.replace(before,after.toLowerCase());
  }


}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
