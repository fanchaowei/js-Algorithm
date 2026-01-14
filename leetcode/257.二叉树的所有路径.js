/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) {
    return []
  }
  const res = []

  const loop = (root, path) => {
    if (!root) {
      return
    }

    path += !path ? `${root.val}` : `->${root.val}`

    if (!root.left && !root.right) {
      res.push(path)
    }

    loop(root.left, path)
    loop(root.right, path)
  }

  loop(root, '')

  return res
}
// @lc code=end
