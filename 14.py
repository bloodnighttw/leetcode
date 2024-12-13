from typing import List


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        first, others = strs[0], strs[1:]
        if not others:
            return first

        slice = -1
        flag = False
        for index,char in enumerate(first):
            for str in others:
                if index < len(str) and str[index] == char:
                    print(f"{index}/{len(str)} : {str[index]}")
                else:
                    flag = True
                    break

            if flag:
                break
            else:
                slice = index
        return first[0:slice+1]

if __name__ == '__main__':
    inputs = [
        ["flower","flowe"],
        ["dog","racecar","car"]
    ]

    for i in inputs:
        result = Solution().longestCommonPrefix(i)
        print(f"result:{result}")