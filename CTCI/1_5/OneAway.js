var isOneAwayHash = function(strA, strB) {
  // create a hash table for wach of the potential charaters
  var table = Array.apply(null, Array(256)).map(Number.prototype.valueOf, 0);

  for(var i = 0; i < strA.length; i++) {
    table[strA[i].charCodeAt(0)] += 1;
  }
  for(var i = 0; i < strB.length; i++) {
    table[strB[i].charCodeAt(0)] += 1;
  }
  var oddCount = 0;
  for(var i = 0; i < table.length; i++) {
    if(table[i]%2 !== 0) {
      oddCount++;
    }
    // this works, but doesnt consider order, lets try iterating instead
  return oddCount <= 1;
  }
}

var isOneAway = function(strA, strB) {
  if(strA === strB) return true; //case that theyre equal
  var lenDiff = strA.length - strB.length;
  if(Math.abs(lenDiff) > 1){ //case that they vary too much in length
    return false;
  }
  var longStr, shortStr;
  // find the longer string, there may not be one, that's ok
  if(lenDiff === 1) {
    longStr = strA;
    shortStr = strB;
  } else {
    longStr = strB;
    shortStr = strA;
  }
  // iterate throught them and look for at most 1 difference
  var offset = 0, diffCount = 0;
  for(var i = 0; i < longStr.length; i++){
    if(Math.abs(lenDiff) === 1) offset = diffCount; //if the strings are diff in length by one, account for a potential off-by-one while comparing
    if(longStr[i] !== shortStr[i - offset]) {
      if(diffCount > 0) { //already encountered a difference before this
        return false;
      }
      //count the difference
      diffCount++;
    }
  }
  return true;
}


console.log(isOneAway('pale' , 'bale')); //true
