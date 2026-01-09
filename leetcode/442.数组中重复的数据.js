/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  /**
   * 思路：
   * 循环 nums，将对应的 value - 1（为什么 -1 是因为 nums 内值的范围是 [1, n]，n 超出了 nums 的检索长度） 的 nums[value-1] 的值变为负数。
   * 这样当下一次检查到 nums[value-1] 已经是负数了的时候，说明这个值是重复值
   */

  const res = []

  for (let i = 0; i < nums.length; i++) {
    const val = Math.abs(nums[i])
    const idx = val - 1

    if (nums[idx] < 0) {
      res.push(val)
    } else {
      nums[idx] = -nums[idx]
    }
  }

  return res
}
// @lc code=end
