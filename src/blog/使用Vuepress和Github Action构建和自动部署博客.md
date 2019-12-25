---
title: 使用Vuepress和Github Action构建和自动部署博客
date: 2019-12-25
type: post
blog: true
excerpt: 一直想搞一个自己的博客，用过不同技术，后来发现还是用Vue最好，比较符合我的技术栈，便于进行自己个人的主题设计，同时还有自动化部署以及持续集成，Github Action是真的香，昨天还玩了一阵子jenkins，发现概念比较多，各种安装比较麻烦！
---

> Refer: [转载的崔老板的博客](https://blog.csdn.net/sD7O95O/article/details/103414989)

终于把自己的博客搞好了！:tada: :tada: :tada: :tada: ！！一直想搞一个自己的博客，用过不同技术，后来发现还是用Vue最好，比较符合我的技术栈，便于进行自己个人的主题设计，同时还有自动化部署以及持续集成，Github Action是真的香，昨天还玩了一阵子jenkins，发现概念比较多，各种安装比较麻烦！

::: tip
这是一个提示
:::

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

## 要求

对Github有基本的了解，一些命令行知识，良好的英语知识，便于查看文档

## 总体设计

两个Github仓库，分别是 **[放网站的仓库](https://github.com/Ctum/Ctum.github.io)**， **[项目仓库](https://github.com/Ctum/vuepress-blog-boilerplate)** ,
