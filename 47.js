/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

    let map = {}

    for(const i of nums){
        if(map[i])
            map[i]++;
        else
            map[i] = 1;
    }

    let ans = []

    const brute = (prev = [])=>{
        if(prev.length === nums.length){
            ans.push([...prev])
        }

        for(const key of Object.keys(map)){
            if(map[key] === 0)
                continue;

            map[key]--;
            prev.push(parseInt(key))
            brute(prev)
            prev.pop()
            map[key]++;
        }
    }

    brute()

    return ans
    
};
