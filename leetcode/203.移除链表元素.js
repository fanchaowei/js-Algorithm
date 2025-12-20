/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) {
    return head
  }

  const dummy = new ListNode(0)
  dummy.next = head

  let cur = head
  let prev = null

  while (cur) {
    if (cur.val === val) {
      if (!prev) {
        dummy.next = cur.next
      } else {
        prev.next = cur.next
      }
    } else {
      prev = cur
    }
    cur = cur.next
  }

  return dummy.next
}

// var removeElements = function (head, val) {
//   if (head === null) {
//     return head
//   }

//   head.next = removeElements(head.next, val)

//   return head.val === val ? head.next : head
// }

// @lc code=end
