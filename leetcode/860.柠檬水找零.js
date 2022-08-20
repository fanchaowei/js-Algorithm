/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // 统计五元硬币和十元硬币的数量
  let fiveNum = 0
  let tenNum = 0

  // 循环模拟付钱的过程
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      // 5元直接收
      fiveNum++
    } else if (bills[i] === 10) {
      // 10元需要找零5元，没有则返回 false
      if (fiveNum > 0) {
        fiveNum--
        tenNum++
      } else {
        return false
      }
    } else {
      // 20元的情况
      if (fiveNum > 0 && tenNum > 0) {
        fiveNum--
        tenNum--
      } else if (fiveNum > 2) {
        fiveNum -= 3
      } else {
        return false
      }
    }
  }
  return true
}
// @lc code=end
