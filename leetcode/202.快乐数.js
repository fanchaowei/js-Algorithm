/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  /**
   * 该题解法的核心在于记录它是否会无限循环
   * 将每次的值都存到 Set 内，判断是否有重复的值，有则进入循环了
   */
  if (Number(n) === 1) {
    return true
  }

  const hash = new Set()
  let sum = n.toString()

  hash.add(n)

  while (true) {
    let count = 0
    for (let i = 0; i < sum.toString().length; i++) {
      count += Number(sum[i]) * Number(sum[i])
    }
    if (count === 1) {
      return true
    }
    if (hash.has(count)) {
      return false
    }
    hash.add(count)
    sum = count.toString()
  }

  return false
}
// @lc code=end
