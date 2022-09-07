/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  /**
   * 通过快慢指针的方式，确定范围，将快慢指针内的值相加，然后判断是否大于等于 target
   */
  // 数组的长度
  let len = nums.length
  // 大于 target 的长度，初始值定义一个比数组长度大一位的值，对比判断用
  let result = len + 1
  // 快慢指针
  let slow = (fast = 0)
  // 指针内相加的值
  let sum = 0
  while (fast < len) {
    // 将快指针的值相加，加完后快指针走一位
    sum += nums[fast++]
    while (sum >= target) {
      // 如果相加值大于等于 target，算出快慢指针的位数
      let subLen = fast - slow
      // 和原先的 result 对比，取最小的一位
      result = Math.min(result, subLen)
      // 结束 result 赋值后，慢指针要往上走一位，所以 sum 需要减去当前慢指针的值，将慢指针++
      sum -= nums[slow++]
    }
  }
  // 如果 result 大于 len ，说明 result 还是初始的那个 len + 1，则输出0。否则输出 result
  return result > len ? 0 : result
}
// @lc code=end
