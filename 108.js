/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

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
