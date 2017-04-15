
function convertHTML(str) {
  // &colon;&rpar;

 // loop through each string character
  for (var i=0; i<str.length; i++){
    // use a switch statement to replace all the characater with the html entity
    switch(str[i]){
      case '&':
        str = str.replace("&", "&amp;");
        break;
      case '<':
        str = str.replace("<", "&lt;");
        break;
      case '>':
        str = str.replace(">", "&gt;");
        break;
      case'"':
        str = str.replace('"', "&quot;");
        break;
      case "'":
        str = str.replace("'", "&apos;");
        break;
    }
  }

  return str;
}

convertHTML("Dolce & Gabbana");
