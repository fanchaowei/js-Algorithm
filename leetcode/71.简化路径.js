/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // 创建一个栈
  const stack = []
  // 将传入的字符串根据 / 拆分
  let paths = path.split('/')
  for (let i = 0; i < paths.length; i++) {
    const p = paths[i]
    if (p === '..') {
      // 如果是 .. 代表要找到上级，则把栈的最后一位推出
      stack.pop()
    } else if (p && p !== '.') {
      // 如果存在并且不是 . ，则说明是一级路径，将他存入栈中
      stack.push(p)
    }
  }
  // 将栈中的数据通过 / 进行重新拼接
  return '/' + stack.join('/')
}
// @lc code=end
