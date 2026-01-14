/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
/**
 * 我第一次实现的代码
 * 缺点：性能开销过大，不是最优解
 */
// var pathSum = function (root, targetSum) {
//   if (!root) {
//     return []
//   }
//   const res = []

//   const loop = (root, arr) => {
//     if (!root) {
//       return false
//     }

//     arr.push(root.val)

//     if (!root.left && !root.right) {
//       // 叶子节点需要 for 循环
//       let sum = 0
//       arr.forEach((item) => {
//         sum += item
//       })
//       if (sum === targetSum) {
//         res.push(arr)
//       }
//     }

//     // 每次都进行深拷贝
//     loop(root.left, [...arr])
//     loop(root.right, [...arr])
//   }

//   loop(root, [])

//   return res
// }

var pathSum = function (root, targetSum) {
  if (!root) {
    return []
  }
  const res = []

  const loop = (root, sum, arr) => {
    if (!root) {
      return false
    }

    arr.push(root.val)
    sum -= root.val

    if (!root.left && !root.right && sum === 0) {
      res.push([...arr])
    }

    loop(root.left, sum, arr)
    loop(root.right, sum, arr)

    arr.pop(root.val)
  }

  loop(root, targetSum, [])

  return res
}
// @lc code=end
