/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    const visit = (node1 = p, node2 = q)=>{

        if(node1 === null || node2 === null){
            return node1?.val === node2?.val
        }
        

        let t = (node1.val === node2.val) 
            && visit(node1.left,node2.left) 
            && visit(node1.right,node2.right);

        return t
        
    }
    
    return visit()
};
