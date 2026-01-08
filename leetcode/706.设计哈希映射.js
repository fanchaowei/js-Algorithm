/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start

var MyHashMap = function () {
  this.SIZE = 1000
  // 先 .fill(null) 是因为 js 不会遍历空数组，所以先全部填入 null
  this.bucket = new Array(this.SIZE).fill([])
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const index = key % this.SIZE
  const arr = this.bucket[index]

  for (const arrVal of arr) {
    if (arrVal[0] === key) {
      arrVal[1] = value
      return
    }
  }

  arr.push([key, value])
}

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const index = key % this.SIZE
  const arr = this.bucket[index]

  for (const arrVal of arr) {
    if (arrVal[0] === key) {
      return arrVal[1]
    }
  }

  return -1
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const index = key % this.SIZE
  const arr = this.bucket[index]

  for (const arrVal of arr) {
    if (arrVal[0] === key) {
      arrVal[1] = -1
    }
  }
}
/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
