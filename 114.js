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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {

    const rebuild = (node = root)=>{
        if(!node)
            return null;
        
        let left = rebuild(node.left)
        let right = rebuild(node.right)

        node.left = null;
        node.right = null;

        node.right = left; // might be null
        let temp = node;
        while(temp.right){
            temp = temp.right;
        }
        temp.right = right;

        return node;
    }

    return rebuild()
};
