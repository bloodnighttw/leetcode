/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {


    for(let i = 1; triangle[i] ; i++){

        let len = triangle[i].length;

        triangle[i][0] += triangle[i-1][0];
        triangle[i][len-1] += triangle[i-1][len-2];

        for(let j = 1; j < len - 1; j++){
            triangle[i][j] += Math.min(triangle[i-1][j-1],triangle[i-1][j]);
        }
    }

    return triangle[triangle.length - 1].reduce((a,b) => Math.min(a,b),Infinity);
};
