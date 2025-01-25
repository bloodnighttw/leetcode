const cache = { 1: "1"}

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

    if(n === 1)
        return "1";

    if(cache[n])
        return cache[n]

    let str = countAndSay(n-1);
    let ans = ""
    
    for(let i = 0; i < str.length; i++){
        let start = i;
        while(str[i+1] === str[i]) i++;

        let len = i - start + 1;
        ans = ans + len + str[start]

    }
    
    cache[n] = ans;
    return ans

};
