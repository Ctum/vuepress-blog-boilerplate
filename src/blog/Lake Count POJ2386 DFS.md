---
title: Lake Count POJ2386 DFS
date: 2020-1-14
type: post
blog: true
excerpt: '来源POJ2386: http://poj.org/problem?id=2386', 主要学习使用DFS进行遍历搜索
---

# Lake Count POJ2386 DFS

主要知识点:DFS

## 题目

<iframe src="http://poj.org/problem?id=2386" width="700px" height="500px" frameborder="0" scrolling="no"></iframe>

## 解题思路

从'W'出发安装dfs遍历，将其周围的'W'全部变成'.',直到所有均变成'.',dfs的次数就是水洼的个数

## 代码

```cpp
#include<cstring>
#include<cstdio>

#define DIRECTSIZE 8
#define MAX 100

struct direct {
  int drow;
  int dcol;
} direct[DIRECTSIZE] = {
  {0,-1}, {0, 1}, {-1, 0}, {1, 0}, {-1, -1}, {-1, 1}, {1, -1}, {1, 1}
};

char field[MAX+2][MAX+2];
int n, m;

void dfs(int row, int col) {
  int i;
  field[row][col] = '.';
  for(i=0; i< DIRECTSIZE; i++) {
    int nextrow = row + direct[i].drow;
    int nextcol = col + direct[i].dcol;
 
    if(field[nextrow][nextcol] == 'W' && nextrow >=0 && nextrow <n && nextcol >=0 && nextcol < m) {
      field[nextrow][nextcol] = '.';
      dfs(nextrow, nextcol);
    }
  }
}

int main() {
  int count=0;
  // scanf函数返回成功读入的数据项数，读入数据时遇到了“文件结束”则返回EOF。
  while(scanf("%d%d", &n, &m) != EOF) {
    memset(field, ' ', sizeof(field));
    for(int i=0; i< n; i++) {
      scanf("%s", field[i]);
    }
    for(int i=0; i< n; i++) {
      for(int j=0; j< m; j++) {
        if(field[i][j] == 'W') {
          dfs(i, j);
          count ++;
        }
      }
    }
    printf("%d", count);
  }
  return 0;
}
```