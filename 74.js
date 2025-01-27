/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    let rows = matrix.length, cols = matrix[0].length;

    let t = 0, b = rows - 1;

    let targetRow;
    while( t <= b){
        let mid = Math.floor((t+b)/2)
        if(matrix[mid][0] <= target && target <= matrix[mid][cols-1]){
            targetRow = matrix[mid];
            break;
        }else if(target >= matrix[mid][0]){
            t = mid + 1;
        } else if(target <= matrix[mid][cols-1]){
            b = mid - 1;
        } else{
            break;
        }
    }

    if(!targetRow)
        return false;

    let l = 0, r = cols - 1;

    while(l <= r){
        let mid = Math.floor((l+r)/2);

        if(target===targetRow[mid])
            return true;
        else if(target > targetRow[mid])
            l = mid + 1;
        else // target < targetRow[mid]
            r = mid - 1;
    }

    return false;    
};
