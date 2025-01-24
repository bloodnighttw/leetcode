/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
        let sorted = nums.sort((a,b) => a-b)

    let ans = -99999999;

    for(let i = 1; i < sorted.length - 1; i++){

        let ptr1 = 0, ptr2 = nums.length - 1;


        while(ptr1 < i && i < ptr2 ){
	    

	    let a = sorted[ptr1], b = sorted[i], c = sorted[ptr2];
            let current = a + b + c;

            if(Math.abs(target-ans) > Math.abs(target-current)){
                ans = current;
            }

	    if(current == target){
                ans = current;
                ptr1++;
                ptr2--;
            } else if(current < target) {
                ptr1++;
            } else if(current > target){
                ptr2--;
            }

        }

    }

    return ans
};

console.log(threeSumClosest([1,1,1,0],100))
