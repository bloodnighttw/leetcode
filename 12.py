
class Solution:
    mapping = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    #         ('I', 'V', 'X', 'L', 'C', 'D', 'M')
    def romanToInt(self, s: str) -> int:
        prev = 1000000
        sum = 0
        for i in s:
            value = self.mapping[i]
            if prev < value:
                sum = sum - prev + (value - prev)
            else:
                sum += value
            prev = value
        return sum