/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

    const grid = obstacleGrid.map((w)=>{
        return w.map((h)=> h === 0 ? 1 : 0)
    })

    for(let i = 1; i < grid.length; i++){
        if(grid[i-1][0] === 0)
            grid[i][0] = 0;
    }

    for(let i = 1; i < grid[0].length; i++){
        if(grid[0][i-1] === 0)
            grid[0][i] = 0;
    }

    let x = grid.length , y = grid[x-1].length;

    for(let i = 1 ; i < grid.length; i++){
        for(let j = 1; j < grid[i].length; j++){
            if(grid[i][j] === 0)
                continue;
            grid[i][j] = grid[i-1][j] + grid[i][j-1];
        }
    }

    return grid[x-1][y-1]
};
