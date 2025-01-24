/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let stack = []

    for(const c of s){
        if(c === ']'){
            const top = stack.pop()
            if(top!=='[')
                return false;
        } else if(c === '}'){
            const top = stack.pop()
            if(top!=='{')
                return false;
        } else if(c === ')'){
            const top = stack.pop()
            if(top!=='(')
                return false;
        } else {
            stack.push(c)
        }
        
    }

    return stack.length === 0

};
