// 请解释下面题目输出的结果
var val = "test";
console.log("output is " + (val === "Test") ? "123" : "456");
//本质考察运算符优先级的问题
//优先级 () > + > ?

// 1. "output is" + false ? "123" : "456"
// 2. "output is false" ? "123" : "456"
// 非空字符串为truly变量，故而 输出123
