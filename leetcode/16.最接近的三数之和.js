/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  /**
   * 解题思路与 15 题一致
   */
  let totalDiff
  let totalSum

  let left
  let right

  const sortNums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    left = i + 1
    right = nums.length - 1

    const _i = sortNums[i]

    while (left < right) {
      const sum = _i + sortNums[left] + sortNums[right]
      const diff = sum - target

      if ((!totalDiff && !totalSum) || Math.abs(diff) < totalDiff) {
        totalDiff = Math.abs(diff)
        totalSum = sum
      }

      if (sum > target) {
        right--
      } else if (sum < target) {
        left++
      } else {
        return totalSum
      }
    }
  }

  return totalSum
}
// @lc code=end
