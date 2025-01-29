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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {

    let ans = []

    const inorder = (node = root, sum = 0, prev = []) =>{

        if(!node) // null node can't do anything
            return false;

        prev.push(node.val)
        sum += node.val;

        if(node.left === null && node.right === null){ // this is a leaf node.
            if(sum === targetSum)
                ans.push([...prev])
            prev.pop()
            return sum === targetSum; // check sum is equal to targetSum or not.
        }

        let left = inorder(node.left,sum,prev);
        let right = inorder(node.right,sum,prev);

        prev.pop()

        return left || right;
    }

    inorder()

    return ans;
};
