from typing import Optional

from ds.listnode import ListNode


class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:

        dummy = ListNode()
        temp = dummy

        while list1 and list2:
            if list1.val <= list2.val:
                temp.next = list1
                list1 = list1.next
            else:
                temp.next = list2
                list2 = list2.next

            temp = temp.next

        while list1:
            temp.next = list1
            list1 = list1.next
            temp = temp.next

        while list2:
            temp.next = list2
            list2 = list2.next
            temp = list2.next

        return dummy.next