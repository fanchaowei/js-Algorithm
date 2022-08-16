/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 实现该算法的逻辑：
  //   left->  <-right
  // [-1,0,1,2,-1,-4]
  // 循环以此次将最前位 i 拿出，然后在取出后的数组设立左右指针。
  // left 从 i+1 开始依次往右走
  // right 从数组最后一位开始往左走
  // 当 i、left、right 的数组值相加为 0 ，则找到。
  // 如果值偏小则是 left 值太小，往右走一位。偏大则 right 往左走一位
  if (nums.length < 3) {
    return []
  }
  const list = []

  // 对数组进行排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const count = nums[i] + nums[left] + nums[right]
      if (right === i) {
        right--
      } else if (count === 0) {
        // 将找到的值存入
        list.push([nums[i], nums[left], nums[right]])
        // 存入后继续寻找，判断一下左右的值和剩余内部的值，如果是相等的则跳过，因为等到的结果会和上面存入的是一样的。
        while (nums[left] === nums[left + 1]) {
          left++
        }
        left++
        while (nums[right] === nums[right - 1]) {
          right--
        }
        right--
      } else if (count > 0) {
        // 值大于0，说明右边的值过大。
        right--
      } else {
        // 值小于0，说明左边的值太小了
        left++
      }
    }
  }
  return list
}
// @lc code=end
