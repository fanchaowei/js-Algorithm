/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0)
  const head = dummy

  let dummy1 = l1
  let dummy2 = l2
  let tag = 0

  while (dummy1 || dummy2 || tag) {
    const val1 = dummy1 && dummy1.val ? dummy1.val : 0
    const val2 = dummy2 && dummy2.val ? dummy2.val : 0
    let sum = val1 + val2
    if (tag) {
      sum += tag
    }

    tag = Math.trunc(sum / 10)
    let num = sum - tag * 10

    const node = new ListNode(num)
    dummy.next = node
    dummy = dummy.next

    dummy1 = dummy1 && dummy1.next ? dummy1.next : null
    dummy2 = dummy2 && dummy2.next ? dummy2.next : null
  }

  return head.next
}
// @lc code=end
