// DNA Pairing
function pairElement(str) {
  var arr=[];
  var arr2 = str.split("");

  for (i=0; i<arr2.length;i++){

  switch(arr2[i]){
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

  }
  return arr;
}

pairElement("GCG");
