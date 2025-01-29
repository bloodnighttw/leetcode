/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {

    if(!root)
        return root;

    let queue = [root];

    // bfs
    while(queue.length > 0){
        let temp = null, count = queue.length;
        while(count-- > 0){
            let item = queue.shift();
            if(item.left) queue.push(item.left);
            if(item.right) queue.push(item.right);
            if(temp) temp.next = item;
            temp = item;
        }
    }

    return root;
};
