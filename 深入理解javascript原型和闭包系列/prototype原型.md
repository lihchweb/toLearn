每个函数都有一个prototype属性，该属性值是一个对象，默认的它只有一个叫做 constructor的属性，指向这个函数本身。如下图所示:

![image](https://user-images.githubusercontent.com/24636279/120297570-cd303300-c2fb-11eb-8181-8efb17105413.png)

**其中SuperType是一个函数，右侧的方框就是它的原型。**

而这个原型作为对象，也应该是一个属性/值的集合，那么也就可以自定义的增加属性。比如：Object对象的原型,

尝试在控制台打印出来：

![image](https://user-images.githubusercontent.com/24636279/120298124-5fd0d200-c2fc-11eb-991c-006516804a70.png)

用图表示就是：





