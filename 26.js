/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) { // nums will be changed
    
    let ptr1 = 0;

    for(let j = 1 ; j < nums.length; j++){
        if(nums[j] !== nums[j-1]){
            nums[ptr1] = nums[j-1];
            ptr1++;
        }
    }

    // Don't forget add last one to array
    nums[ptr1] = nums[nums.length-1];
    ptr1++;

    return ptr1;

};
