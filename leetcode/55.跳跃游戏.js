/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 计数，记录最大能跳跃到的位置
  let cover = 0
  // 循环，相当于开始跳跃
  for (let i = 0; i <= cover; i++) {
    // 每走一位，就将 cover 和当前数组值能跳跃到的位置进行比较，取最大的那个值
    // i + nums[i] 要加上 i ，是因为要算上前面走的位数
    cover = Math.max(cover, i + nums[i])
    // 如果 cover 大于等于 数组的位数，那说明可以走到
    if (cover >= nums.length - 1) {
      return true
    }
  }
  return false
}
// @lc code=end
