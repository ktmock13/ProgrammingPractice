
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;

}



var minDiffInBST = function(root) {

  var getValueDiff = function(a,b) {
    return Math.abs(a-b);
  };
  // returns the indecies of a given index's children
  var getChildrenIndecies = function(index) {
    if((index * 2 + 2) > root.length -1) return 0;
    return { left: (index * 2 + 1), right: (index * 2 + 2)};
  };

  var getParentIndex = function(index) {
    return Math.floor(index + 1 / 2) - 1;
  };

  // all -1

  var parentIndex = 1, kids = true, minDiff = getValueDiff(root[0], root[1]), kids = getChildrenIndecies(parentIndex);
  //start at index 1 since the first comparison is hard coded
  while(kids){
    //check left child diff
    var leftDiff = getValueDiff(root[parentIndex], root[kids.left]);
    var rightDiff = getValueDiff(root[parentIndex], root[kids.right]);

    if(leftDiff <  minDiff) minDiff = leftDiff;
    if(rightDiff <  minDiff) minDiff = rightDiff;

    parentIndex++;
    kids = getChildrenIndecies(parentIndex);
  }
  return minDiff;
};


console.log(minDiffInBST(root));
