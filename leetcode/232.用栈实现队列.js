/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function () {
  this.inStack = []
  this.outStack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop())
    }
  }

  return this.outStack.pop()
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop())
    }
  }

  const res = this.outStack.pop()
  this.outStack.push(res)
  return res
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (!this.inStack.length && !this.outStack.length) {
    return true
  }

  return false
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
