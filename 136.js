/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let map = {}

    for(const i of nums){
        if(map[i])
            map[i]++;
        else
            map[i] = 1;
    }

    for(const [key,value] of Object.entries(map)){
        if(value === 1)
            return parseInt(key)
    }
    
};
