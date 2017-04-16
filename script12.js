
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

  str = str.replace(/[ _]/g,"-");

  return str;
}

spinalCase('This Is Spinal Tap');
