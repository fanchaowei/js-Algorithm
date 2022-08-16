const arr = [111, 1, 23, 57, 12, 7, 195, 144]

// sort() 函数可以进行排序
// arr.sort((a, b) => a - b)
// console.log(arr)

// 冒泡排序  时间复杂度：O(n^2)
function bubbleSort(arr) {
  let len = arr.length - 1
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 当前一位大于后一位时，交换位置
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
// console.log('冒泡', bubbleSort(arr))

// 快速排序  时间复杂度：O(n * lgn)
function quickSort(arr) {
  // 标识符
  const flag = arr[0]
  const left = []
  const right = []
  if (arr.length < 2) {
    // 递归结束的判断，如果数组为空或只有一位了，就不需要进行了
    return arr
  }
  for (let i = 1; i < arr.length; i++) {
    // 比标识符大的去右边，比标识符小的去左边
    if (arr[i] > flag) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  // 将左右数据以及标识符拼接在一起
  return quickSort(left).concat(flag, quickSort(right))
}
// console.log('快速排序', quickSort(arr))

/**
 * 原地快排
 * 与上面的二分法很像，只是不开辟更多的空间，而是类似冒泡的进行数值交换
 *    i->     <-j
 * [d,b,c,a,e,f,g]
 * 原地快排就是有两个头尾指针(第一位是 flag 对照值)，向中间一位一位的靠拢。
 * 如果 i 找到比对照值大的，j 找到比对照值小的，就将 i 与 j 的数组数值交换。
 * 遍历到 i >= j 时停止，然后将 flag 对照值与 i-1 位置的值交换(因为那个位置就是对照值该在的位置)。
 * 然后后面把左右两边的数值进行递归遍历，知道最后得出结果。
 * @param {*} arr 需要排序的数组
 * @param {*} start 起始位置
 * @param {*} end 末尾位置
 * @returns
 */
function quick(arr, start, end) {
  // 确定 flag 对照值
  const init = start
  const flag = arr[init]
  // 第一位是对照值，所以直接到下一位
  start++
  while (start <= end) {
    // 如果左边的值小于 flag 则跳到下一位，否则停下。
    while (arr[start] < flag) {
      start++
    }
    // 如果右边的值大于 flag 则跳到下一位，否则停下。
    while (arr[end] > flag) {
      end--
    }
    // 对停下的左右两个值进行判断
    if (start < end) {
      // 进入到这里说明：左边的值大于 flag，右边的值小于 flag，将它们进行位置交换
      ;[arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }
  // 循环结束后，将对照值交换到它应该在的位置
  ;[arr[init], arr[start - 1]] = [arr[start - 1], arr[init]]
  // 返回对照值的位置
  return start
}
function quickSort1(arr, start, end) {
  // 只有左边位置小于右边才执行
  if (start < end) {
    // index 接收的值是数组第一位 flag 对照值的位置，方便后面进行左右数组分别递归排序
    const index = quick(arr, start, end)
    // 递归左边
    quickSort1(arr, start, index - 1)
    // 递归右边
    quickSort1(arr, index, end)
  }
  return arr
}
console.log('原地快排', quickSort1(arr, 0, arr.length - 1))
