/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   if (nums.length === 0) {
//     return 0
//   }
//   // 定义一个指针
//   let k = 0
//   // 与 26 题类似，循环数组，如果值不等，则将 nums[i] 赋值到 nums[k]，k++ 移动一位。
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i]
//       k++
//     }
//   }
//   return k
// }
var removeElement = function (nums, val) {
  if (nums.length === 0) {
    return 0
  }
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  }
  return k
}
// @lc code=end
