/**
 * 链表中的数据
 * val 当前数据
 * next 下一个数据的 Node 实例对象
 */
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/**
 * 生成链表
 * head 第一位数据
 * length 链表长度
 */
class LinkNodeList {
  constructor() {
    this.head = null
    this.length = 0
  }

  // 新增
  append(val) {
    // 创建新增数据的实力对象
    let node = new Node(val)
    // 创建标识
    let p = this.head
    if (this.head) {
      // 存在 head ，则找到链表的最后一位，把当前需要新增的 node 赋值给最后一位的 next
      while (p.next) {
        p = p.next
      }
      p.next = node
    } else {
      // 不存在 head ，说明链表为空。
      this.head = node
    }
    this.length++
  }
  // 打印当前链表
  print() {
    let p = this.head
    let ret = ''
    if (this.head) {
      do {
        ret += `${p.val} =>`
        p = p.next
      } while (p.next)
      // 因为 p.next 不存在跳出循环后，p 实际是最后一位，所以需要再手动输出最后一位
      ret += p.val
      console.log('ret', ret)
    } else {
      console.log('empty')
    }
  }
}

// let linkNodeList = new LinkNodeList()
// linkNodeList.append(1)
// linkNodeList.append(2)
// linkNodeList.append(3)
// linkNodeList.append(4)

// console.log('@@@', linkNodeList.length)
// linkNodeList.print()

let cache = new Map()
cache.set('a', 1)
cache.set('b', 2)
cache.set('c', 3)
console.log('@@@', cache.keys().next())
