/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    const rec = (pre = preorder, ino = inorder) => {

        if(pre.length === 0)
            return null

        let rootVal = pre[0]
        let idx = 0;

        while(rootVal != ino[idx]) idx++;
        
        let lp = pre.slice(1,idx+1), li = ino.slice(0,idx);
        let rp = pre.slice(idx+1), ri = ino.slice(idx+1)

        let left = rec(lp,li), right = rec(rp,ri);
        let root = new TreeNode(pre[0],left,right)

        return root
    }

    return rec()
};
