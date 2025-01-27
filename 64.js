/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {

    let gridDP = grid.map((w)=>{
        return w.map(()=>0)
    });

    gridDP[0][0] = grid[0][0];

    let x = grid.length, y = grid[0].length;


    for(let i = 1; i < grid.length; i++){
        gridDP[i][0] = gridDP[i-1][0] + grid[i][0]
    }

    for(let i = 1; i < grid[0].length; i++){
        gridDP[0][i] = gridDP[0][i-1] + grid[0][i]
    }

    for(let i = 1; i < grid.length; i++){
        for(let j = 1; j < grid[0].length; j++){
            gridDP[i][j] = Math.min(gridDP[i-1][j],gridDP[i][j-1]) + grid[i][j]
        }
    }

    return gridDP[x-1][y-1]
};
