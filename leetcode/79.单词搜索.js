/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // 对输入的参数做判断，边缘处理
  if (board.length === 0) {
    return false
  }
  if (word.length === 0) {
    return true
  }

  // 记录行列
  const row = board.length
  const col = board[0].length
  // 由于数组中每个字母都能是开头，所以只能双重循环遍历数组
  for (let i = 0; i < row; i++) {
    for (let k = 0; k < col; k++) {
      // 将参数传入并进行寻找
      const res = find(i, k, 0)
      if (res) return true
    }
  }
  return false

  // 寻找的主要函数
  // i,k 为当前字母在数组中的定位。cur 为对应 word 中的位数，相当于位数标识(从0开始记)。
  function find(i, k, cur = 0) {
    // 如果 i，k 的值超出数组，返回 false ，边缘处理
    if (i < 0 || i > row - 1 || k < 0 || k > col - 1) {
      return false
    }

    const singleWord = board[i][k]

    // 如果字母不相等，则返回 false
    if (singleWord !== word[cur]) {
      return false
    }

    // 如果 cur 与 word 的长度相等，那说明找到了，返回 true
    if (cur === word.length - 1) {
      return true
    }

    // 将当前字母从数组中抽出，这样在后续查找中就不会找回到原位置了
    board[i][k] = null
    // 上下左右开始查找
    const res =
      find(i + 1, k, cur + 1) ||
      find(i - 1, k, cur + 1) ||
      find(i, k + 1, cur + 1) ||
      find(i, k - 1, cur + 1)

    // 回溯
    board[i][k] = singleWord

    // 返回结果
    return res
  }
}
// @lc code=end
