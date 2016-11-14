var prompt = require('prompt');
removes white space O(2N) ...not removing in place
var prompt = require('prompt');
var newStr = [];
prompt.get(['str'], function(err, result) {
  str= result.str;
  for(var i = 0; i < str.length; i++) {
    if(str[i] != " ") {
      newStr += str[i];
    }
  }
  console.log(newStr);
});
