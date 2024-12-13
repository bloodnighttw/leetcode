# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from typing import Optional, List

from ds.listnode import ListNode


class Solution:
    def modifiedList(self, nums: List[int], head: Optional[ListNode]) -> Optional[ListNode]:
        nums_set = set(nums)
        dummy = ListNode(val=0, next=head)

        prev = dummy
        current: ListNode = dummy.next
        while current:
            if current.val not in nums_set:
                prev.next = current
                prev = current
            current = current.next

        prev.next = None

        return dummy.next

