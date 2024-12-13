from typing import List


class Solution:
    keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []

        strs = [""]
        for char in digits:
            mapping = self.keyboard[char]
            temp = []
            for prev in strs:
                for i in mapping:
                    temp.append(f"{prev}{i}")
            strs = temp

        return strs

if __name__ == '__main__':
    inputs = [
        "23",
        "2",
        "3",
        ""
    ]

    for i in inputs:
        result = Solution().letterCombinations(i)
        print(f"result:{result}")
        # Solution().letterCombinations(i)



