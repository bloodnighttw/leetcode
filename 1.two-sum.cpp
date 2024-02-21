/*
 * @lc app=leetcode id=1 lang=cpp
 *
 * [1] Two Sum
 */

// @lc code=start

#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;


class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {

        unordered_map<int, int> reverseTable; // reverse index and value

        for(int i = 0 ; i < nums.size(); i++){
            auto& now = nums[i];
            if(reverseTable.find(target-now) != reverseTable.end()){ // not find
                return {i,reverseTable[target-now]};
            }else {
                reverseTable[now] = i;
            }
        }

        return {0,0};
    }
};
// @lc code=end

