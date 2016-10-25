var MakeURL = function(s, len) {
  var offset = 0; // keep an offset to track growing index
  for(var i = 0; i < len; i++) {
    if(s[i + offset] === ' ') { // iterate through the string, accomodate for changes in the loop
      s[i] = '%';  //  fill space with the first chacter of %20
      for(var j = len + offset - 1; j > (i + offset); j--) {  // shift the string to the right by one, replace the last char with a 2
        s[j + 1] = s[j];  // shifting one right
        if(j - 1 === i + offset) {  // if the loop is at the last character
          s[j] = '2';  //fill
        }
      }
      offset++;  // increase offest to compensate outer loop for shifting string
      for(var j = len + offset - 1; j > (i + offset); j--) {  // shift the string to the right by one, replace the last char with a 2
        s[j + 1] = s[j];  // shifting one right
        if(j - 1 === i + offset) {  // if the loop is at the last character
          s[j] = '0';  //fill
        }
      }
      offset++;  // increase offest to compensate outer loop for shifting string
    }
  }
  return s;
}

console.log(MakeURL("Mr John Smith    ", 13));
