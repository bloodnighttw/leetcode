/* comment used less memory(beat 95.54% with 58.67 MB ram), but it's slower.*/

let ans = [0]
for(let i = 0; i <16 ; i++){
    let offset = 1 << i;
    for(let j = offset - 1; j >= 0 ; j--){
        ans.push(offset | ans[j]);
    }
}

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    return ans.slice(0,1<<n);

    // let ans = [0]
    // for(let i = 0; i < n ; i++){
    //     let offset = 1 << i;
    //     for(let j = offset - 1; j >= 0 ; j--){
    //         ans.push(offset | ans[j]);
    //     }
    // }

    // return ans
};
