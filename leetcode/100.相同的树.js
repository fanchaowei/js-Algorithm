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

// 另一种遍历写法
// var isSameTree = function (p, q) {
//   const travese = (p, q) => {
//     if (!p && !q) {
//       return true
//     }
//     if (!p || !q) {
//       return false
//     }
//     // 将左右节点遍历下去
//     const left = travese(p.left, q.left)
//     const right = travese(p.right, q.right)
//     // 如果值相等，而且左右节点遍历最后的结果都为 true，说明是相同的树
//     if (p.val === q.val && left && right) {
//       return true
//     }
//     return false
//   }
//   return travese(p, q)
// }

// 迭代写法
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true
  }
  if (!p || !q) {
    return false
  }
  let queueP = [p]
  let queueQ = [q]
  // 开始迭代循环
  while (queueP.length && queueQ.length) {
    // 将栈内最后一项吐出
    const nodeP = queueP.pop()
    const nodeQ = queueQ.pop()
    if (nodeP.val !== nodeQ.val) {
      return false
    }
    if (nodeP.left && nodeQ.left) {
      // 如果两个节点的左子节点都存在则都推入栈中
      queueP.push(nodeP.left)
      queueQ.push(nodeQ.left)
    } else if (nodeP.left || nodeQ.left) {
      // 如果有一个是 null，则不相等，false
      return false
    }
    // 同上
    if (nodeP.right && nodeQ.right) {
      queueP.push(nodeP.right)
      queueQ.push(nodeQ.right)
    } else if (nodeP.right || nodeQ.right) {
      return false
    }
  }
  return true
}

// @lc code=end
