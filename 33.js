/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let l = 0, r = nums.length - 1

    while(l <= r){
        const mid = Math.floor((l+r) / 2);
        
        if(nums[mid] == target)
            return mid;
        
        if(nums[mid] < nums[l]){// mid in the right side
            if(target > nums[r] || target < nums[mid]) // target in the left
                r = mid - 1;
            else
                l = mid + 1;
        }else{ // mid in the left side
            if(target < nums[l] || target > nums[mid]) // target in the right
                l = mid + 1;
            else
                r = mid - 1;
        }
    }
    
    return -1;
};
