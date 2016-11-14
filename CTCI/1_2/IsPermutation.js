 var isPermutation = function(s, t) {

   if(s.length != t.length) return false;

   var table = Array.apply(null, Array(256)).map(Number.prototype.valueOf, 0);

   for(var i =0; i < s.length; i++) {
     table[s[i].charCodeAt(0)]++;
   }
   for(var i =0; i < t.length; i++) {
     if(--table[t[i].charCodeAt(0)] < 0) {
       return false;
     }
   }

   return true;
 }

console.log(isPermutation("thingy", "thinyg"));
