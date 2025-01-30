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
var sumNumbers = function(root) {

    let ans = []

    const visit = (node = root, sum = 0) =>{
        if(!node)
            return;

        sum = sum*10 + node.val;

        if(!node.left && !node.right){
            ans.push(sum)
            return;
        }

        visit(node.left,sum);
        visit(node.right,sum);
    }

    visit()

    return ans.reduce((a,b)=>a+b,0)
};
