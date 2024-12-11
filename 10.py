from functools import cache


class Solution:
    def isMatch(self, s: str, p: str) -> bool:

        @cache
        def dfs(i,j):

            if i >= len(s) and j >= len(p):
                return True
            elif j>= len(p):
                # nothing to match, but s has something to be matched
                return False

            # match function
            match = ((i < len(s) and j < len(p)) # check bound
                     and (s[i] == p[j] or p[j] == '.')) # check match

            # repeat = (match and dfs(i+1,j))
            # skip = dfs(i,j+2)

            if j+1 < len(p) and p[j+1] == '*':
                return ((match and dfs(i+1,j)) # if match repeat
                        or dfs(i,j+2)) # if not we just ignore

            if match:
                return dfs(i+1,j+1)

            return False

        return dfs(0,0)


if __name__ == '__main__':
    inputs = [
        ("aa", "a"),
        ("aa", "a*"),
        ("ab", ".*"),
        ("aab", "c*a*b"),
        ("mississippi", "mis*is*p*."),

        ("a", "ab*"),
        ("a", ".*..a*"),
        ("a", ".*.."),
        ("a", ".*"),
    ]

    for s,p in inputs:
        print(s,p,Solution().isMatch(s, p))
        # Solution().isMatch(s, p)