# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from typing import Optional, List

from ds.listnode import ListNode


class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        temp_unsorted = []
        for i in lists:
            while i:
                temp_unsorted.append(i)
                i = i.next

        temp_sorted = sorted(temp_unsorted, key = lambda node: node.val)

        dummy = ListNode()
        temp = dummy
        for i in temp_sorted:
            temp.next = i
            temp = temp.next

        return dummy.next
