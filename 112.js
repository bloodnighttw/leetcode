/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

    const inorder = (node = root, sum = 0) =>{

        if(!node) // null node can't do anything
            return false;

        sum += node.val;

        if(node.left === null && node.right === null){ // this is a leaf node.
            return sum === targetSum; // check sum is equal to targetSum or not.
        }

        return inorder(node.left,sum) || inorder(node.right,sum)
    }

    return inorder()
    
};
