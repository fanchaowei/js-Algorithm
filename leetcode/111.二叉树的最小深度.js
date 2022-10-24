/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归
// var minDepth = function (root) {
//   if (!root) {
//     return 0
//   }
//   if (!root.left && !root.right) {
//     return 1
//   }
//   if (!root.left) {
//     return 1 + minDepth(root.right)
//   }
//   if (!root.right) {
//     return 1 + minDepth(root.left)
//   }
//   return Math.min(minDepth(root.right), minDepth(root.left)) + 1
// }

// 迭代
var minDepth = function (root) {
  if (!root) {
    return 0
  }
  const stack = [root]
  // 记录深度
  let dep = 0
  // 外层循环，每循环一次就是一层
  while (true) {
    let size = stack.length
    dep++
    // 里层循环指的是这一层的左右子节点
    while (size--) {
      // 取出一个子节点
      const cur = stack.shift()
      // 如果没有左右子节点，则输出深度，找到最小深度
      if (!cur.left && !cur.right) {
        return dep
      }
      // 倘若存在左右子节点，则分别入栈
      cur.left && stack.push(cur.left)
      cur.right && stack.push(cur.right)
    }
  }
}
// @lc code=end
