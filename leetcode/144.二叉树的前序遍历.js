/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// 递归写法
// var preorderTraversal = function (root) {
//   // 前序遍历是先处理自己，再找左侧节点，最后找右侧节点
//   let arr = []
//   function dfs(root) {
//     if (!root) {
//       return
//     }
//     arr.push(root.val)
//     dfs(root.left)
//     dfs(root.right)
//   }
//   dfs(root)
//   return arr
// }

// 迭代写法
var preorderTraversal = function (root) {
  let res = []
  // 定义一个栈，初始先将二叉树的顶部节点传入
  let stack = [root]

  if (!root) {
    return []
  }
  // 循环内虽然会弹出节点，但是会将节点的左右子节点再传入栈中，所以会一直循环至树的全部节点
  while (stack.length) {
    // 将节点弹出，然后进行操作
    let cur = stack.pop()
    res.push(cur.val)
    // 操作完后，将弹出的节点的左右子节点传入栈中，继续循环操作
    cur.right && stack.push(cur.right)
    cur.left && stack.push(cur.left)
  }
  return res
}
// @lc code=end
