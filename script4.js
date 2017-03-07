// Wherefore art thou

// Where takes item collection and compres it with the source
function whatIsInAName(collection, source) {
//Use filter and return true values
var arr = collection.filter(function(item){
  //Check values in source and compare with item
  for(var i in source){
    if(source[i]!= item[i]){
      return false;
    }
  }
  return true;

});

return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
