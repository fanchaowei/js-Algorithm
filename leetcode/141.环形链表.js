/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针
 * 慢的走一步，快的走两步。如果存在循环，则迟早 slow = fast
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    if (slow.next) {
      slow = slow.next
    } else {
      return false
    }

    if (fast.next && fast.next.next) {
      fast = fast.next.next
    } else {
      return false
    }

    if (slow === fast) {
      return true
    }
  }

  return false
}
// @lc code=end
