/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let row = board.length, col = board[0].length;

    const visit = (i,j) => {
        
        if(!board[i] || !board[i][j])
            return

        if(board[i][j] === "O"){
            board[i][j] = "#"
            visit(i-1,j)
            visit(i+1,j)
            visit(i,j+1)
            visit(i,j-1)
        }
    }

    for(let i = 0; i < row; i++){
        visit(i,0)
        visit(i,col-1)
    }

    for(let i = 0; i < col; i++){
        visit(0,i)
        visit(row-1,i)
    }

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(board[i][j] === "#")
                board[i][j] = "O"
            else if(board[i][j] === "O")
                board[i][j] = "X"
        }
    }
    
};
