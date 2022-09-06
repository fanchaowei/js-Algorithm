/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  /**
   * 该题的解法是通过双指针，将两边双指针计算后的值进行对比，哪个值更大就赋值到新数组的当前的最后一位(依次赋值)。
   */
  // 定义双指针
  let left = 0
  let right = nums.length - 1
  // 定义一个位数标识，值为原数组的最大值，用于循环时新数组的赋值使用
  let k = right
  // 创建一个空的新数组, 用于排序的值
  let arr = new Array()
  while (left <= right) {
    // 算出左右两个指针对应的值
    let l = nums[left] * nums[left]
    let r = nums[right] * nums[right]
    // 如果右指针的值大于左指针，则把右指针的值排到新数组的 k 位，然后右指针向内走一位，将排序完的那位丢弃
    if (l < r) {
      arr[k] = r
      right--
    } else {
      // 反之则 k 位赋值左指针的值，左指针向右走一位
      arr[k] = l
      left++
    }
    // 执行一次 k-- 一次，因为循环一次就排序完一位
    k--
  }
  return arr
}
// @lc code=end
