/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    // var highestPeakIndex = 1;
    // var i = 1;
    // var isAPeak = function (seq) {
    //     return seq[0] < seq[1] && seq[1] > seq[2];
    // };
    // //the first potential peak will be at least index 1, and at most length-2
    // while(i < A.length-1){
    //   if(isAPeak([A[i-1], A[i], A[i+1]])) {
    //     if(A[i] > A[highestPeakIndex]) highestPeakIndex = i;
    //   }
    //   i++;
    // }
    // return highestPeakIndex;
    var i = 0;
    while (A[i] < A[i+1]) i++;
    return i;
}


console.log(peakIndexInMountainArray([3,4,5,1]));
