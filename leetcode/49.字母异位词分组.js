/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (!strs.length) {
    return [strs]
  }

  const hash = new Map()

  strs.forEach((item) => {
    // 多了排序的步骤
    const sortItem = item.split('').sort().join('')
    if (!hash.has(sortItem)) {
      hash.set(sortItem, [item])
    } else {
      const arr = hash.get(sortItem)
      arr.push(item)
      hash.set(sortItem, arr)
    }
  })

  return [...hash.values()]
}
// @lc code=end
