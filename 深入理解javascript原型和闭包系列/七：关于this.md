
**在函数中，this到底取何值，是在函数真正被执行调用的时候确定的，函数定义的时候确定不了。</br>因为this的取值是执行上下文环境的一部分，而每次调用函数，都会产生一个新的上下文执行环境。**

### 情况1：构造函数

构造函数可以理解为是用来new对象的函数。但是严格来说所有的函数都可以new一个对象，但是有些函数的定义就是为了用来new对象的，一般来说，构造函数的函数名第一个字母会大写。

```
function Foo() {
  this.name = 'lihouchun'
  this.age = 18
  console.log(this) //Foo {name: 'lihouchun', age: 18}
}

var f1 = new Foo();

console.log(f1.name) // lihouchun
console.log(f1.age) //18

```

**如何函数作为构造函数被使用，那么其中的this就指向它即将new出来的那个对象。**

但是直接调用这个Foo函数的时候，this指向的是window.

```
function Foo() {
  this.name = 'lihouchun'
  this.age = 18
  console.log(this) //window
}

Foo();

```

### 情况2：函数作为对象的一个属性

**如果函数作为对象的一个属性，并且作为对象的属性被调用时，函数中的this指向该对象。**

```
var obj = {
  x: 10,
  fn: function () {
    console.log(this); // {x: 10, fn: ƒ}
    console.log(this.x); // 10
  }
}

obj.fn();
```

但是，如果它不是作为obj的属性被调用时，指向的是window.如下所示:

```
var obj = {
  x: 10,
  fn: function () {
    console.log(this); // window
    console.log(this.x); // undefined
  }
}

var fn1 = obj.fn
fn1()
```
fn函数被赋值到了另一个变量fn1中，并且执行fn1，此时this指向window.

### 3.函数用call或者apply调用

当一个函数被call，apply调用时，this的值就取决于传入的对象的值。

```
var obj = {
  x: 100
}

var fn = function () {
  console.log(this) // object {x: 100}
  console.log(this.x)// 100
}

fn.call(obj)
```

### 情况4：全局/调用普通函数

当在全局环境或者调用普通函数时，this指向window.

下面一种特殊情况:

```
var x = 10;

var obj =  {
  x: 20,
  fn:function () {
    function bar() {
      console.log(this); //window
      console.log(this.x); //20
    }
    
    bar();
  }
}

obj.fn();
```
函数fn虽然是定义在obj对象内，但是它只是一个普通函数，this仍然指向window.

---

jQuery一个源码:

![image](https://user-images.githubusercontent.com/24636279/120597146-3f795280-c477-11eb-9116-0756650b1201.png)

jQuery.extend和jQuery.fn.extend都指向了同一个函数，但是当执行时，其中this会指向不同的对象。

执行jQuery.extend()时，this指向jQuery,当执行jQuery.fn.extend()时，this指向jQuery.fn


> 其实，不仅仅是构造函数的prototype，即便是在整个原型链中，this代表的也都是当前对象的值。
