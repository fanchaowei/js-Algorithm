/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * 开始反转链表前
 *  1->2->3->4->5  left:2 right:4
 * tmp
 *   prev
 *      cur
 * 第一次反转结束
 *  1->2<-3 4->5
 *      prev
 *         cur
 * 第二次反转结束
 *  1->2<-3<-4 5
 * tmp      prev
 *            cur
 * tmp.next.next => cur
 *  上面的操作后，2 指向了 5
 *  1->2<-3<-4
 *     |->5
 * tmp      prev
 *       cur
 *
 * tmp.next->prev
 * 最后的指向正确了
 * 5<-2<-3<-4<-1
 *
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 上面有解题流程

  // 定义哨兵节点，用于最后返回头节点
  let dummy = {
    next: head,
  }

  // 定义用于遍历的标识
  let tmp = dummy
  // 链表到 left 之前一位
  for (let i = 0; i < left - 1; i++) {
    tmp = tmp.next
  }
  // left 的这一位
  let prev = tmp.next
  // left 的下一位
  let cur = prev.next
  // 上面之所以定义 left 以及其下一位，是用来两者做反转使用
  // 开始循环反转节点
  for (let i = 0; i < right - left; i++) {
    // 交换节点
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  // 将原链表的 left 位置的节点指向 cur，
  // 反转结束后的 cur 是 right+1 位，刚好接上 right 后续的链表节点
  tmp.next.next = cur
  // 将链表 left-1 位接到反转后新的下一位上。
  // 反转结束后的 prev 是原来的 right 位。
  tmp.next = prev

  return dummy.next
}
// @lc code=end
