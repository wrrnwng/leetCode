/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 
var merge = function(l1, l2) {
    var detachedNode = null;
    if (l1 !== null || l2 !== null) {
        if (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                detachedNode = l1.next;
                l1.next = mergeKLists([detachedNode, l2]);
                return l1;
            } else {
                detachedNode = l2.next;
                l2.next = mergeKLists([l1, detachedNode]);
                return l2;
            }
        } else if (l1 !== null) {
            return l1;
        } else {
            return l2;
        }
    }
    return null;
};
 
var mergeKLists = function(lists) {
    var halfLists = null;
    
    if (lists.length === 0) {
        return null;
    } else if (lists.length === 1) {
        return lists[0];
    } else if (lists.length === 2) {
        return merge(lists[0], lists[1]);
    } else {
        halfLists = lists.splice(Math.round(lists.length / 2));
        return merge(mergeKLists(lists), mergeKLists(halfLists));
    }
};