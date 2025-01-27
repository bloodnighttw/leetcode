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
var deleteDuplicates = function(head) {

    let temp = head, ref = {};

    while(temp !== null){
        if(ref[temp.val] !== undefined)
            ref[temp.val] = false;
        else
            ref[temp.val] = true;
        
        temp = temp.next;
    }

    let temp1 = head;
    
    while(temp1 && ref[temp1.val] === false) temp1 = temp1.next;
    let begin = temp1,prev = temp1;
    temp1 =  temp1?.next ?? null
    
    while(temp1){
        if(ref[temp1.val]){
            prev.next = temp1;
            prev = prev.next;
        }
        temp1 = temp1.next;
    }

    if(prev !== null){
        prev.next = null;
    }

    return begin
    
};
