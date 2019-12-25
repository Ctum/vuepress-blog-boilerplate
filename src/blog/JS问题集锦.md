---
title: Javascript问题
date: 2019-12-25
type: post
blog: true
excerpt: 在开发大型系统时，会碰到不断重复出现的问题，模式就是为这种已知且明晰的问题提供标准化解决方案，可以将模式理解为一种最佳实践、一种有价值的抽象或者是一种解决常见问题的模板  
---

## JS问题集锦
* `['1', '2', '3'].map(parseInt)`
```javascript
// map(callback(currentValue[, index[, array]][,thisArg]))
// parseInt(string[, radix]) radix表示string是多少进制表示的
// Result
[1, NaN, NaN]
```
* `[typeof null, null of Object]`
```javascript
typeof null === 'Object' //定义
// instanceof 运算符用来检测 constructor.prototype 是否存在于参数的原型链上。
// Result
[Object, false]
```
* `[3, 2, 1].reduce(Math.pow)`
```javascript
array.reduce(callback, initialValue)
// Result
9
```
* `var val = 'msg'; console.log('Value is' + (val === 'msg')? 'something':'nothing')`
```javascript
// 知识点 + 号和 ?的优先级
//Result
something
```
* 题目如下
```javascript
var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();
// 该题目的考点是变量提升即：function 和 variables 的声明会被提升到函数或者全局作用域的顶部
// Result
Goodbye Jack
```
* 题目如下
```javascript
var ary = [0,1,2];
ary[10] = 10;
ary.filter(function(x) { return x === undefined;});
//  从 3 – 9 都是没有初始化的’坑’!, 这些索引并不存在与数组中. 在 array 的函数调用的时候是会跳过这些’坑’的
// Result
[]
```
* `switch()是严格比较`
注意String 实例 和 字符串是不一样的
```javascript
var s1 = 'foo'
var s2 = new String('foo')
console.log(s1 === s2)
// Result
false
```
