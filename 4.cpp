#include <vector>

using namespace std;

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {

        vector<int> vec;
        int ptr1 = 0, ptr2 = 0;
        while (ptr1 < nums1.size() && ptr2 < nums2.size()){
            if(nums1[ptr1] < nums2[ptr2]){
                vec.push_back(nums1[ptr1]);
                ptr1++;
            }else{
                vec.push_back(nums2[ptr2]);
                ptr2++;
            }
        }
        
        while (ptr1 < nums1.size() ){
            vec.push_back(nums1[ptr1]);
            ptr1++;
        }


        while (ptr2 < nums2.size() ){
            vec.push_back(nums2[ptr2]);
            ptr2++;
        }

        int mid1 = (vec.size() - 1)/2, mid2 = (vec.size())/2;


        return (vec[mid1]+vec[mid2])/2.0;
    }
};