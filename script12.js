
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  // find any instance in which a lower case letter is next to an uppercase letter
  // find all the instances ith the g letter
  // save the first instance($1) separated by a space and the second instance ($2)
  // you can put anything between the $1 and $2 and that's what goes between the words
  // convert thenew string to lower case
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  // now find the empty spaces and underscores and replace any instance with a dash
  str = str.replace(/[ _]/g,"-");

  return str;
}

spinalCase('This Is Spinal Tap');
