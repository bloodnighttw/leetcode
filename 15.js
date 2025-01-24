
var threeSum = function(nums) {

    let sorted = nums.sort((a,b) => a-b)

    let ans = {};
    console.log(sorted)

    for(let i = 1; i < sorted.length; i++){

        let ptr1 = 0, ptr2 = nums.length - 1;

        
        while(ptr1 < i && i < ptr2 ){
            let a = sorted[ptr1], b = sorted[i], c = sorted[ptr2];
            let current = a + b + c;

            if(current == 0){
                ans[[a, b, c]] = [a,b,c];
		console.log([a,b,c])
                ptr1++;
                ptr2--;
            } else if(current < 0) {
                ptr1++;
            } else if(current > 0){
                ptr2--;
            }
            
        }

    }

    let ansNoDup = []

    for(const i in ans){
        ansNoDup.push(ans[i])
    }

    return ansNoDup

};

let j = threeSum([3,0,-2,-1,1,2]);

console.log(j)
