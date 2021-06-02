// typeof运算符
function _typeof() {
  console.log(typeof x); //undefined
  console.log(typeof 3); //number
  console.log(typeof '3'); //string
  console.log(typeof true); //boolean
  console.log(typeof NaN); //number
  console.log(typeof undefined); //undefined
  
  console.log(typeof null);// object
  console.log(typeof {foo: 1, bar: 2}); //object
  console.log(typeof function(){}); //function
  console.log(typeof /\.d/); //object
  console.log(typeof [1, 2, 3]); //object
}

//undefined, number, string, boolean属于值类型，此处忽略了symbol类型
//剩下为引用类型


// 如何判断变量是否为对象呢
//值类型的判断使用typeof, 引用类型的判断使用instanceof
var fn = function () {}

fn instanceof Object //true

fn instanceof Function //true


//那么对象和函数之间到底是什么关系呢

function Fn() {
  this.name = "jack"
  this.age = 18
}
var fn1 = new Fn();

//上述例子可以看出，fn1对象是通过函数创建的，那所有的对象都是函数创建的吗？

var obj = {a: 10, b: 20}
var arr = [1, 2, 3]
//上面代码，貌似可以推断obj和arr对象都不是像fn1一样是通过函数创建的
//但其实不然，上面只是用到了一种 ‘语法糖',用来快速创建obj和arr对象，
//上述代码的本质是：

var obj = new Object();
obj.a = 10;
obj.b = 20;

var arr = new Array()
arr[0] = 1;
arr[1] = 2; 
arr[2] = 3;
//很明显可以看出，上面的Object和Array都是函数，不信?验证一下：

typeof Object //function
typeof Array // function

//我们可以认为 对象都是通过函数创建的。

//对象是函数创建的，函数又是对象? 它们之间到底有什么关系？
