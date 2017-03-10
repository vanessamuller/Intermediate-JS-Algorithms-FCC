// DNA Pairing
function pairElement(str) {
  var arr = str.split("");

switch(pair){
  case "C":
    arr.push(["C", "G"]);
    break;
  case "G":
    arr.push(["G","C"]);
    break;
  case "A":
    arr.push(["A", "T"]);
    break;
  case "T":
    arr.push(["T","A"]);
    break;
}
  return str;
}

pairElement("GCG");
