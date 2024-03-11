/*
 * @lc app=leetcode id=2 lang=cpp
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

#include <iostream>

using namespace std;

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {

        int carry = 0;
        ListNode start;
        ListNode * now = &start;


        while (l1 != nullptr && l2 != nullptr) {
            int dig = (carry+l1->val+l2->val) % 10;
            carry = (carry+l1->val+l2->val) / 10;
            now->next = new ListNode(dig);
            now = now->next;
            l1 = l1->next;
            l2 = l2->next;
        }

        while (l1 != nullptr) {
            int dig = (carry+l1->val) % 10;
            carry = (carry+l1->val) / 10;
            now->next = new ListNode(dig);
            now = now->next;
            l1 = l1->next;
        }

        while (l2 != nullptr ) {
            int dig = (carry+l2->val) % 10;
            carry = (carry+l2->val) / 10;
            now->next = new ListNode(dig);
            now = now->next;
            l2 = l2->next;
        }
        
        if(next)
            now->next = new ListNode(next);

        return start.next;
    }
};
// @lc code=end

