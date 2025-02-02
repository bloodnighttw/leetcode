/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    let stackA = [], stackB = []

    let temp = headA;

    while(temp){
        stackA.push(temp);
        temp = temp.next;
    }

    temp = headB;

    while(temp){
        stackB.push(temp);
        temp = temp.next;
    }

    let ans = null

    while(stackA.length !==0 && stackB.length !== 0 && stackA[stackA.length-1] === stackB[stackB.length-1]){
        ans = stackA.pop();
        stackB.pop();
    }

    return ans
};
