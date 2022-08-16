// 时间复杂度高，性能慢的 leftpad
function leftpad(str, length, ch) {
  // 获取需要补位的长度
  const len = length - str.length + 1
  // 设置需要补位的长度的数组并用 ch 填充为字符串进行拼接
  return Array(len).join(ch) + str
}

console.log('leftpad', leftpad('hello', 10, '0'))

/**
 * 二分优化的 leftpad
 * 通过位运算进行补位
 * 例子：需要补充 10 位
 * '0'       0
 * '00'      1
 * '0000'    0
 * '000000'  1
 * 10 的二进制是 1010 ，即需要补位 2^3 + 2^1 位
 * @param {*} str 原字符串
 * @param {*} length 填充完的字符串长度
 * @param {*} ch 填充的字符串
 * @returns
 */
function leftpad2(str, length, ch) {
  // 获取需要补位的长度
  let len = length - str.length

  // 补位的字符串变量
  let total = ''
  // 每一次循环就是一次位数的左增长，从 2^0 开始
  while (true) {
    // 倘若被 2 取余获得 1 ，则当前位需要补位
    // if (len % 2 === 1) {
    if (len & 1) {
      total += ch
    }
    // 如果 len 为 1，说明已经到最后一位了
    if (len === 1) {
      return total + str
    }
    // 因为每次循环都是一次位数的左递增，所以 ch 也需要增加一位
    ch += ch
    // 本次循环处理完后，len 需要向右递减一位
    // len = parseInt(len / 2)
    len = parseInt(len >> 1)
  }
}
console.log('leftpad2', leftpad2('hello', 10, '0'))

// 性能判断

console.time('leftpad')

for (let i = 0; i < 100000; i++) {
  leftpad('hello', 10000, '0')
}

console.timeEnd('leftpad')

console.time('leftpad2')

for (let i = 0; i < 100000; i++) {
  leftpad2('hello', 10000, '0')
}

console.timeEnd('leftpad2')
