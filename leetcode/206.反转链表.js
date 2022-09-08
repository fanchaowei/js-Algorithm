/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  if (!head || !head.next) {
    return head
  }
  // 标识，放置原链表的上一个节点
  let prev = null
  // 标识，指向当前节点
  let cur = head
  while (cur) {
    // 获取下一个节点
    let next = cur.next
    // 将下一个节点指向上一个节点
    cur.next = prev
    // 将上一个节点的标识赋值为当前节点
    prev = cur
    // 将当前节点的标识赋值为下一个节点，为下一轮循环做准备。
    cur = next
  }
  return prev
}
// @lc code=end
