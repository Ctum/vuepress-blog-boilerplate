---
title: Javascript基本算法
date: 2019-12-25
type: post
blog: true
excerpt: 在开发大型系统时，会碰到不断重复出现的问题，模式就是为这种已知且明晰的问题提供标准化解决方案，可以将模式理解为一种最佳实践、一种有价值的抽象或者是一种解决常见问题的模板  
---

* 判断回文数
```javascript
function isPlalindrom(str){
    return str == str.split('').reverse().join('')
}
```
* 去掉重复值(数组)
```javascript
function uniqueue(arr){
    let hashTable = {}
    let data = []
    for (let i=0; i<arr.length;i++){
        if (!hashTable[arr[i]]){
            hashTable[arr[i]] = true
            data.push(arr[i])
        }
    }
    return data
}
```
* 找出字符串中出现次数最多的字母
```javascript
// str 有个方法，可以和数组一样把字符一个个取出来, str.charAt(i)
function mostOccur(str){
    let hashTable = {}
    for(let i=0;i<str.length;i++){
        if (!hashTable[str.charAt(i)]){
            hashTable[str.charAt(i)] = 1
        } else {
            hashTable[str.charAt(i)] += 1
        }
    }
    let max = 1
    let maxCode = ''
    for (let key in hashTable) {
        if (hashTable[key] > max){
            max = hashTable[key]
            maxCode = key
        }
    }
    return maxCode
}
```
* 冒泡排序(有待解决)
```javascript
function choose(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp  = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

function bubble(arr) {
    let i = 1 , len = arr.length
    while(i < len){
        for (let j = 0; j <len-i;j++) {
            if (arr[j] > arr[j+1])
                [arr[j+1], arr[j] ]=[arr[j], arr[j+1]]
        }
        i++
    }
}
```
* 快排
```javascript
// 数组方法
function quickSort(arr) {
    if (arr.length <= 1) return arr
    let rightArr = []
    let leftArr = []
    let middle = Math.floor(arr.length / 2)
    let key = arr.splice(middle, 1)[0]
    for (let i=0;i<arr.length;i++) {
        if (arr[i] > key) {
            rightArr.push(arr[i])
        } else {
            leftArr.push(arr[i])
        }
    }
    return [].concat(quickSort(leftArr), [key], quickSort(rightArr))
}

function sortHelp(arr, low, high) {
    let i = low, j = hight
    let e = arr[low]
    while(i < j) {
        while(i < j && arr[j] >= e) j--
        if (i < j) arr[i++] = arr[j]
        while (i < j && arr[i] <= e) i++
        if (i <j ) arr[j--] = arr[i]
    }
    arr[i] = e
    if (low < i -1) sortHelp(arr, low, i -1)
    if (i + 1 < high) sort(arr, i+1, high)
    return arr
}

function quickSort(arr){
    sortHelp(arr, 0, arr.length-1)
}

```
* 不借助临时变量，交换
```javascript
function swap(a, b){
    b = b - a
    a = a + b
    b = a - b
    return [a, b]
}
function swap1(a, b) {
    [a, b ] = [b, a]
    return [a, b]
}
```
* 斐波那契数列
```javascript
function fibonacci(n) {
    let fibArr = []
    let i = 0
    while(i < n){
        if (i <= 1) {
            fibArr.push(i)
        } else {
            fibArr.push(fibArr[i-1] + fibArr[i-2])
        }
        i += 1
    }
    return fibArr
}
function* es6Fibonacci(n) {
    let [pre, cur] = [0, 1]
    for(;;){
        [pre, cur] = [cur, pre + cur]
        yield cur
    }
}
// 这里要区分一下 for...in  和 for...of
// 推荐在循环对象属性的时候，使用for...in,在遍历数组的时候的时候使用for...of。
// for...in循环出的是key，for...of循环出的是value
```
* 求数组最大，最小值
```javascript
function maxMin(arr) {
    let max = Math.max.apply(null, arr)
    let min = Math.min(...arr)
    return max -min
}
```
* 随机生成指定长度的字符串
```javascript
function randomString(n) {
    let str = 'abcdefghijklmnopqrstuvwxyz9876543210'
    let temp = ''
    let len = str.length
    for (let i = 0; i< n; i++) {
        temp += str.charAt(Math.floor(Math.random() * len))
        // Math.floor 返回小于或等于某一个给定数字的最大整数
    }
    return temp
}
```
* 验证是否为数组
```javascript
function isArray(obj) {
    console.log(Object.prototype.toString.call(obj))
    return Object.prototype.toString.call(obj) == '[object Array]'
}
```
* 二叉查找树
```javascript
function Node(data, left, right){
    this.data = data
    this.left = left
    this.right = right
    this.show = show
}

function show(){
    return this.data
}

function BST(){
    this.root = null
    this.insert = insert
    this.getMax = getMax
    this.getMin = getMin
    this.find = find
}

function insert(data){
    var n = new Node(data, null, null)
    if (this.node == null) {
        this.root = n
    } else {
        var current = this.root
        var parent
        while(true) {
            parent = current
            if (data < current.data) {
                current = current.left
                if(current == null) {
                    parent.left = n
                    break
                }
            } else {
                current = current.right
                if (current == null) {
                    parent.right = n
                }
            }
        }
    }
}

```