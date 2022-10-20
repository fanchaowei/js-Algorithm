/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 递归写法
// var isSameTree = function (p, q) {
//   if (!p && !q) {
//     return true
//   }
//   if (!p || !q) {
//     return false
//   }
//   if (p.val !== q.val) {
//     return false
//   }
//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
// }

// 迭代写法
var isSameTree = function (p, q) {
  const travese = (p, q) => {
    if (!p && !q) {
      return true
    }
    if (!p || !q) {
      return false
    }
    // 将左右节点迭代下去
    const left = travese(p.left, q.left)
    const right = travese(p.right, q.right)
    // 如果值相等，而且左右节点迭代最后的结果都为 true，说明是相同的树
    if (p.val === q.val && left && right) {
      return true
    }
    return false
  }
  return travese(p, q)
}

// @lc code=end
