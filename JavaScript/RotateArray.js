var rotate = function(nums, k) {
    if(nums.length > 1){
        for(var i = 0; i < k; i++) {
          var tmp, savedPrev = nums[0];
            for(var j = 1; j < nums.length-1; j++) {
              if(j === nums.length-1) { //hasnt reached end of string
                tmp = nums[j];
                nums[j] = savedPrev;
                savedPrev = tmp;
              } else {              //last reached, rplace front char
                  nums[0] = nums[nums.length-1];
              }
            }
        }
    }
};

var nums = [1,2,3,4];
rotate(nums, 2);
console.log(nums);
