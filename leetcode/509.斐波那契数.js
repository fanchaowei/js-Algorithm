/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//   // 第一种：递归
//   // if(n<=1) {
//   //   return n
//   // }
//   // return fib(n-1) + fib(n-2)
//   // ------
//   // 第二种：动态规划
//   // let dp = [0, 1]
//   // for (let i = 2; i <= n; i++) {
//   //   dp[i] = dp[i - 1] + dp[i - 2]
//   // }
//   // return dp[n]
// }

// 第三种 递归+备忘录
// 好处是避免一些重复的相加
// function helper(memo, n) {
//   if (n <= 1) {
//     // 递归的结束条件
//     return n
//   }
//   if (memo[n]) {
//     // 递归过程中，如果发现 memo 中已经存在该值，直接返回，减少了一次重复的计算
//     return memo[n]
//   }
//   // 递归去相加，递归过程中会出现重复计算的，但我们存在备忘录 memo，在递归的过程中直接返回
//   memo[n] = helper(memo, n - 1) + helper(memo, n - 2)
//   return memo[n]
// }
// var fib = function (n) {
//   // 记录所有计算后得出的斐波那契数
//   let memo = []
//   return helper(memo, n)
// }

// 第四种 动态规划 减少空间复杂度
var fib = function (n) {
  if (n <= 1) {
    return n
  }
  // 不使用数组而使用变量去记录，减少空间复杂度
  let dp1 = 0
  let dp2 = 1
  let dp3
  for (let i = 2; i <= n; i++) {
    dp3 = dp1 + dp2
    dp1 = dp2
    dp2 = dp3
  }
  return dp3
}

// @lc code=end
