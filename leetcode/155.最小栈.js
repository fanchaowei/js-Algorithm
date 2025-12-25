/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function () {
  this.stack = []
  this.minStack = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  if (this.minStack.length === 0) {
    this.minStack.push(val)
  } else if (this.minStack[this.minStack.length - 1] >= val) {
    this.minStack.push(val)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const res = this.stack.pop()
  if (this.minStack[this.minStack.length - 1] === res) {
    this.minStack.pop()
  }
  return res
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  const res = this.stack.pop()

  this.stack.push(res)

  return res
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
