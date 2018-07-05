var sortInPlace = function(theArray) {
  var highOffset = theArray.length-1;
  var lowOffset = 0;

  var handleHigh = function(i) {
    while(theArray[highOffset] === 2) highOffset--; // move the high offset back till its ona  lower #
    if(i < highOffset){  // avoid moving highs back in the sequence
      theArray[i] = theArray[highOffset];
      theArray[highOffset] = 2;
      highOffset--;
    }
  }

  var handleLow = function(i) {
    while(theArray[lowOffset] === 0) lowOffset++; // move the high offset back till its ona  lower #
    if(i > lowOffset){  // avoid moving lows forward in the sequence
      theArray[i] = theArray[lowOffset];
      theArray[lowOffset] = 0;
      lowOffset++;
    }
  }

  for(var i = 0; i < theArray.length; i++) {
    if(theArray[i] === 0) {
      handleLow(i);
      // make sure we didnt move a high one where it shouldnt be
      if(theArray[i] === 2) handleHigh(i);
    }
    if(theArray[i] === 2) {
      handleHigh(i);
      // make sure we didnt move a low one where it shouldnt be
      if(theArray[i] === 0) handleLow(i);
    }
    console.log(theArray);
  }
  return theArray;
}

console.log(sortInPlace([1,2,0]));
