/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start

/**
 * 本题使用回溯和递归的思想
 * 例子：传入 [1,2,3]
 * 我们可以先将 1 取出塞入一个数组，留下[2,3]
 * 再将 2 取出塞入，接着取出塞入 3 ，该数组就是一个排列
 * 接着我们依次将 3、2 弹出。然后先塞入 3 ，再塞入 2 ，又是一个排列
 * 然后再依次弹出 3、2，发现已经没有更多排序，就把 1 也弹出。
 * 接下来我们先塞入 2，循环上面的流程。
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
//   const list = []
//   backTrack(list, [], nums)
//   return list
// }
// // 递归函数
// function backTrack(list, temp, nums) {
//   if (temp.length === nums.length) {
//     // 如果 temp 的长度和 nums 相同，那么就是塞满了。
//     // 将其存入 list 并返回
//     list.push([...temp])
//     return
//   }

//   // 循环遍历，就是塞入的过程
//   for (let i = 0; i < nums.length; i++) {
//     // 将已经塞入 temp 的数据排除
//     if (temp.includes(nums[i])) {
//       continue
//     }
//     // 塞入数据
//     temp.push(nums[i])
//     // 继续递归塞入下一个数据
//     backTrack(list, temp, nums)
//     // 将塞入的数据弹出，也就是回溯
//     temp.pop()
//   }
// }

var permute = function (nums) {
  if (!nums.length) {
    return []
  }
  const list = []
  const temp = []

  backTrack(list, temp, nums)
  return list

  function backTrack(list, temp, nums) {
    if (temp.length === nums.length) {
      list.push([...temp])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (temp.includes(nums[i])) {
        continue
      }
      temp.push(nums[i])
      backTrack(list, temp, nums)
      temp.pop()
    }
  }
}

// @lc code=end
