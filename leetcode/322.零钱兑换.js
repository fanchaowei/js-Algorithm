/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!amount) {
    return 0
  }
  /**
   * 创建需要兑换零钱金额 +1 的数组(因为从 0 块钱开始)，并给数组都赋值正无穷
   * 这个数组的 key 相当于多少钱，值相当于找零的数量
   * 比如要找零 12 块钱，那我们把从 0 块钱开始，1块、2块、3块...10块、11块，需要找零的数量都存起来
   * 那么找零 12 块钱就相当于：找零7块钱的数量 + 找零5块钱的数量。
   * 或者相当于：找零10块钱的数量 + 找零2块钱的数量
   * 这样我们通过数组的组合，找出最优解即可。
   */
  let dp = Array(amount + 1).fill(Infinity)
  // 0 块钱的时候不需要硬币，所以值为 0
  dp[0] = 0
  // 循环开始找零
  for (let i = 0; i < coins.length; i++) {
    // 循环硬币，从每个硬币开始找零
    for (let k = coins[i]; k <= amount; k++) {
      // 从这个硬币的面额开始，往上找零
      // 比如 coins[i] 是1块钱，那从找零1块钱开始，找零2块、3块...找零 amount 块所需要的数量是多少。

      // 如果找得开，那么它的值一定小于正无穷，所以两值比较取最小值。
      // k - coins[i] 意思就是先减去一个当前这个面额，找前面找零的面额是多少数量，最后 +1 把当前这个面额的一个币加回来。
      // 比如：k 当前是 12 元，coins[i] 为 2，那 k - coins[i] 等于 10 ，就是查看找零 10 元所用的数量是多少，再 +1 一个当前这个面额（2元）的币
      dp[k] = Math.min(dp[k - coins[i]] + 1, dp[k])
    }
  }
  // 返回时，如果是正无穷，说明找不开。
  return dp[amount] === Infinity ? -1 : dp[amount]
}
// @lc code=end
