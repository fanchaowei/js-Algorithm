/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const stack = []

  const config = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  for (let i = 0; i < s.length; i++) {
    const str = s[i]

    if (Object.keys(config).includes(str)) {
      stack.push(str)
    } else if (stack.length === 0) {
      return false
    } else {
      const _val = stack.pop()
      if (config[_val] !== str) {
        return false
      }
    }
  }

  return stack.length === 0 ? true : false
}

// var isValid = function (s) {
//   let stack = []
//   const obj = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//   }
//   for (let i = 0; i < s.length; i++) {
//     const ele = s[i]
//     if (ele in obj) {
//       // 如果是 obj 的 key ，则传入栈中
//       stack.push(ele)
//     } else {
//       // 如果不是 obj 的 key，说明是反括号，将栈中最后一位取出和其比对。
//       // 如果比对不一样则输出 false
//       const lastEle = obj[stack.pop()]
//       if (lastEle !== ele) {
//         return false
//       }
//     }
//   }
//   // 如果栈中还有值，说明反括号没有全，返回 false
//   if (stack.length > 0) {
//     return false
//   }
//   return true
// }
// @lc code=end
