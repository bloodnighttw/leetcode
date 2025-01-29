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
var minDepth = function(root) {

    const minHeight = (node=root)=>{
        if(!node)
            return 0;

        if(!node.left && !node.right)
            return 1;

        if(!node.left)
            return 1 + minHeight(node.right);

        if(!node.right)
            return 1 + minHeight(node.left);

        let left = minHeight(node.left);
        let right = minHeight(node.right);

        return Math.min(left,right)+1;
    }

    return minHeight()
};
