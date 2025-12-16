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
  /**
   * 快慢指针
   * fast 用于循环数组，slow 用于标记非零数据当前位置
   * 当 fast 遍历到非 0 数据时，赋值给 slow 的位置，等 fast 遍历完，将 slow 后续都补上 0
   */
  let slow = 0

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast]
      slow++
    }
  }

  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0
  }
}

// var moveZeroes = function (nums) {
//   if (nums.length === 0) {
//     return []
//   }

//   // 创建快慢指针
//   let slow = 0
//   let fast = 0
//   while (fast < nums.length) {
//     // 如果当前值不为0，则将其和慢指针的位置调换，将有值的换到前面
//     if (nums[fast]) {
//       ;[nums[slow], nums[fast]] = [nums[fast], nums[slow]]
//       slow++
//     }

//     fast++
//   }
//   return nums
// }
// @lc code=end
