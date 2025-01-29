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
 * @return {boolean}
 */
var isBalanced = function(root) {

    const height = (node=root)=>{
        if(!node)
            return 0

        let left = height(node.left);
        let right = height(node.right)

        if(left === -1 || right === -1)
            return -1;

        if(Math.abs(left-right) > 1)
            return -1;
        return Math.max(left,right)+1
    }

    let h = height()
    return h >= 0;
};
