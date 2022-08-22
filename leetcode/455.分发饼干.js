/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 对数组进行排序，便于后续操作
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)

  // 喂饱的人数统计
  let ret = 0
  // 饼干数组的位数
  let index = s.length - 1
  // 从胃口最大的小孩开始喂食
  // 我们的策略是：饼干尽可能的喂饱胃口大的人
  for (let i = g.length - 1; i >= 0; i--) {
    // 如果饼干还有，并且当前最大的饼干大于当前小孩的食量，则记录
    if (index >= 0 && s[index] >= g[i]) {
      index--
      ret++
    }
  }
  return ret
}
// @lc code=end
