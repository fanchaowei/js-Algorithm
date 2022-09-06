/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    // 左右指针向内走
    // 将左右指针的值相加得 sum ，sum 大于目标值则右指针向内移动一位，反之左指针向右移动一位
    let sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum > target) {
      right--
    } else {
      left++
    }
  }
}
// @lc code=end
