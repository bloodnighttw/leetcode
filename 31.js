/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    const lastIdx = nums.length-1;

    function swap(i,j){
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    for(let i = lastIdx;i >= 0; i--){
        if(nums[i] < nums[i+1]){
            // console.log(i)
            // swap
            let o = lastIdx;
            // find the last item that is large than nums[i]
            while(nums[o] <= nums[i]) {
                o--;
            };

            swap(i,o) 

            // reverse
            let end = lastIdx, start = i+1;
            while(start < end){
                swap(start,end)
                start++;
                end--;
            }

            return;
        }
    }
    nums.reverse()
};
