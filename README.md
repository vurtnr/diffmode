## vue2 中虚拟手写diff算法
#### 学习vue2源码，简单的写了下diff匹配新老节点过程及四种状态
#### 通过阅读编译过后的v2源码理解diff执行了哪些步骤
#### 如下：
```
虚拟dom匹配规则
一种全量匹配，四种特殊匹配
全量匹配，如果old中包含new的节点 则是移动，如果不存在则是新增
两端指针始终往中间移动
oldVnode start 与 newVnode start 进行匹配 oldVnode end 与newVnode end 进行匹配 oldVnode start与newVnode end进行匹配 loadVnode end 与 newVnode start 进行匹配 newVnode start 与 所有oldvNode节点进行匹配

每进行一次匹配则start指针往后移动一位 end指针往前移动一位 交叉匹配命中，new start 位置放入 old end 后一位指针，new end 位置放入 old start 

如果匹配到最后 oldstart > oldend 则是新增节点，如果newstart > newend 则是删除节点
```

