/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    let hasVisited = matrix.map((it)=> it.map(()=>true))

    let direction = 0;
    // 0 ->
    // 1 go down
    // 2 <-
    // 3 go up
    // 4 invalid

    function changeDirection(){
        // console.log("change")
        direction = (direction+1)%4
    }

    let x = 0, y = 0;

    function next(){
        switch(direction){
            case 0:
                return [x,y+1]
            case 1:
                return [x+1,y]
            case 2:
                return [x,y-1]
            case 3:
                return [x-1,y]
        }
        return [0,0]
    }

    hasVisited[0][0] = false;


    let invalidMove = 0;

    let ans = [matrix[0][0]]

    while(invalidMove < 4){

        const [nx,ny] = next();
        let check = hasVisited[nx] && hasVisited[nx][ny]
        if(check){
            [x,y] = [nx,ny]
            hasVisited[x][y] = false;
            ans.push(matrix[x][y])
            invalidMove = 0
        } else {
            changeDirection()
            invalidMove++;
        }
    }

    return ans;
};