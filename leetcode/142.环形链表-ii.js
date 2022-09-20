/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 *  本题可以将环形代码通过快慢指针分为 3 段
 *     a       b      c
 *  -------|-------|-------
 *             slow/fast
 *  a 段为循环前的一段，b 段最后的节点是快慢指针相遇的节点，c 段为快慢指针相遇后的一段
 *  慢指针走过了 a+b
 *  快指针走过了 a+b+n(b+c)
 *  得出 2(a+b) = a+b+n(b+c) ，因为快指针走两步，慢指针走一步，快指针的路程是慢指针的两倍
 *  a = (n-1)(b+c)+c  n=1 时，a=c
 *  所以再从 head 出发一个 cur 指针(和 slow 一样一次走一步)，然后 slow 继续走，cur 和 slow 相遇的就是循环连接的位置
 *
 * 简单来说：在快慢指针相遇后，再来一个从头走的 cur 指针，跟着 slow 指针继续走，他们俩相遇的节点就是循环链接的位置
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null) {
    return null
  }
  let slow = (fast = head)
  // fast 走得快，所以如果 fast 为 null ，说明有尽头
  while (fast !== null) {
    // 快慢指针开始走动，slow 走一步，fast 走两步
    slow = slow.next
    if (fast.next !== null) {
      fast = fast.next.next
    } else {
      // 如果 fast.next 为 null ，说明有尽头，不是循环指针
      return null
    }

    // 快慢指针相等，走到了相遇的地方
    if (fast === slow) {
      // 定义一个 cur 指针从头开始走，走到和 slow 相遇的地方，就是循环连接的节点
      let cur = head
      while (cur !== slow) {
        cur = cur.next
        slow = slow.next
      }
      return cur
    }
  }
  return null
}
// @lc code=end
