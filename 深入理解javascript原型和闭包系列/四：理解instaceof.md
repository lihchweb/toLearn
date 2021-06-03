```js
function Foo(){};
var f1 = new Foo();

console.log(f1 instanceof Foo) //true
console.log(f1 instanceof Object) //true
```

instanceof运算符的第一个变量是一个对象，称为A，第二个变量一般是一个函数，称为B。

Instanceof的判断规则是：沿着A的__proto__这条线来找，同时沿着B的prototype这条线来找，如果两条线能找到同一个引用，即同一个对象，那么就返回true。如果找到终点还未重合，则返回false。

依据上述规则，可以得到类似下面这些结论:

```js
Object instanceof Function //true

Function instanceof Object //true

Function instanceof Function //true
```

整合前面内容，得到下图：

![image](https://user-images.githubusercontent.com/24636279/120441040-bf8bb380-c3b6-11eb-8f4e-86c14c341bc0.png)

Instanceof这样设计，到底有什么用？到底instanceof想表达什么呢？

重点就这样被这位老朋友给引出来了——继承——原型链。

即，instanceof表示的就是一种继承关系，或者原型链的结构。
