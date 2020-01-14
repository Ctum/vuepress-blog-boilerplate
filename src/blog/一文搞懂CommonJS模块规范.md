---
title: 一文搞懂CommonJS模块规范
date: 2020-1-9
type: post
blog: true
excerpt: 一直以为对NodeJS中的模块规范和ES6中的模块规范有些傻傻分不清，今天就彻底搞明白JS中的模块机制，以及一些相对易混淆的知识点以及一些比较底层的知识点
---

# CommonJS 模块

## CommonJS 模块定义

CommonJS 模块主要分为模块引用、模块定义和模块标识

* 模块引用
  
  ```js
  const math = require('math');
  ```

* 模块定义

  ```js
  // reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
  // 语法: arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
  module.exports.add = function(...args) {
    return args.reduce((total, cur) => (total+cur));
  }
  ```

* 模块标识
  
  传递给`require`的参数，必须是以小驼峰命名(commonJsModule)的字符串或者是路径

