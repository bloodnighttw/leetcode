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
 * @return {number}
 */
var maxDepth = function(root) {

    const findMax = (node = root) =>{

        if(!node)
            return 0;

        let left = findMax(node.left),right = findMax(node.right);

        return 1 + Math.max(left,right)
    }

    return findMax()
    
};
