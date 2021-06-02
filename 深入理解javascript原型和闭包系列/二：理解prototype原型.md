每个函数都有一个prototype属性，该属性值是一个对象，默认的它只有一个叫做 constructor的属性，指向这个函数本身。如下图所示:

![image](https://user-images.githubusercontent.com/24636279/120297570-cd303300-c2fb-11eb-8181-8efb17105413.png)

**其中SuperType是一个函数，右侧的方框就是它的原型。**

而这个原型作为对象，也应该是一个属性/值的集合，那么也就可以自定义的增加属性。比如：Object对象的原型,

尝试在控制台打印出来：

![image](https://user-images.githubusercontent.com/24636279/120298124-5fd0d200-c2fc-11eb-991c-006516804a70.png)

用图表示就是：


![image](https://user-images.githubusercontent.com/24636279/120300182-46308a00-c2fe-11eb-85c5-4a92dd8a78e7.png)

那么我们可以在自己定义的方法的 prototype 中新增自己的属性；

```
function Fn() {
  Fn.prototype.name = 'lihch';
  Fn.prototype.getAge = function () {
    return 1991;
  }
}
```
这样表示出来就是：

![image](https://user-images.githubusercontent.com/24636279/120301005-09b15e00-c2ff-11eb-8bee-1a46dd235a64.png)

那这么做有什么用？
jQuery的方法就是写在原型上的。
用上述代码演示下来就是：
```
function Fn() {
  Fn.prototype.name = 'lihch';
  Fn.prototype.getAge = function () {
    return 1991;
  }
}

var fn = new Fn();
console.log(fn.name);
console.log(fn.getAge());
```

**Fn是一个函数，fn对象是从Fn函数new出来的，这样fn对象就可以调用Fn.prototype中的属性。**

因为每个对象都有一个隐藏的属性， ```__proto__```,这个属性引用了创建这个对象的函数的prototype，即 ```fn.__proto__ === Fn.prototype```

我们一般称这个 ```__proto__```为"隐式原型".

