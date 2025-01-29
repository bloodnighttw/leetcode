let ans = [[1]]

for(let i = 1; i < 34; i++){

    let temp = [];

    for(let j = 1; j < i; j++){
        let count = ans[i-1][j]+ans[i-1][j-1];
        temp.push(count)
    }
    ans.push([1,...temp,1])
}

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    return ans[rowIndex]
};
