/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    const first = () => {
        let l = 0, r = nums.length;
        let ans = -1;

        while(l <= r){
            let mid = Math.floor((l+r)/2);
            if(nums[mid] == target){
                ans = mid;
                r = mid - 1;
            } else if(target < nums[mid]){
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return ans;
        
    }

    const last = () => {
        let l = 0, r = nums.length;
        let ans = -1;

        while(l <= r){
            let mid = Math.floor((l+r)/2);
            if(nums[mid] == target){
                ans = mid;
                l = mid + 1;
            } else if(target < nums[mid]){
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return ans;
        
    }

    return [first(),last()]
    
};
