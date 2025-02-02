/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    let wordSet = new Set(wordDict)

    let dp = new Array(s.length)

    // const check = (idx = 0) => {

    //     let str = s.slice(idx)

    //     if(wordSet.has(str)){
    //         ref[idx] = true;
    //         return true;
    //     }

    //     for(let i = 1; i < str.length; i++){
    //         let front = str.slice(0,i) , end = str.slice(i);

    //         if(wordSet.has(front) && check(idx+i)){
    //             ref[idx] = true;
    //             return true;
    //         }
    //     }

    //     ref[idx] = false;
    //     return false;
    // }
    
    for(let i = s.length - 1; i >= 0; i--){

        dp[i] = false; // init array

        let str = s.slice(i);

        if(wordSet.has(str)){
            dp[i] = true;
            continue;
        }

        for(let j = 1 ; j < str.length && dp[i] === false; j++){
            let front = str.slice(0,j);
            if(wordSet.has(front)){
                dp[i] = dp[i+j];
            }
        }
    }

    return dp[0]
};
