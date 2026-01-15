/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
  if (!root) {
    return 0
  }

  // 负无穷
  let sum = -Infinity

  const loop = (root) => {
    if (!root) {
      return 0
    }

    const left = Math.max(0, loop(root.left))
    const right = Math.max(0, loop(root.right))

    const val1 = root.val + left + right
    const val2 = root.val + left
    const val3 = root.val + right

    const maxVal = Math.max(val1, val2, val3)
    sum = Math.max(sum, maxVal)

    return Math.max(val2, val3)
  }

  loop(root)

  return sum
}
// @lc code=end
