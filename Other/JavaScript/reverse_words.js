// Reverse words in a string (words are separated by one or more spaces)
var prompt = require('prompt');
function reverseString(str){
  var newStr = "";
  for(var i = str.length-1; i >= 0; i--){
    newStr+=str[i];
  }
  return newStr;
}
// init string to be flipped
prompt.get(['str'], function (err, result) {
  //reverse the initial string
  var revStr = reverseString(result.str);
  //iterate through string
  var word = "";
  for(var i = 0; i < revStr.length+1; i++){
    //loop through whole string
    if(revStr.charAt(i) != " " && revStr.length != i){
      //character is not a space, add to word buffer
      word += revStr[i];
    } else {
      //take word and reverse it, splice word into string
      revStr = revStr.replace(word, reverseString(word));
      // reset word for next iteration
      word = "";
    }
  }
  console.log(revStr);
});
