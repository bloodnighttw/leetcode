/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    let arr = Array.from(Array(matrix.length),()=> new Array(matrix.length).fill(0))

    let lastIdx = matrix.length-1;

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
           arr[j][lastIdx-i] = matrix[i][j]
        }
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            matrix[i][j] = arr[i][j]
        }
    }
    
};
