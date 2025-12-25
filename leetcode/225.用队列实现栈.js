/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function () {
  this.inQueue = []
  this.inTag = 0

  this.outQueue = []
  this.outTag = 0
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  while (this.inTag < this.inQueue.length) {
    this.outQueue.push(this.inQueue[this.inTag])
    this.inTag++
  }

  this.inQueue.push(x)

  while (this.outTag < this.outQueue.length) {
    this.inQueue.push(this.outQueue[this.outTag])
    this.outTag++
  }
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.inQueue[this.inTag++]
}

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.inQueue[this.inTag]
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  const isInQueueIsEmpty = this.inTag === this.inQueue.length ? true : false
  const isOutQueueIsEmpty = this.outTag === this.outQueue.length ? true : false

  if (isInQueueIsEmpty && isOutQueueIsEmpty) {
    return true
  }

  return false
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
