/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 创建哨兵节点
  let dummy = {
    next: null,
  }
  // 用于循环使用的标识
  let tmp = dummy
  while (list1 !== null && list2 !== null) {
    // 判断 list1 和 list2 当前节点的值，哪个值 tmp 就指向哪个并且那个往前走一位。
    if (list1.val >= list2.val) {
      tmp.next = list2
      list2 = list2.next
    } else {
      tmp.next = list1
      list1 = list1.next
    }
    // tmp 走到当前位
    tmp = tmp.next
  }
  // 循环结束时，因为循环的判断条件会存在一位没有赋值，所以进行最后一位的赋值
  tmp.next = list1 === null ? list2 : list1
  // 返回头节点
  return dummy.next
}
// @lc code=end
