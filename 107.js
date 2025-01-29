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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {

    const ref = {}

    const inorder = (node=root, level = 0) => {
        if(!node)
            return;

        if(ref[level])
            ref[level].push(node.val)
        else
            ref[level] = [node.val]
        

        inorder(node.left,level+1)
        inorder(node.right,level+1)
    }

    inorder()

    return Object.values(ref).reverse()  
};
