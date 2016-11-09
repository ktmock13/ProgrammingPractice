// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

function ListNode(val) {
   this.val = val;
   this.next = null;
}

var fillList = function(arr) {
  var list = new ListNode(arr[0]);
  var tmp = list;
  for(var i = 1; i < arr.length; i++) {
    tmp.next = new ListNode(arr[i]);
    tmp = tmp.next;
  }
  return list;
}
var paddingWithZeros = function(list, count) {
  var tmp = list;
  while(tmp.next){
    tmp = tmp.next;
  }
  for(var i = 0; i < count; i++){
    tmp.next = new ListNode(0);
    tmp = tmp.next;
  }
  return list;
}

var listcount = function(list) {
  if(list.val && !list.next) {
    return 1;
  }
  var count = 1, output = list.val + ' -> ';
  while(list.next){
    count++;
    list = list.next;
    output += list.val + ' -> ';
  }
  console.log(output);
  return count;
}

var addTwoNumbers = function(l1, l2) {

    // differnce in length
    var diff = listcount(l1) - listcount(l2);

    if(diff < 0) { //if the first list is shorter
      l1 = paddingWithZeros(l1, Math.abs(diff));
    } else { //if the first list is longer
      l2 = paddingWithZeros(l2, Math.abs(diff));
    }

    var carry = 0;
    var l3 = new ListNode((l1.val + l2.val + carry) % 10); //create new linked list by starting at end
    carry = (l1.val + l2.val + carry) % 10 !== l1.val + l2.val + carry ? 1 : 0;
    tmp = l3;
    l1 = l1.next ? l1.next : {};
    l2 = l2.next ? l2.next : {};
    while(l1.val || l2.val) { //while at least one list can be interated
      tmp.next = new ListNode((l1.val ? l1.val : 0 + l2.val ? l2.val : 0 + carry) % 10); //create new linked list by starting at end
      carry = (l1.val + l2.val + carry) % 10 !== l1.val + l2.val + carry ? 1 : 0;
      tmp = tmp.next;
      l1 = l1.next ? l1.next : {};
      l2 = l2.next ? l2.next : {};
    }
    return l3;
};

var l1 = fillList([5]), l2 = fillList([5,6,4]);

console.log("answer length: ", addTwoNumbers(l1,l2));
