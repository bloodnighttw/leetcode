/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    if(!head){
        return null
    }

    let next = head.next;

    if(next){
        let next2 = swapPairs(next.next)
        next.next = head;
        head.next = next2; 
        return next;
    }

    return head;
    
};
