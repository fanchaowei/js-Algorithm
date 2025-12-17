/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  /**
   * 左右双指针
   * 要点注意：
   * 1. 要动的指针永远是值最小的那个指针。
   *    a. 因为指针移动，x 轴一定在变小，高度（即面积）根据最小的值决定，所以只有动最小的那个指针才有机会比之前的面积大
   */
  let left = 0
  let right = height.length - 1
  let maxArea = 0

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right])
    maxArea = Math.max(area, maxArea)

    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
  }

  return maxArea
}
// @lc code=end
