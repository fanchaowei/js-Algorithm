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
// 哈希表解法
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
    for (let i = 0; i < sum.length; i++) {
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

/**
 * 链表的解法，如果存在循环那必然会出现环，用快慢指针进行处理
 */
// var isHappy = function (n) {
//   if (n === 1) {
//     return true
//   }
//   const getNext = (num) => {
//     let sum = num.toString()
//     let count = 0
//     for (let i = 0; i < sum.length; i++) {
//       count += Number(sum[i]) * Number(sum[i])
//     }
//     return count
//   }

//   let slow = getNext(n)
//   let fast = getNext(getNext(n))

//   if (fast === 1) {
//     return true
//   }

//   while (slow !== fast) {
//     slow = getNext(slow)
//     fast = getNext(getNext(fast))

//     if (fast === 1) {
//       return true
//     }
//   }

//   return false
// }
// @lc code=end
