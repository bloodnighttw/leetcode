/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // END COUNTER
    let end = 0;

    // we go to end by recurciry

    const rec = (head) =>{
        if(head !== null){
            let next = rec(head.next,n);
            end++;

            if(end == n){
                return next;
            }
            
            head.next = next;
        }
        return head;
    }

    return rec(head)

};
