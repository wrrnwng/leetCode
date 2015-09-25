// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each
// of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2, remainder) {
  if (l1 === null && l2 === null) {
    if (remainder) {
      return new ListNode(remainder);
    }
    return null;
  }
  var l1Val = (l1 !== null) ? l1.val : 0;
  var l2Val = (l2 !== null) ? l2.val : 0;
  remainder = remainder || 0;

  var val = l1Val + l2Val + remainder;
  var l3 = new ListNode(val % 10);
  var newRemainder = Math.floor((l1Val + l2Val) / 10);
  console.log(newRemainder);

  if (l1 !== null && l2 !==null) {
    l3.next = addTwoNumbers(l1.next, l2.next, newRemainder);
  } else if (l1 === null) {
    l3.next = new ListNode(l2Val + newRemainder);
  } else if (l2 === null) {
    l3.next = new ListNode(l1Val + newRemainder);
  } else if (newRemainder) {
    l3.next = new ListNode(newRemainder);
  }
  return l3;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

list1 = new ListNode(1);
list1.next = new ListNode(8);
// list1.next.next = new ListNode(3);
list2 = new ListNode(0);
// list2.next = new ListNode(6);
// list2.next.next = new ListNode(4);
list3 = addTwoNumbers(list1, list2);
console.log(list3);

