/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) {
    return []
  }
  // 定义一个头部的哨兵节点
  let dummy = {
    next: head,
  }
  // 设置快慢指针
  let fast = (slow = dummy)
  // 先让快指针先走 n 位
  while (n--) {
    fast = fast.next
  }
  // 然后快慢指针一起走，等 fast 走到最后一位，对于 slow 来说就是倒数第 n 位
  while (fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }
  // 删除倒数第 n 位
  slow.next = slow.next.next
  return dummy.next
}
// @lc code=end
