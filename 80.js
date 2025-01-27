/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let map = {}

    for(const i of nums){
        if(map[i])
            map[i]++;
        else
            map[i] = 1;
    }

    let count = 0;

    Object.entries(map).sort((a,b)=>a[0]-b[0]).forEach(([key,value])=>{
        if(value >= 2){
            nums[count] = +key;
            count++;            
        }
        nums[count] = +key;
        count++;
    })
        
    return count;
};
