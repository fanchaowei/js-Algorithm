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
    return head
  }

  const dummy = new ListNode()

  dummy.next = head

  // 从虚拟头部节点出发，处理要删除 head 第一个节点的情况
  let slow = dummy
  let fast = dummy

  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }

  slow.next = slow.next.next

  return dummy.next
}
