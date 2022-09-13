/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 本题先通过快慢指针，将数组前部分颠倒，类似：
  // [1,2,3,3,2,1] => [3,2,1,3,2,1]
  // 然后再将前部分与后部分做对比

  // 快慢指针
  let slow = (fast = head)
  // 链表上一位标识
  let prev
  while (fast && fast.next) {
    fast = fast.next.next

    // slow 开始反转
    // 记录 slow 的下一位
    let next = slow.next
    // 将 slow 的上一位赋值为原上一位
    slow.next = prev
    // 将上一位赋值为当前一位
    prev = slow
    // slow 赋值为原下一位
    slow = next
  }

  // 如果 fast 存在，说明是该链表位数是奇数，slow 再向前走一位进入到后半段
  if (fast) {
    slow = slow.next
  }

  while (prev && slow) {
    if (prev.val !== slow.val) {
      return false
    }
    prev = prev.next
    slow = slow.next
  }
  return true
}
// @lc code=end
