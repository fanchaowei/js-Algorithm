/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  // 创建快慢指针
  let slow = 0
  let fast = 0
  /**
   * 本题解法通过快慢指针来解
   * 快慢指针都从0开始，每次循环快指针都会加1，
   * 如果快指针和慢指针的值相同，则慢指针不动，如果不同，则慢指针移动一步，并将当前值值变为快指针的值。
   * 例子：[1,1,2,3,3,4,4,4,5]
   * 当 fast = 2 时，快慢两值不同，slow++ 变为 1，然后赋值为 fast 的值
   * 变为：[1,2,2,3,3,4,4,4,5]
   * 同理，随着推进会变为：[1,2,3,3,3,4,4,4,5]、[1,2,3,4,3,4,4,4,5]...
   * 最终变为：[1,2,3,4,5,4,4,4,5]
   * 而 slow + 1，则为筛选完后，新数组的长度
   */
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
}
// @lc code=end
