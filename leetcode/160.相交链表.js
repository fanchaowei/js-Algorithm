/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * headA: 1=>2=>3=>4  分为 a+c 段
 * headB:    5=>3=>4  分为 b+c 段
 * a 段为 headA 不相交的一段；b 段则是 headB 的，c 段则为相交段
 *
 * // 将 A B 两条链表分别项链在一起
 * A=>B:  1=>2=>3=>4=>5=>3=>4  a+c+b+c
 * B=>A:  5=>3=>4=>1=>2=>3=>4  b+c+a+c
 * 这样连接的好处是他们长度相等了。我们看字母段，前三段是相同长度的，所有消去前三段，最后一段一定是相交段，这样就能找到相交节点
 *
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 定义标识
  let curA = headA
  let curB = headB
  while (curA !== curB) {
    // 两个标识开始循环走，先走完自己段，然后再走对方断
    // a+c+b+c
    // b+c+a+c
    // 最后 curA 和 curB 会一起到第四段，会相等。
    // 相等的节点即是相交节点
    curA = curA === null ? headB : curA.next
    curB = curB === null ? headA : curB.next
  }
  return curA
}
// @lc code=end
