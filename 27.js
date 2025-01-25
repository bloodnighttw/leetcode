/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] === val)
            nums[i] = undefined;
    }

    nums.sort((a,b)=> (a === undefined ? 1 : b === undefined ? -1 : 0))

    return nums.filter((it)=>it!==undefined).length
    
};
