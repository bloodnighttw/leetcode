#include <vector>

using namespace std;


class Solution {
public:

    int lengthOfLongestSubstring(string s) {

        vector<int> v(256,0);

        
        int ptr1 = 0 , ptr2 = 0, max_ = 0;

        while(ptr2 < s.size()){
            
            while(v[s[ptr2]]!=0){
                v[s[ptr1]]--;
                ptr1++;
            }

            v[s[ptr2]]++;
            ptr2++;
            max_ = max(max_,ptr2-ptr1);
        }

        return max_;
    }
};