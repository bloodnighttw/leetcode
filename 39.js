/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    let ans = []

    const brute = (from = 0,prev = [])=>{
        let sum = prev.reduce((prev,now)=> prev+now,0);
        // console.log(sum,prev,from)
        if( sum === target) ans.push([...prev])
        else if(sum > target) return

        for(;from < candidates.length; from++){
            prev.push(candidates[from])
            brute(from,prev)
            prev.pop()
        }
    }

    brute()
    
    return ans
};
