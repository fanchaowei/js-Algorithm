/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (!n) {
    return nums1
  }

  /**
   * 三个指针：总长度 i，nums1 实际的长度指针 k ，nums2 实际长度指针 j
   * 倒序合并
   */
  let i = m + n - 1
  let k = m - 1
  let j = n - 1

  while (j > -1) {
    if (nums1[k] >= nums2[j]) {
      nums1[i] = nums1[k]
      k--
    } else {
      nums1[i] = nums2[j]
      j--
    }
    i--
  }
}
// @lc code=end
