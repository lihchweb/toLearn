

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
- ```Array.prototype.splice()```： 在任意的位置给数组添加或删除任意个元素。 

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
| [ECMAScript 1st Edition (ECMA-262)](https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262, 1st edition, June 1997.pdf) | Standard        | 初始定义。                                                   |
| [ECMAScript 5.1 (ECMA-262) Array](https://www.ecma-international.org/ecma-262/5.1/#sec-15.4) | Standard        | 新增方法: [`Array.isArray`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray), [`indexOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`lastIndexOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`every`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`some`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some), [`forEach`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [`map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`filter`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`reduce`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), [`reduceRight`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight) |
| [ECMAScript 2015 (6th Edition, ECMA-262) Array](https://www.ecma-international.org/ecma-262/6.0/#sec-array-objects) | Standard        | 新增方法：[`Array.from`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.of`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of), [`find`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`findIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`fill`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill), [`copyWithin`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin) |
| [ECMAScript (ECMA-262) Array](https://tc39.es/ecma262/#sec-array-objects) | Living Standard | 新增方法：[`Array.prototype.includes()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) |

