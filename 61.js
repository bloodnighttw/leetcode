/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    if(!head) // head might be null
        return head

    let end = head, count = 1;

    while(end.next) {
        end = end.next; // find end node
        count++; // calc node length
    };

    let offset = count - ( k % count);
    end.next = head; // circular linked list

    let temp = end;

    while(true){
        if(offset===0){
            let res = temp.next;
            temp.next = null; // remove circular part

            return res
        }

        temp = temp.next;
        offset--;
    }
    
};
