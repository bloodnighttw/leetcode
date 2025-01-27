/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    let row = board.length, col = board[0].length;

    let back = Array.from({length:row},()=>new Array(col).fill(false))

    const search = (x,y,idx=0)=>{

        if(!(idx < word.length))
            return true; // search to end

        if( x < 0 || x >= row || y < 0 || y >= col) // out of bound
            return false;

        if(back[x][y]) // this node is visited, we can't move to this node again.
            return false;


        let ans = false;
        if(board[x][y] === word[idx]){
            back[x][y] = true;
            ans = search(x+1,y,idx+1) 
                || search(x,y+1,idx+1) 
                || search(x,y-1,idx+1) 
                || search(x-1,y,idx+1);
            back[x][y] = false;
        }

        return ans;
        
    };

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(search(i,j))
                return true;
        }
    }
    
    return false;
};
