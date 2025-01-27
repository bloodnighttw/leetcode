/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {

    let stack = [];

    let pathSlice = path.split("/")

    for(const name of pathSlice){
        switch(name){
            case "":
            case ".":
                continue;
            case "..":
                stack.pop()
                continue
            default:
                stack.push(name)
        }

    }

    let ans = "/" + stack.join("/")

    return ans
};
