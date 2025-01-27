/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {

    nums.sort((a,b) => a-b)

    let ref = {}

    ref[[]] = []

    for(const i of nums){
        for(const value of Object.values(ref)){
            let newItem = [...value,i];
            ref[newItem] = newItem;
        }
    }

    // console.log(Object.values(ref))
    return Object.values(ref)
};
