---
title: JSON(JavaScript Object Notation)的定义：数据格式
date: 2019-12-25
type: post
blog: true
excerpt: 在开发大型系统时，会碰到不断重复出现的问题，模式就是为这种已知且明晰的问题提供标准化解决方案，可以将模式理解为一种最佳实践、一种有价值的抽象或者是一种解决常见问题的模板  
---

# JSON(JavaScript Object Notation)的定义：数据格式
## JSON类型的分类
* 简单值(注意JSON不支持表示undefined值)
* 对象
* 数组
## 解析与序列化
* 序列化
早期是使用eval()函数，但使用该函数对JSON数据结构求值存在风险，可能会执行一些恶意代码  
现代浏览器定义了一个全局对象JSON,其存在两个方法，stringify()和parse()
```javascript
var book = {
    title: 'Professional JavaScript',
    author: [
        'Nicholas C. Zakas'
    ],
    edition: 3,
    year: 2011
}
var jsonText = JSON.stringify(book)
// JSON.stringify(object, filter, retract)
// 进阶：可以给对象添加toJSON方法，定制序列化返回对象
```
* 解析
```javascript
JSON.parse(json对象, reviver) //reviver表示还原函数
```
