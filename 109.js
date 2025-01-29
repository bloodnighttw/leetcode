/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    
    let nums = [], temp = head;
    while(temp){
        nums.push(temp.val)
        temp = temp.next;
    }

    const buildTree = (start = 0, end = nums.length-1) => {        
        if(start > end)
            return null;

        let mid = Math.floor((start+end)/2);

        let left = buildTree(start,mid-1);
        let right = buildTree(mid+1,end);

        return new TreeNode(nums[mid],left,right)
    }

    return buildTree()
};
