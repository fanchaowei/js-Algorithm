/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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

var postorderTraversal = function (root) {
  let res = []

  const loop = (root) => {
    if (!root) {
      return
    }

    loop(root.left)
    loop(root.right)
    res.push(root.val)
  }
  loop(root)

  return res
}

// var postorderTraversal = function (root) {
//   // 后序遍历是 先找左侧节点，再找右侧节点，最后再处理处理自己。
//   let arr = []
//   function dfs(root) {
//     if (!root) {
//       return
//     }
//     dfs(root.left)
//     dfs(root.right)
//     arr.push(root.val)
//   }
//   dfs(root)
//   return arr
// }
// @lc code=end
