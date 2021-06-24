# 1. 目录

1. [数组的属性](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#1-%E6%95%B0%E7%BB%84%E7%9A%84%E5%B1%9E%E6%80%A7)
2. [数组的方法](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#2-%E6%95%B0%E7%BB%84%E7%9A%84%E6%96%B9%E6%B3%95)
3. [数组实例](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#3%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B)
   1. [属性](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#31-%E5%B1%9E%E6%80%A7)
   2. [方法](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#32-%E6%96%B9%E6%B3%95)
      1. [修改器方法](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#321-%E4%BF%AE%E6%94%B9%E5%99%A8%E6%96%B9%E6%B3%95)
      2. [访问方法](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#322-%E8%AE%BF%E9%97%AE%E6%96%B9%E6%B3%95)
      3. [迭代方法](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#323-%E8%BF%AD%E4%BB%A3%E6%96%B9%E6%B3%95)
4. [数组的泛型方法](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#4-%E6%95%B0%E7%BB%84%E7%9A%84%E6%B3%9B%E5%9E%8B%E6%96%B9%E6%B3%95)
5. [规范](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#5-%E8%A7%84%E8%8C%83)
6. [方法详细](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#6-%E6%96%B9%E6%B3%95%E8%AF%A6%E7%BB%86)
   1. [splice()](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#61-splice)
   2. [concat()](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#62--concat)
   3. [join()](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#63-join)
   4. [slice()](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#64-slice)
   5. [toString()](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#64-slice)
7. [面试点](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#7-%E9%9D%A2%E8%AF%95%E7%82%B9)
   1. [数组扁平化](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#71-%E6%95%B0%E7%BB%84%E6%89%81%E5%B9%B3%E5%8C%96)
   2. [7.2 利用slice将类数组对象转化为数组对象](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#72-%E5%88%A9%E7%94%A8slice%E5%B0%86%E7%B1%BB%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E8%BD%AC%E5%8C%96%E4%B8%BA%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1)


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

> 可以通过控制台打印```Array.prototype```来验证，可以看出它是要给数组，数组中有一个```length```的项，它的值为0


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



- [Array.prototype.concat()](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#62--concat)： 返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。 
- [Array.prototype.join()](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#63-join)：连接所有数组元素组合成一个字符串。
- [Array.prototype.slice()](https://github.com/lihchweb/toLearn/blob/main/js/Array.md#64-slice)：抽取当前数组中的一段元素组合成一个新数组。
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

[数组的泛型方法，可点击了解](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#%E6%95%B0%E7%BB%84%E6%B3%9B%E5%9E%8B%E6%96%B9%E6%B3%95)





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


### 6.3 join()



```js
arr.join([separator])
```



> join()方法将一个数组（或者类数组对象）的所有元素连接成一个字符串并返回这个字符串，如果数组只有一个项目，则返回这个项目项目并且不使用分隔符。如果数组为空，则返回空字符串。





#### 参数

 `separator` **可选** ：指定一个字符串来分割数组中的每个元素。如果需要，将分隔符转化为字符串。如果该值缺省，那么数组元素会以逗号(,)分隔。如果该值是空字符串( "" )，则所有元素之间没有任何字符。

**注意这里的空字符串("")和空字符串里打上空格的区别(" ")**

#### 返回值

 一个所有数组元素连接的字符串。如果 `arr.length` 为0，则返回空字符串。 

> 如果数组里一个元素为 `undefined` 或 `null`，它会被转换为空字符串。 

#### 示例

```js
var arr = [2, 3, 4];
var str1 = arr.join(); //"2,3,4"
var str2 = arr.join(',') //"2,3,4"
var str3 = arr.join('-') //"2-3-4"
var str4 = arr.join('') //"234"
```


### 6.4 slice()



```js
arr.slice([begin[, end]])
```



>  `**slice()**` 方法返回一个新的数组对象，这一对象是一个由 `begin` 和 `end` 决定的原数组的**浅拷贝**（包括 `begin`，不包括`end`）。原始数组不会被改变。 



#### 参数

 `begin` **可选** ：提取开始处的下标，从0开始。

- 如果该值为负数，则表示从原数组的倒数第几个元素开始取。
- 如果省略该参数，则表示从数组的第0项开始取。
- 如果该值超出数组的索引范围，那么此时就会返回空数组。



 `end` **可选** ：提取终止处的索引。在该处结束提取。也就是说slice提取的元素从start开始到end结束。**包含start，但是不包含end。**

slice(1,4)会提取原数组中从第1项到第4项，但是不包含第4项。

- 如果该值为负数： 表示在原数组中的倒数第几个元素结束抽取。 `slice(-2,-1)` 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。 
- 如果省略该参数： 则 `slice` 会一直提取到原数组末尾。 
- 如果该值超出数组的索引范围， `slice` 也会一直提取到原数组末尾。 



#### 返回值

  一个含有被提取元素的新数组。



#### 补充

- 如果该元素是个对象引用 （不是实际的对象），`slice` 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。

- 对于字符串、数字及布尔值来说（不是 `String`、`Number`或者`Boolean`对象），`slice` 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。

 

#### 示例



```js
var arr = [3, 4, 1, 87, 45]
var a1 = arr.slice() //[3, 4, 1, 87, 45]
var a2 = arr.slice(1,4); //[ 4, 1, 87 ]
var a3 = arr.slice(3) //[ 87, 45 ]
```

### 6.5 toString()



```js
arr.toString()
```



>  返回一个字符串，表示指定的数组及其元素。 



`Array`对象覆盖了`Object`的 `toString` 方法。对于数组对象，`toString` 方法连接数组并返回一个字符串，其中包含用逗号分隔的每个数组元素。



**注意：当一个数组被作为文本值或者进行字符串连接操作时，将会自动调用其 `toString` 方法。**

#### 示例

```js
var array = [1, 2, 'a'];

console.log(array.toString()); //'1,2,a'
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

> 该方法是underscore的变种方法。
>
> 思路: output用以存储已经扁平化的数据。遍历数组中的项，如果是数组，并且
>
> - 只扁平化一次：那就遍历该项，依次将该项里的值放入output里
> - 全部扁平化：那就递归处理，传入的值为数组里的项，output也作为参数传入
>
> 如果不是数组，并且
>
> - strict为false：值放入数组
> - strict为true：跳过，不处理。



```js
/**
 * 数组扁平化
 * @param  {Array} input   要处理的数组
 * @param  {boolean} shallow 是否只扁平一层
 * @param  {boolean} strict  是否严格处理元素
 * @param  {Array} output  这是为了方便递归而传递的参数，用来存储返回的值
 * 源码地址：https://github.com/jashkenas/underscore/blob/master/underscore.js#L528
 */
function flatten(input, shallow, strict, output) {

    // 递归使用的时候会用到output
    output = output || [];
    var idx = output.length;

    for (var i = 0, len = input.length; i < len; i++) {

        var value = input[i];
        // 如果是数组，就进行处理
        if (Array.isArray(value)) {
            // 如果是只扁平一层，遍历该数组，依此填入 output
            if (shallow) {
                var j = 0, length = value.length;
                while (j < length) output[idx++] = value[j++];
            }
            // 如果是全部扁平就递归，传入已经处理的 output，递归中接着处理 output
            else {
                flatten(value, shallow, strict, output);
                idx = output.length;
            }
        }
        // 不是数组，根据 strict 的值判断是跳过不处理还是放入 output
        else if (!strict){
            output[idx++] = value;
        }
    }
    return output;
}
```



underscore里的扁平化方法如下：

```js
  function flatten$1(input, depth, strict, output) {
    output = output || [];
    if (!depth && depth !== 0) {
      depth = Infinity;
    } else if (depth <= 0) {
      return output.concat(input);
    }
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (isArray(value) || isArguments$1(value))) {
        // Flatten current level of array or arguments object.
        if (depth > 1) {
          flatten$1(value, depth - 1, strict, output);
          idx = output.length;
        } else {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  }
```

### 7.2 利用slice将类数组对象转化为数组对象

> 该方式在有道云笔记中有记录。



```js
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
//上面的写法可以精简如下
function list() {
    return [].slice.call(arguments);
}
```


