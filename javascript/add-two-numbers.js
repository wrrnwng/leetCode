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
var addTwoNumbers = function(l1, l2, l3) {
    var lOne = 0,
        lTwo = 0,
        lThree = 0;
        
    if (l1) {
        lOne = l1.val;
    }
    if (l2) {
        lTwo = l2.val;
    }
    if (l3) {
        lThree = l3.val;
    }

    var l3 = new ListNode(lOne + lTwo + lThree);
    
    if (l3.val > 9) {
        l3.val = l3.val % 10;
        if (l1.next !== null && l2.next !== null)  {
            l3.next = addTwoNumbers(l1.next, l2.next, new ListNode(1));
        } else if (l1.next !== null) {
            l3.next = addTwoNumbers(l1.next, new ListNode(1));
        } else if (l2.next !== null) {
            l3.next = addTwoNumbers(l2.next, new ListNode(1));
        } else {
            l3.next = new ListNode(1);
        }
    } else {
        if (l1.next !== null && l2.next !== null) {
            l3.next = addTwoNumbers(l1.next, l2.next);
        } else if (l1.next !== null) {
            l3.next = addTwoNumbers(l1.next, new ListNode(0));
        } else if (l2.next !== null) {
            l3.next = addTwoNumbers(l2.next, new ListNode(0));
        }
    }
    return l3;
};