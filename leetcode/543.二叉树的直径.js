/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  if (!root) {
    return 0
  }

  let sum = 0

  const loop = (root) => {
    if (!root) {
      return 0
    }

    const left = loop(root.left)
    const right = loop(root.right)

    sum = Math.max(sum, left + right)

    return Math.max(left, right) + 1
  }

  loop(root)

  return sum
}

// @lc code=end
