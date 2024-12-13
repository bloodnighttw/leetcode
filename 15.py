from typing import List


class Solution:

    def threeSum(self, nums: List[int]) -> List[List[int]]:

        def deref(ans:tuple[int,int,int]):
            a1, a2, a3 = ans
            return [a1,a2,a3]

        nums.sort()
        ans = set()
        for index, value in enumerate(nums):
            # print(f"{index}:\t{value}")
            ptr1, ptr2 = 0, len(nums) - 1

            while ptr1 < index < ptr2:
                temp = nums[ptr1] + nums[index] + nums[ptr2]
                if temp == 0:
                    ans.add((nums[ptr1], nums[index], nums[ptr2]))
                    ptr1 += 1
                    ptr2 -= 1
                elif temp < 0:
                    ptr1 += 1
                elif temp > 0:
                    ptr2 -= 1

        return list(map(deref,ans))


if __name__ == '__main__':
    inputs = [
        [-1, 0, 1, 2, -1, -4],
        [],
        [0],
        [3,0,-2,-1,1,2]
    ]

    for i in inputs:
        result = Solution().threeSum(i)
        print(f"{i}-result:{result}")
        # Solution().threeSum(i)
