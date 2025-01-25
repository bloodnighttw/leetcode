/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    // check row
    for(let i = 0 ; i < 9 ; i++){
        let set1 = new Set(), set2 = new Set();
        for(let j = 0 ; j < 9 ; j++){
            let row = board[i][j], column = board[j][i];
            if(set1.has(row) || set2.has(column)){
                return false;
            }
            if(row !== ".")
                set1.add(row)
            if(column!== ".")
                set2.add(column)
        }
    }

    for(let i = 0; i < 9 ; i++){
        let row = Math.floor(i/3), column = i%3 ;
        let offsetx = row * 3, offsety = column * 3;
        let set = new Set();
        for(let j = 0; j < 3 ; j++){
            
            for(let k = 0; k < 3; k++){
                let char = board[offsetx+j][offsety+k];
                if(char === ".")
                    continue;
                if(set.has(char))
                    return false;

                set.add(char)
            }
        }
    }


    return true;
    
};
