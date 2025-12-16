/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /**
   * Map 内存储 nums 的每个值与 target 的差值
   * 每次循环时，map.has 查找 map 内是否有 nums[i]
   */
  let res = [0, 0]

  const _map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const diff = target - nums[i]

    if (_map.has(num)) {
      res = [_map.get(num), i]
      return res
    }

    _map.set(diff, i)
  }

  return res
}
// @lc code=end
