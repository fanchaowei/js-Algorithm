/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @return {ListNode}
 */
var middleNode = function (head) {
  // 定义快慢指针，慢指针走一步快指针走两步，那么当快指针走到结尾的时候，慢指针刚好走到一半。
  let slow = (fast = head)
  // 注意条件的判断，只有 fast.next 存在，循环里的 fast.next.next 才不会报错
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
// @lc code=end
