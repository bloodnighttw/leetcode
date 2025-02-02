
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let min = this.getMin() ?? Infinity;

    if(val < min) min = val;

    this.stack.push([val,min])    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length === 0)
        return null;
    
    return this.stack[this.stack.length-1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length === 0)
        return null;
    
    return this.stack[this.stack.length-1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
