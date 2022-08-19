排序
二分
递归
回溯
贪心
动态规划

#### 回溯
1. 需要全部答案的路径
```
let list = []
function backTrack(list, 临时路径, 输入) {
  
  结束条件：
    临时路径[新增一个路径]

  循环：{
    选择一个数据(选择其他数据)
    递归 backTrack(list, 临时路径, 输入)
    撤回选择的数据
  }
}
backTrack(list)

```

2. 不需要全部路径，只需要 true 和 false