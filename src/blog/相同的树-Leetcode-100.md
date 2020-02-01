---
title: 相同的树-Leetcode-100
date: 2020-1-14
type: post
blog: true
excerpt: Leetcode-100-相同的树-easy
---

# 相同的树-Leetcode-100

[相同的树](https://leetcode-cn.com/problems/same-tree/), 两种解法，首先看到树想到的就是递归，其次可以考虑比较深度优先序列来比较

* 递归
* DFS

## 题目

```txt
给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:

输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
示例 2:

输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
示例 3:

输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/same-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## 解题思路

* 遍历
  * 比较根节点是否相同，不同返回`false`
  * 当左右子树中一个非空返回`false`
  * 当左右子树均空，返回`true`
  * 最后递归判断左右子树是否相同，当左右子树均相同时返回`true`
  
* DFS

## 代码

```cpp
// 遍历
bool isSameTree(struct TreeNode* p, struct TreeNode* q){
  bool res = true;
  if(!p && !q) return true;
  if(p && !q) return false;
  if(!p && q) return false;
  if(p->val != q->val) return false;
  res = isSameTree(p->left, q->left);
  res = res && isSameTree(p->right, q->right);
  return res;
}
```