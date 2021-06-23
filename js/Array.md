# 1. 目录

1. 数组的属性
2. 数组的方法
3. 数组实例
   1. 属性
   2. 方法
      1. 修改器方法
      2. 访问方法
      3. 迭代方法
4. 数组的泛型方法
5. 规范
6. 方法详细
   1. splice()
   2. concat()
7. 面试点
   1. 数组扁平化


# 2.详细

## 1. 数组的属性

- ```Array.length```：是指Array这个构造函数的length值，值为1。**它是一个静态属性，不是数组实例的length属性。**
- ```Array.prototype```：通过数组的原型对象可以为所有数组对象添加属性。

## 2. 数组的方法

- ```Array.from()```：从类数组对象或者可迭代对象中创建一个新的数组实例。
-  ```Array.isArray()```：用来判断某个变量是否是数组对象。
- ```Array.of()```：根据一组参数来创建新的数组实例，支持任意的参数数量和类型

## 3.数组实例

所有的数组实例都会从Array.prototype继承属性和方法。修改Array的原型会影响到所有的数组实例。

### 3.1 属性

- ```Array.prototype. constructor``` ：所有的数组实例都会继承该属性，它指向Array，表面所有的数组都行Array构造出来的。
- ```Array.prototype.length```：Array.prototype是个数组，从控制台输出可以看出，它的length属性是0

![image](https://user-images.githubusercontent.com/24636279/123025120-b8cbeb80-d40c-11eb-9018-74e52e4eab72.png)


### 3.2 方法

#### 3.2.1 修改器方法

**这些方法会改变原数组。**

- ```Array.prototype.push()```：在数组的末尾增加新元素，**并返回数组的新长度。**
- ```Array.prototype.pop()```：删除数组的最后一个元素，**并返回这个元素。**
- ```Array.prototype.unshift()```：在数组的开头增加新元素，**并返回数组的新长度。**
- ```Array.prototype.shift()```：删除数组的第一个元素，**并返回这个元素。**
- ```Array.prototype.reverse()```：颠倒数组中元素的排序
- ```Array.prototype.sort()```：对数组元素进行排序，并返回当前数组。
- [Array.prototype.splice()](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#61-splice)： 在任意的位置给数组添加或删除任意个元素。 

#### 3.2.2 访问方法

**这些方法不会改变原数组，会返回一个新的数组或者返回一个其他的期望得到的值。**



- ```Array.prototype.concat()```： 返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。 
- ```Array.prototype.join()```：连接所有数组元素组合成一个字符串。
- ```Array.prototype.slice()```：抽取当前数组中的一段元素组合成一个新数组。
- ```Array.prototype.toString()```： 返回一个由所有数组元素组合而成的字符串。遮蔽了原型链上的 [`Object.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 方法。 
- ```Array.prototype.toLocaleString()```： 返回一个由所有数组元素组合而成的本地化后的字符串。遮蔽了原型链上的 [`Object.prototype.toLocaleString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) 方法。 
- ```Array.prototype.indexOf()```： 返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。 
- ```Array.prototype.lastIndexOf()```： 返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。 

#### 3.2.3 迭代方法

需要注意的是，在大多数的迭代方法中，需要传入一个回调函数作为参数。在每一个数组元素都分别执行完回调函数之前，数组的length会被缓存在某个地方。因此，如果在回调函数中为新数组添加了新的元素，它是不会被便利到的；如果删除了元素或者改变了元素的值，那么随后的遍历操作 可能会受到未预期的影响。**因此，在遍历数组的过程中，不要尝试对原数组进行任何修改!**

- ```Array.prototype.forEach()```：为数组中的每个元素执行一次回调函数。
- ```Array.prototype.every()```：如果数组中的每个元素都满足测试函数，则返回true,否则返回false.
- ```Array.prototype.some()```：如果数组中至少有一个元素满足测试函数，则返回true,否则返回false
- ```Array.prototype.filter()```：将所有在过滤函数中返回true的数组元素放进一个新数组中并返回
- ```Array.prototype.map()```：返回一个由回调函数的返回值组成的新数组
- ```Array.prototype.reduce()```： 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。 
- ```Array.prototype.reduceRight()```： 从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。



## 4. 数组的泛型方法

数组的泛型方法是非标准方法，并且已经弃用，有可能不久就要移除，不做深入理解。

[数组的泛型方法，可点击理解](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#%E6%95%B0%E7%BB%84%E6%B3%9B%E5%9E%8B%E6%96%B9%E6%B3%95)





## 5. 规范



| 规范                                                         | 状态            | 说明                                                         |
| :----------------------------------------------------------- | :-------------- | :----------------------------------------------------------- |
| [ECMAScript 1st Edition (ECMA-262)](https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262), 1st edition, June 1997.pdf | Standard        | 初始定义。                                                   |
| [ECMAScript 5.1 (ECMA-262) Array](https://www.ecma-international.org/ecma-262/5.1/#sec-15.4) | Standard        | 新增方法: [`Array.isArray`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray), [`indexOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`lastIndexOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`every`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`some`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some), [`forEach`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [`map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`filter`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`reduce`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), [`reduceRight`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight) |
| [ECMAScript 2015 (6th Edition, ECMA-262) Array](https://www.ecma-international.org/ecma-262/6.0/#sec-array-objects) | Standard        | 新增方法：[`Array.from`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.of`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of), [`find`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`findIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`fill`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill), [`copyWithin`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin) |
| [ECMAScript (ECMA-262) Array](https://tc39.es/ecma262/#sec-array-objects) | Living Standard | 新增方法：[`Array.prototype.includes()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) |

## 6. 方法详细

### 6.1 splice()

```js
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```



#### 参数

 **start**： 指定修改的开始位置（从0计数）。

- 如果超出了数组的长度，则从数组末尾开始添加内容；
- 如果是负值，则表示从数组末位开始的第几位（从-1计数，这意味着-n是倒数第n个元素并且等价于`array.length-n`）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位。 



 `deleteCount` **可选** ：整数，表示要移除的数组元素的个数。

- 如果 `deleteCount` 大于 `start` 之后的元素的总数，则从 `start` 后面的元素都将被删除（含第 `start` 位）。

- 如果 `deleteCount` 被省略了，或者它的值大于等于`array.length - start`(也就是说，如果它大于或者等于`start`之后的所有元素的数量)，那么`start`之后数组的所有元素都会被删除。

- 如果 `deleteCount` 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。



 `item1, item2, *...*` **可选** ： 要添加进数组的元素,从`start` 位置开始。如果不指定，则 `splice()` 将只删除数组元素。 

#### 返回值

 由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。 

#### 示例

```js
var arr = [2, 6, 7, 9, 10]
// 1. 从下标为2的开始删除1个
var resArr = arr.splice(2, 1)
//arr [2, 6, 9, 10]
//resArr [7]

//2. 从下标为2的删除所有
var arr = [2, 6, 7, 9, 10]
var resArr = arr.splice(2)
//arr [2, 6]
//resArr [7, 9, 10]

//3.删除并添加
var arr = [2, 6, 7, 9, 10]
var resArr = arr.splice(2, 2, 666, 999)
//arr [2, 6, 666, 999, 10]
//resArr[7, 9]
```
### 6.2  concat()



```js
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```



#### 参数

 `valueN`**可选**： 数组和/或值，将被合并到一个新的数组中。 如果省略了所有 `valueN` 参数，则 `concat` 会返回调用此方法的现存数组的一个浅拷贝。  

#### 返回值

新的Array实例，即返回一个新的数组。

#### 补充

 该方法创建一个新的数组，它由被调用的对象中的元素组成，每个参数的顺序依次是该参数的元素（如果参数是数组）或参数本身（如果参数不是数组）。它不会递归到嵌套数组参数中。 

 该方法不会改变`this`或任何作为参数提供的数组，而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本。 原始数组的元素将复制到新数组中，如果原始数组的元素是：

- 对象引用（而不是实际对象）：`concat`将对象引用复制到新数组中。 原始数组和新数组都引用相同的对象。 也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。（ 如果该元素是数组，同样适用）
- 数据类型如字符串，数字和布尔（不是`String`，`Number` 和`Boolean` 对象）：`concat`将字符串和数字的值复制到新数组中。



> 值得注意的是:  数组/值在连接时保持不变。此外，对于新数组的任何操作（仅当元素不是对象引用时）都不会对原始数组产生影响，反之亦然。 （因为concat执行浅拷贝）

#### 示例

```js
// 1.浅拷贝一个数组，在某些情况下适用。
var arr = [2, 3, 4]
var resArr = [].concat(arr)
//resArr [2, 3, 4]

//2. 正常的链接数组
var arr = [2, 3, 4]
var str = 'foo'
var arr2 = [83, 12]

var resArr = arr.concat(str, arr2)
// resArr [2, 3, 4, "foo", 83, 12]

```

## 7. 面试点

### 7.1 数组扁平化

测试用的数组如下：

```js
var arr = [1, 22, 89, 23, [746, 965, [4582, ['foo', 'bar', 'kevin', [63, 41, 52]]]], 3, [62, 52, 42], true, false, [{name: 'lihch'}]];

```



#### 方案1：递归遍历

> push和concat的运用



判断数组:

- Array.isArray()
- Object.prototype.toString.call(arr) === '[object Array]'

```js
function flattern (array) {
  var resArr = [];
  array.map((item, idx) => {
    if(Object.prototype.toString.call(item) === '[object Array]') {
      resArr = resArr.concat(_flattern(item))
    } else {
      resArr.push(item)
    }
  })

  return resArr;
}
```

遍历可改为for循环或者其他遍历方法，判断数组的方法也可以改用其他。



#### 方案2：reduce()

> 递归遍历的进阶，可以使用reduce来递归遍历，省去了手动 ```resArr = []``` 的步骤

```js
function flattern (array) {
  return array.reduce((initVal, curVal) => {
    return initVal.concat(Array.isArray(curVal) ? __flattern1(curVal) : curVal);
  },[])
}
```

#### 方案3：利用es6扩展运算符...

>  ES6 的扩展运算符，用于取出参数对象的所有可遍历属性，拷贝到当前对象之中 

```js
function flattern(array) {
  while (array.some(item => Array.isArray(item))) {
    array = [].concat(...array);
  }
  return array;
}
```



#### 方案4：undercore的实现方式


