/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  const res = []

  const loop = (layer) => {
    if (!layer.length) {
      return
    }
    const layerRes = []
    const nextLayer = []

    layer.forEach((item) => {
      if (item) {
        layerRes.push(item.val)
        if (item.left) {
          nextLayer.push(item.left)
        }
        if (item.right) {
          nextLayer.push(item.right)
        }
      }
    })

    res.push(layerRes)
    loop(nextLayer)
  }

  loop([root])

  return res
}
// @lc code=end
