/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
// var isSymmetric = function (root) {
//   const travese = (root1, root2) => {
//     if (root1 === null && root2 === null) {
//       return true
//     }
//     if (root1 === null || root2 === null) {
//       return false
//     }
//     if (root1.val === root2.val) {
//       return (
//         travese(root1.left, root2.right) && travese(root1.right, root2.left)
//       )
//     }
//     return false
//   }
//   return travese(root.left, root.right)
// }

var isSymmetric = function (root) {
  if (!root) {
    return true
  }

  let isSym = true

  const loop = (root1, root2) => {
    if (!isSym || (!root1 && !root2)) {
      return
    }
    if ((!root1 && root2) || (root1 && !root2)) {
      isSym = false
      return
    }
    if (root1.val !== root2.val) {
      isSym = false
      return
    }

    loop(root1.left, root2.right)
    loop(root1.right, root2.left)
  }

  loop(root.left, root.right)

  return isSym
}
// @lc code=end
