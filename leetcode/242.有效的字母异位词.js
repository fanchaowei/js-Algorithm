/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  const hash = new Map()
  for (let i = 0; i < s.length; i++) {
    if (hash.has(s[i])) {
      let val = hash.get(s[i])
      hash.set(s[i], ++val)
    } else {
      hash.set(s[i], 1)
    }
  }

  for (let k = 0; k < t.length; k++) {
    const key = t[k]
    if (hash.has(key)) {
      let val = hash.get(key)
      if (val === 0) {
        return false
      }

      hash.set(key, --val)
    } else {
      return false
    }
  }

  return true
}
// @lc code=end
