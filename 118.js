/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    let ans = [[1]]

    for(let i = 1; i < numRows; i++){

        let temp = [];

        for(let j = 1; j < i; j++){
            let count = ans[i-1][j]+ans[i-1][j-1];
            temp.push(count)
        }
        ans.push([1,...temp,1])
    }

    return ans
    
};
