
var merge = function(intervals) {

    intervals.sort((a,b) => a[0]-b[0])

    let ans = [intervals[0]]

    for(let i = 1; i < intervals.length; i++){
        let prev = ans[ans.length-1]
        let now = intervals[i]

        if(now[0] <= prev[1] && prev[1] <= now[1]){
            prev[1] = now[1]
        } else if(now[1] < prev[1]){ // note: prev[0] always < now[0] since we have sort it by index 0
            continue;
        } 
        else{
            ans.push(now)
        }
    }

    return ans
    
};
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    return merge([...intervals,newInterval])
};
