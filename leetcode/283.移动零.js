/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 0) {
    return []
  }

  // 创建快慢指针
  let slow = 0
  let fast = 0
  while (fast < nums.length) {
    // 如果当前值不为0，则将其和慢指针的位置调换，将有值的换到前面
    if (nums[fast]) {
      ;[nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }

    fast++
  }
  return nums
}
// @lc code=end
