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
var isValidBST = function(root) {

    let prev = -Infinity;
    let valid = true;

    const inorder = (node = root)=>{
        if(!node)
            return

        inorder(node.left)

        if(prev < node.val){
            prev = node.val;
        } else {
            valid = false;
            return
        }

        inorder(node.right)

    }

    inorder()

    return valid
    
};
