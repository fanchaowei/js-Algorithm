/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let resStr = ''

  for (let i = 0; i < s.length; i++) {
    let code = s[i].charCodeAt(0)
    let str

    if (65 <= code && code <= 90) {
      code += 32
      str = String.fromCharCode(code)
    } else if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
      str = String.fromCharCode(code)
    } else {
      str = ''
    }
    resStr = resStr + str
  }

  let min = 0
  let max = resStr.length - 1

  while (min < max) {
    if (resStr[min] !== resStr[max]) {
      return false
    }

    min++
    max--
  }

  return true
}
// @lc code=end
