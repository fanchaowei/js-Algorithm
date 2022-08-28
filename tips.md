# 数据结构
1. 链表
```js
class Node {
  // 链表存在当前值和下个值的索引
  this.val
  this.next
}

// 循环遍历链表
while (head) {
  head = head.next
}

// 一般会设置一个哨兵节点，来充当首节点，避免一些问题
let dummy = {
  next: head
}


```
2. 数组
```js

for(let i=0;i<arr.length;i++) {
  arr[i]
  // 处理 
}

```
3. 树 (前端最需要刷的数据结构)
``` js

  function walk(treeNode) {
    if(treeNode === null) {
      return
    }

    // 前序遍历
    // 处理 treeNode 的代码
    walk(treeNode.left)
    walk(treeNode.right)

    // 中序遍历
    walk(treeNode.left)
    // 处理 treeNode 的代码
    walk(treeNode.right)

    // 后序遍历
    walk(treeNode.left)
    walk(treeNode.right)
    // 处理 treeNode 的代码
  }

```

# 算法思想
1. 二分 (搜索)
场景：有序的数组里，找对应的值。
```js

let left = 0
let right = arr.length - 1
while (left < right) {
  // >> 1  是整除 2 的意思
  let mid = (left + right) >> 1
  if (arr[mid] >= nums[i]) {
    right = mid
  } else {
    left = mid + 1
  }
}
// 循环过后 left 大于 right ，arr[left] 一般就是要找的那位
arr[left]

```
2. 双指针 (快慢指针，头尾指针)
  1. 链表，数组
```js

// 快慢指针
let fast = head
let slow  = head
while(fast && fast.next) {
  // 怎么走具体看题
}

```
3. 递归和回溯 (画递归树) *重点
```js

function backTrack(数据，路径缓存) {

  循环:(取下一个值)
    标记
    backTrack(数据，路径缓存)
    取消标记
}

```
4. 动态规划 *重点
```js

边界条件
循环：
  递推公式


1. 先暴力解
2. 研究优化，如：加备忘录
3. 考虑递推

```
5. 贪心
6. bfs (广度优先)  dfs (深度优先)
7. 其他(位运算、哈希表、图)