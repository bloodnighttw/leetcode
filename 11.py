class Solution:
    stack = []

    mapping = {
        1000:"M",
        900:"CM",
        500:"D",
        400:"CD",
        100:"C",
        90:"XC",
        50:"L",
        40:"XL",
        10:"X",
        9:"IX",
        5:"V",
        4:"IV",
        1:"I"
    }

    def intToRoman(self, num: int) -> str:
        strs = ""
        for k, v in self.mapping.items():
            freq = num // k
            num %= k
            strs += v*freq
        return strs