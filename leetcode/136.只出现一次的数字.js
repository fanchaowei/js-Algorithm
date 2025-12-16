/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  /**
   * 使用异或（^）开解题
   * 异或的关键特质：
   *    1. 相同为 0（3^3=0）;
   *    2. 与 0 异或则不变（3^0=3）;
   *    3. 满足交换律、结合律（a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b）。
   */

  let res = 0
  for (const n of nums) {
    res ^= n
  }
  return res
}
// @lc code=end
