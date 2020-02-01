---
title: 验证二叉搜索树-leetcode-98
date: 2020-1-28
type: post
blog: true
excerpt: Leetcode-98-验证二叉搜索树-midum
---

# 验证二叉搜索树-leetcode-98

[验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/)

* 递归(DFS)
* 递归转化为迭代
* 中序遍历有序

## 题目

```
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true
示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/validate-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## 解题思路

* 遍历(DFS)

## 代码

```cpp
class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return isValid(root, LONG_MIN, LONG_MAX);
    }
    
    bool isValid(TreeNode* node,long lower,long upper) {
      if (node == NULL) return true;
      int val = node->val;
      if(val >= upper) return false;
      if(val <= lower) return false;
      return isValid(node->left, lower, val) && isValid(node->right, val, upper);
    }
};
```