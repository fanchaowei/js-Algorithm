/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 方式一、动态规划
// var lengthOfLIS = function (nums) {
//   let n = nums.length
//   if (!n) {
//     return 0
//   }
//   // dp 数组记录的是在 nums 数组的每一位在当前位置最大的长度值
//   // 用 1 填满是因为初始情况下他们自己都算一位
//   let dp = Array(n).fill(1)
//   // 循环每位数据
//   for (let i = 0; i < nums.length; i++) {
//     for (let k = 0; k < i; k++) {
//       // 在循环每位数据的时候，重新将前面的数据再循环一遍
//       // 为的就是和当前这位值比较大小，如果当前值大于前面的值，说明就是增长的
//       if (nums[i] > nums[k]) {
//         // 赋值为什么要 Math.max() 对比？
//         // 因为可能前面已经给 dp[i] 赋值了，并且值比当前 dp[k] + 1 大
//         dp[i] = Math.max(dp[i], dp[k] + 1)
//       }
//     }
//   }
//   // 将数组中最大的值输出
//   return Math.max(...dp)
// }

// 方式二、贪心 + 二分
var lengthOfLIS = function (nums) {
  let n = nums.length
  if (!n) {
    return 0
  }

  // 初始数组
  let arr = [nums[0]]
  // 循环 nums 数组每一个值
  for (let i = 0; i < n; i++) {
    if (nums[i] > arr[arr.length - 1]) {
      // 如果当前值比 arr 数组最大值大，直接添加
      arr.push(nums[i])
    } else {
      // 否则使用二分法，确认这个值应该在 arr 数组的哪两个值之间，将大的那个值替换为当前值
      // 这样做的目的是为了 arr 数组里自增长的值尽量增长的慢(也就是尽量的小)
      // 类似于： [1,3,5,7] 来了一个 4，则变为 [1,3,4,7]
      // 如果增长的慢，也就意味着后续可以追加的最大值尽可能的多
      // 这样得出来的数组不是正确的，但是长度是正确的
      let left = 0
      let right = arr.length - 1
      while (left < right) {
        // >> 1  是整除 2 的意思
        let mid = (left + right) >> 1
        if (arr[mid] >= nums[i]) {
          right = mid
        } else {
          left = mid + 1
        }
      }
      arr[left] = nums[i]
    }
  }
  return arr.length
}
// @lc code=end
