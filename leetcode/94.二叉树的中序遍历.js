/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 中序遍历是 先找左侧节点，在中间处理自己，再找右侧节点
  let arr = []
  function dfs(root) {
    if (!root) {
      return
    }
    dfs(root.left)
    arr.push(root.val)
    dfs(root.right)
  }
  dfs(root)
  return arr
}
// @lc code=end
